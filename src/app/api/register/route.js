import { NextResponse } from "next/server";
import { getDbPool, sql } from "@/lib/db";

function backWithError(error, accountName = "", req) {
  const params = new URLSearchParams({ error, accountName });
  return NextResponse.redirect(new URL(`/register?${params.toString()}`, req.url), 303);
}

export async function POST(req) {
  const formData = await req.formData();
  const accountName = String(formData.get("accountName") || "").trim();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (!accountName || !password || !confirmPassword) {
    const missing = [];
    if (!accountName) missing.push("accountName");
    if (!password) missing.push("password");
    if (!confirmPassword) missing.push("confirmPassword");
    return backWithError(`Missing required field(s): ${missing.join(", ")}`, accountName, req);
  }

  if (accountName.length > 12) {
    return backWithError("Account name must be 12 characters or less.", accountName, req);
  }

  if (password.length > 12) {
    return backWithError("Password must be 12 characters or less.", accountName, req);
  }

  if (password !== confirmPassword) {
    return backWithError("Password and confirm password do not match.", accountName, req);
  }

  try {
    const pool = await getDbPool();

    const existing = await pool
      .request()
      .input("accountName", sql.NVarChar(12), accountName)
      .query(`
        SELECT TOP 1 AccountName
        FROM dbo.Accounts
        WHERE AccountName = @accountName
      `);

    if (existing.recordset.length > 0) {
      return backWithError("Account name already exists.", accountName, req);
    }

    await pool
      .request()
      .input("AccountName", sql.NVarChar(12), accountName)
      .input("Password", sql.VarChar(12), password)
      .input("AccountLevelCode", sql.Int, 0)
      .execute("dbo.__CreateAccount");

    const params = new URLSearchParams({ accountName });
    return NextResponse.redirect(new URL(`/register-success?${params.toString()}`, req.url), 303);
  } catch (err) {
    console.error(err);
    if (err && (err.number === 2627 || err.number === 2601)) {
      return backWithError("Account name already exists.", accountName, req);
    }
    return backWithError("Server error while creating your account.", accountName, req);
  }
}

export async function GET(req) {
  return NextResponse.redirect(new URL("/register", req.url), 303);
}

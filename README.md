# Dragon Nest Portal (Next.js + Tailwind)

## Setup

1. Copy `.env.example` to `.env`
2. Fill SQL Server credentials

## Run

```bash
npm install
npm run dev
```

Open: `http://127.0.0.1:3000`

## Registration flow

- Form posts to `/api/register`
- API executes `dbo.__CreateAccount`
- Success redirects to `/register-success`

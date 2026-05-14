import "./globals.css";

export const metadata = {
  title: "Dragon Nest Portal",
  description: "Dragon Nest account registration portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

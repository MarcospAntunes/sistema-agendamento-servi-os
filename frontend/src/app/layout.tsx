import type { Metadata } from "next";
import "./variables.css";
import "./reset.css"

export const metadata: Metadata = {
  title: "DentalCare",
  description: "Consultório Odontológico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

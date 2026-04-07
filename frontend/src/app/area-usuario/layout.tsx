import { ProtectedRoute } from "@/components";
import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/Registry";

export const metadata: Metadata = {
  title: "DentalCare",
  description: "Consultório Odontológico",
};

export default function AreausuarioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ProtectedRoute>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ProtectedRoute>
      </body>
    </html>
  );
}

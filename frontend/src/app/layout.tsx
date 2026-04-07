import type { Metadata } from "next";
import "./variables.css";
import "./reset.css";
import Providers from "./providers";
import { CustomAlert } from "@/components";
import StyledComponentsRegistry from "./lib/Registry";

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
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <CustomAlert />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

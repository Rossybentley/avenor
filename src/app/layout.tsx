import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AVENOR | Property. Perspective. Possibility.",
    template: "%s | AVENOR",
  },
  description:
    "Discover considered residences, real estate investment opportunities, and architectural developments with AVENOR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

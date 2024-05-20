import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({weight: ["100", "300", "400", "500", "700", "900"], style:["italic", "normal"], subsets:["latin"]});

export const metadata: Metadata = {
  title: "MusicaUni: A melhor escola de música",
  description: "Venha fazer parte da melhor escola de música! MusicaUni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev-Bry",
  description: "Dev Bryan",
  icons: {
    icon: '/icon.svg',
  },
};

function HeadContent() {
  return (
    <Head>
      <title>{String(metadata.title) || "Default Title"}</title>
      <meta name="description" content={String(metadata.description) || "Default Description"} />
      <meta property="og:title" content={String(metadata.title) || "Default Title"} />
      <meta property="og:description" content={String(metadata.description) || "Default Description"} />
      <meta property="og:image" content="/default.png" />
      <meta property="og:url" content="https://dev-bry.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
         <HeadContent/>
          {children}
        </Providers>
      </body>
    </html>
  );
}

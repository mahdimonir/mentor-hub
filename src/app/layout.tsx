import { Toaster } from "@/components/ui/sonner";
import {
  BRAND_DESCRIPTION,
  BRAND_FAVICON,
  BRAND_NAME,
  BRAND_URL,
} from "@/consts/brand";
import { KEYWORDS } from "@/consts/keywords";
import { TRPCReactProvider } from "@/trpc/client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: BRAND_NAME,
  description: BRAND_DESCRIPTION,
  authors: [{ name: `${BRAND_NAME} Team`, url: BRAND_URL }],
  keywords: [KEYWORDS.join(", ")],
  icons: {
    icon: `${BRAND_FAVICON}`,
  },
  openGraph: {
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    url: BRAND_URL,
    siteName: BRAND_NAME,
    type: "website",
  },
  metadataBase: new URL(BRAND_URL),
  alternates: {
    canonical: BRAND_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <TRPCReactProvider>
        <html lang="en">
          <body className={`${inter.className} antialiased`}>
            <Toaster />
            {children}
          </body>
        </html>
      </TRPCReactProvider>
    </NuqsAdapter>
  );
}

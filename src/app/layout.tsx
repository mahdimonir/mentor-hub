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

/**
 * Provides the global layout for the application, including font styling, metadata, tRPC provider, and a notification container.
 *
 * Wraps all pages with consistent structure and context providers.
 *
 * @param children - The page content to render within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Toaster />
          {children}
        </body>
      </html>
    </TRPCReactProvider>
  );
}

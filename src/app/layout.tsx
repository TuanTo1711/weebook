import "~/styles/globals.css";

import { ColorSchemeScript } from "@mantine/core";
import clsx from "clsx";
import { type Metadata } from "next";
import { headers } from "next/headers";

import { fontSans } from "~/config/fonts";
import { siteConfig } from "~/config/site";
import { TRPCReactProvider } from "~/trpc/react";
import Providers from "./_providers";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={clsx(
          "min-h-screen scroll-smooth antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider headers={headers()}>
          <Providers>{children}</Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

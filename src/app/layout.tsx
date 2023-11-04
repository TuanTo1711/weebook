import "~/styles/globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import clsx from "clsx";
import { type Metadata } from "next";
import { headers } from "next/headers";

import { fontLogo, fontMono, fontSans } from "~/config/fonts";
import { siteConfig } from "~/config/site";
import { theme } from "~/config/theme";
import { TRPCReactProvider } from "~/trpc/react";
import ClientProvider from "./_providers";

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
          "min-h-screen scroll-smooth font-sans antialiased",
          fontSans.variable,
          fontLogo.variable,
          fontMono.variable,
        )}
      >
        <TRPCReactProvider headers={headers()}>
          <MantineProvider theme={theme}>
            <ClientProvider>{children}</ClientProvider>
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

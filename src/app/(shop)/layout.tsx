import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
} from "@mantine/core";
import { type Metadata } from "next";
import { Header } from "~/components/header";

export const metadata: Metadata = {
  title: "Weebook - Shop",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={{ height: 80 }} padding="md">
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Container
          size={"xl"}
          px={{ base: "0", lg: "md" }}
          my="md"
          className="space-y-6 sm:space-y-8"
        >
          {children}
        </Container>
      </AppShellMain>
    </AppShell>
  );
}

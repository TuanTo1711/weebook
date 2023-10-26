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

export default function SiteLayout({
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
        <Container size={"xl"}>{children}</Container>
      </AppShellMain>
    </AppShell>
  );
}

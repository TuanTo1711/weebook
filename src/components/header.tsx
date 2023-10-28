"use client";

import { AppShell, Burger, Container, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Cart from "./cart";
import Catalog from "./catalog";
import WeebookLogo from "./logo";
import Search from "./search";
import ThemeSwitch from "./theme-switch";
import UserMenu from "./user-menu";

export function Header() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Container size={"xl"}>
      <Flex justify="space-between" h={"100%"} align={"center"}>
        {/* Logo area */}
        <AppShell.Section className="flex basis-full items-center gap-x-4 no-underline sm:basis-1/3">
          <WeebookLogo />
        </AppShell.Section>

        {/* Search area */}
        <AppShell.Section className="hidden basis-full items-center gap-4 sm:flex">
          <Catalog />
          <Search />
        </AppShell.Section>

        {/* User Util */}
        <AppShell.Section
          h={"100%"}
          className="flex basis-1/3 items-center justify-end gap-x-4"
        >
          <Cart />
          <ThemeSwitch />
          <UserMenu />
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </AppShell.Section>
      </Flex>
    </Container>
  );
}

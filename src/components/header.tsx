"use client";

import { AppShell, Container, Flex } from "@mantine/core";
import Cart from "./cart";
import Categories from "./categories";
import WeebookLogo from "./logo";
import Search from "./search";
import ThemeSwitch from "./theme-switch";
import UserMenu from "./user-menu";
import Notifications from "./notifications";

export function Header() {
  return (
    <Container size={"xl"}>
      <Flex justify="space-between" h={"100%"} align={"center"}>
        {/* Logo area */}
        <AppShell.Section className="flex basis-full items-center gap-x-4 no-underline sm:basis-1/3">
          <WeebookLogo />
        </AppShell.Section>

        {/* Search area */}
        <AppShell.Section className="hidden basis-full items-center gap-4 sm:flex">
          <Categories />
          <Search />
        </AppShell.Section>

        {/* User Util */}
        <AppShell.Section
          h={"100%"}
          className="flex basis-1/3 items-center justify-end gap-x-4"
        >
          <Notifications />
          <Cart />
          <ThemeSwitch />
          <UserMenu />
        </AppShell.Section>
      </Flex>
    </Container>
  );
}

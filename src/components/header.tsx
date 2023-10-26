"use client";

import {
  AppShell,
  Burger,
  Container,
  Flex,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { fontLogo } from "~/config/fonts";
import { siteConfig } from "~/config/site";
import WeebookLogo from "./logo";
import Search from "./search";
import ThemeSwitch from "./theme-switch";
import Catalog from "./catalog";
import Link from "next/link";

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useHotkeys([["mod+E", () => toggleColorScheme()]]);
  const [opened, { toggle }] = useDisclosure();

  return (
    <Container size={"xl"}>
      <Flex justify="space-between" h={"100%"} align={"center"}>
        {/* Logo area */}
        <AppShell.Section
          h="100%"
          className="flex basis-full items-center gap-x-4 no-underline sm:basis-1/3"
          component={Link}
          href={"/"}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <WeebookLogo width={80} height={80} src="/favicon.ico" />
          <Text
            variant="gradient"
            gradient={{
              from: colorScheme === "light" ? "lightGray.7" : "lightGray.2",
              to: colorScheme === "light" ? "darkYellow" : "darkYellow",
              deg: 180,
            }}
            size="xl"
            fw={700}
            className={fontLogo.className}
          >
            {siteConfig.name}
          </Text>
        </AppShell.Section>

        {/* Search area */}
        <AppShell.Section
          h={"100%"}
          className="hidden basis-full items-center gap-4 sm:flex"
        >
          <Catalog />
          <Search />
        </AppShell.Section>

        {/* User Util */}
        <AppShell.Section
          h={"100%"}
          className="flex basis-1/3 items-center justify-end"
        >
          <ThemeSwitch />
        </AppShell.Section>
      </Flex>
    </Container>
  );
}

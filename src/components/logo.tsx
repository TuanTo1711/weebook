"use client";

import { Anchor, Image, Text, useMantineColorScheme } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import clsx from "clsx";
import Link from "next/link";
import { fontLogo } from "~/config/fonts";
import { siteConfig } from "~/config/site";

const WeebookLogo = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  useHotkeys([["mod+E", () => toggleColorScheme()]]);
  return (
    <Anchor
      className="flex cursor-pointer items-center gap-x-2 no-underline"
      component={Link}
      href="/"
    >
      <Image alt="Logo" width={80} height={80} src="/favicon.ico" />
      <Text
        visibleFrom="md"
        variant="gradient"
        gradient={{
          from: colorScheme === "light" ? "lightGray.7" : "lightGray.2",
          to: colorScheme === "light" ? "darkYellow" : "darkYellow",
          deg: 180,
        }}
        size="xl"
        fw={700}
        className={clsx("text-2xl", fontLogo.className)}
      >
        {siteConfig.name}
      </Text>
    </Anchor>
  );
};

export default WeebookLogo;

"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useMemo } from "react";

const ThemeSwitch = () => {
  const { toggleColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return useMemo(() => {
    if (computedColorScheme === "dark") {
      return (
        <ActionIcon
          onClick={toggleColorScheme}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={"dark:block"} stroke={1.5} />
        </ActionIcon>
      );
    } else {
      return (
        <ActionIcon
          onClick={toggleColorScheme}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconMoon className={"dark:block"} stroke={1.5} />
        </ActionIcon>
      );
    }
  }, [computedColorScheme, toggleColorScheme]);
};

export default ThemeSwitch;

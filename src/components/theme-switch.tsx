"use client";

import { useMemo } from "react";
import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

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
          radius={"md"}
          variant="default"
          size="lg"
          aria-label="Toggle color scheme"
        >
          <BiSolidSun stroke={"1.5"} size={"60%"} />
        </ActionIcon>
      );
    } else {
      return (
        <ActionIcon
          onClick={toggleColorScheme}
          radius={"md"}
          variant="default"
          size="lg"
          aria-label="Toggle color scheme"
        >
          <BiSolidMoon stroke={"1.5"} size={"60%"} />
        </ActionIcon>
      );
    }
  }, [computedColorScheme, toggleColorScheme]);
};

export default ThemeSwitch;

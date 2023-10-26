"use client";

import { type MantineColorsTuple, createTheme } from "@mantine/core";

const primary: MantineColorsTuple = [
  "#e1f9ff",
  "#ccedff",
  "#9ad7ff",
  "#64c1ff",
  "#3baefe",
  "#20a2fe",
  "#099cff",
  "#0088e4",
  "#0078cd",
  "#0069b6",
];

const secondary: MantineColorsTuple = [
  "#ffebff",
  "#f5d5fc",
  "#e6a9f3",
  "#d779eb",
  "#cb51e4",
  "#c437e0",
  "#c029df",
  "#a91cc6",
  "#9715b1",
  "#840a9c",
];

const lightGray: MantineColorsTuple = [
  "#fef2f5",
  "#eae6e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#676465",
  "#5e5457",
];

const darkGray: MantineColorsTuple = [
  "#fef2f5",
  "#eae6e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#676465",
  "#5e5457",
];

const darkYellow: MantineColorsTuple = [
  "#fff3e3",
  "#ffe5cd",
  "#fec89c",
  "#fda967",
  "#fc903a",
  "#fc7f1e",
  "#fc760e",
  "#e16402",
  "#c95800",
  "#af4a00",
];

export const theme = createTheme({
  primaryColor: "primary",
  cursorType: "pointer",
  colors: {
    primary,
    secondary,
    lightGray,
    darkGray,
    darkYellow,
  },
});

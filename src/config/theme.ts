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
  "#fbe9ff",
  "#eed0ff",
  "#d79efd",
  "#c06afa",
  "#ad3df8",
  "#a121f6",
  "#9b10f7",
  "#8603dd",
  "#7800c6",
  "#6800ae",
];

const lightGray: MantineColorsTuple = [
  "#f0f6fb4d",
  "#e5e7ea4d",
  "#cacccf4d",
  "#acb0b54d",
  "#93989f4d",
  "#8389924d",
  "#7a828c4d",
  "#676f7b4d",
  "#5b636f4d",
  "#4b55644d",
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

const lightYellow: MantineColorsTuple = [
  "#f9f7f1",
  "#eeece4",
  "#ddd6c3",
  "#ccc09f",
  "#bdad81",
  "#b3a06c",
  "#af9a61",
  "#998650",
  "#887745",
  "#766637",
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
    lightYellow,
  },
});

"use client";

import { Image } from "@mantine/core";
import { type FC } from "react";

type WeebookLogoProps = {
  width: number;
  height: number;
  src: string;
};

const WeebookLogo: FC<WeebookLogoProps> = ({ width, height, src }) => {
  return <Image src={src} alt={"weebook-logo"} h={height} w={width} />;
};

export default WeebookLogo;

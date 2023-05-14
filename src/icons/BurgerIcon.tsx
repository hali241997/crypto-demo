"use client";

import { FC } from "react";
import { IconProps } from "./types";

const BurgerIcon: FC<IconProps> = ({ width = "37", height = "23" }) => {
  return (
    <svg viewBox="0 0 37 23" width={width} height={height}>
      <rect x="8" width="21" height="3" rx="1.5" fill="#DECDFF" />
      <rect x="8" y="20" width="21" height="3" rx="1.5" fill="#DECDFF" />
      <rect y="10" width="37" height="3" rx="1.5" fill="#DECDFF" />
    </svg>
  );
};

export default BurgerIcon;

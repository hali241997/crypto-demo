"use client";

import { FC } from "react";
import { IconProps } from "./types";

const FacebookIcon: FC<IconProps> = ({ width = "19", height = "20" }) => {
  return (
    <svg fill="none" viewBox="0 0 19 20" width={width} height={height}>
      <path
        d="m10.606 17.498v-6.83h2.189l0.3254-2.6742h-2.5144v-1.7033c0-0.77167 0.2043-1.3 1.2564-1.3h1.3332v-2.3842c-0.6487-0.07317-1.3007-0.1085-1.9531-0.10583-1.9348 0-3.2632 1.2433-3.2632 3.5258v1.9625h-2.1747v2.6742h2.1795v6.835h2.622z"
        fill="#fff"
      />
    </svg>
  );
};

export default FacebookIcon;

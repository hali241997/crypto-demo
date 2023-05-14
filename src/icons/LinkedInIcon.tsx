"use client";

import { FC } from "react";
import { IconProps } from "./types";

const LinkedInIcon: FC<IconProps> = ({ width = "13", height = "14" }) => {
  return (
    <svg fill="none" viewBox="0 0 13 14" width={width} height={height}>
      <path
        d="m11.951 0.047974h-10.998c-0.52682 0-0.95282 0.43582-0.95282 0.97465v11.572c0 0.5389 0.426 0.9773 0.95282 0.9773h10.998c0.5268 0 0.9553-0.4384 0.9553-0.9746v-11.574c0-0.53883-0.4285-0.97465-0.9553-0.97465zm-8.1217 11.524h-1.9157v-6.4553h1.9157v6.4553zm-0.95786-7.3349c-0.61505 0-1.1116-0.52034-1.1116-1.1622s0.49658-1.1622 1.1116-1.1622c0.61252 0 1.1091 0.52034 1.1091 1.1622 0 0.6392-0.49658 1.1622-1.1091 1.1622zm8.1267 7.3349h-1.9132v-3.1378c0-0.74749-0.0126-1.7116-0.99567-1.7116-0.99568 0-1.1469 0.81616-1.1469 1.6587v3.1907h-1.9107v-6.4553h1.8351v0.8822h0.02521c0.25459-0.50713 0.87972-1.0433 1.8099-1.0433 1.9384 0 2.2964 1.3365 2.2964 3.0745v3.542z"
        fill="#fff"
      />
    </svg>
  );
};

export default LinkedInIcon;

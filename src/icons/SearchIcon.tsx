"use client";

import { FC } from "react";
import { IconProps } from "./types";

const SearchIcon: FC<IconProps> = ({ width = "32", height = "32" }) => {
  return (
    <svg viewBox="0 0 32 32" width={width} height={height}>
      <path
        d="m14.667 6.3704c-4.582 0-8.2963 3.7143-8.2963 8.2963 0 4.5819 3.7143 8.2963 8.2963 8.2963 4.5819 0 8.2963-3.7144 8.2963-8.2963 0-4.582-3.7144-8.2963-8.2963-8.2963zm-10.667 8.2963c0-5.8911 4.7756-10.667 10.667-10.667 5.891 0 10.667 4.7756 10.667 10.667 0 5.891-4.7756 10.667-10.667 10.667-5.8911 0-10.667-4.7756-10.667-10.667z"
        clipRule="evenodd"
        fill="#9A99AD"
        fillRule="evenodd"
      />
      <path
        d="m23.022 23.022c0.4734-0.4734 1.2409-0.4734 1.7142 0l2.9091 2.9091c0.4734 0.4733 0.4734 1.2408 0 1.7142-0.4733 0.4733-1.2408 0.4733-1.7142 0l-2.9091-2.9091c-0.4733-0.4734-0.4733-1.2409 0-1.7142z"
        clipRule="evenodd"
        fill="#9A99AD"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SearchIcon;

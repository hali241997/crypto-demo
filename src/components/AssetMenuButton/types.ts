import { Dispatch, SetStateAction } from "react";

export interface AssetMenuButtonProps {
  item: AssetMenuItem;
  index: number;
  menus: AssetMenuItem[];
  setMenus: Dispatch<SetStateAction<AssetMenuItem[]>>;
}

export interface AssetMenuItem {
  name: string;
  selected: Boolean;
}

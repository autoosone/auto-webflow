import * as React from "react";
import * as Types from "./types";

declare function ActiveCard(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  card?: Types.Asset.Image;
  colorName?: React.ReactNode;
  year?: React.ReactNode;
  prices?: React.ReactNode;
}): React.JSX.Element;

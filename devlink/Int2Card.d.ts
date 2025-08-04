import * as React from "react";
import * as Types from "./types";

declare function Int2Card(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  card?: Types.Asset.Image;
  brandName?: React.ReactNode;
  colorName?: React.ReactNode;
  year?: React.ReactNode;
  prices?: React.ReactNode;
}): React.JSX.Element;

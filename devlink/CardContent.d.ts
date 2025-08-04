import * as React from "react";
import * as Types from "./types";

declare function CardContent(props: {
  as?: React.ElementType;
  brandName?: React.ReactNode;
  colorName?: React.ReactNode;
  year?: React.ReactNode;
  prices?: React.ReactNode;
}): React.JSX.Element;

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardImageWrapper.module.css";

export function CardImageWrapper({
  as: _Component = _Builtin.Block,
  card = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card_image_wrapper")}
      id={_utils.cx(
        _styles,
        "w-node-_6ca304b3-85b2-7e8e-deb9-64ccda557742-da557742"
      )}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "card_image_logo")}
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
      />
      <_Builtin.Image
        className={_utils.cx(_styles, "card_image")}
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src={card}
      />
    </_Component>
  );
}

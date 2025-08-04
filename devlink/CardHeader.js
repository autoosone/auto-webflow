"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardHeader.module.css";

export function CardHeader({
  as: _Component = _Builtin.Block,
  name = "This is some text inside of a div block.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card_header")}
      id={_utils.cx(
        _styles,
        "w-node-f8d3d19f-1727-0f8a-dbc5-ad99070d8651-070d8651"
      )}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "card_location")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "card_text", "helper")}
          tag="div"
          fs-list-field="city"
        >
          {"This is some text inside of a div block."}
        </_Builtin.Block>
        <_Builtin.Block tag="div">{","}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card_text", "helper")}
          tag="div"
          fs-list-field="state"
        >
          {"This is some text inside of a div block."}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "card_model")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "card_name", "helper")}
          tag="div"
          fs-list-field="name"
        >
          {name}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

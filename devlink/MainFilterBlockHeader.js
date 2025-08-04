"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainFilterBlockHeader.module.css";

export function MainFilterBlockHeader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "filter_block_header-2")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_block_title-6")}
        id={_utils.cx(
          _styles,
          "w-node-_22442b40-c215-a145-85e8-a0797dd8ef5b-7dd8ef5a"
        )}
        tag="div"
      >
        {"Color"}
      </_Builtin.Block>
      <_Builtin.Link
        className={_utils.cx(_styles, "filter_clear", "helper")}
        button={false}
        fs-list-element="clear"
        fs-list-field="color"
        block=""
        options={{
          href: "#",
        }}
      >
        {"Clear"}
      </_Builtin.Link>
    </_Component>
  );
}

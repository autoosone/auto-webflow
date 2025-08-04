"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WizFilterHeader.module.css";

export function WizFilterHeader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "filter_block_header")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_block_title-4")}
        id={_utils.cx(
          _styles,
          "w-node-_203f6692-6ab1-ff2f-83eb-5583e71a73b1-e71a73b0"
        )}
        tag="div"
      >
        {"Countries"}
      </_Builtin.Block>
      <_Builtin.Link
        className={_utils.cx(_styles, "filter_clear", "helper")}
        button={false}
        fs-list-element="clear"
        fs-list-field="country"
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

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WizClear.module.css";

export function WizClear({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "filter_clear-all", "helper")}
      id={_utils.cx(
        _styles,
        "w-node-d4d09c65-4c86-deab-a57d-03250b6faa27-0b6faa27"
      )}
      button={false}
      fs-list-element="clear"
      block=""
      options={{
        href: "#",
      }}
    >
      {"Clear All"}
    </_Component>
  );
}

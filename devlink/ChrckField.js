"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ChrckField.module.css";

export function ChrckField({
  as: _Component = _Builtin.FormCheckboxWrapper,
  name,
  name2,
}) {
  return (
    <_Component className={_utils.cx(_styles, "check_field")}>
      <_Builtin.FormCheckboxInput
        className={_utils.cx(_styles, "checkbox_input-2", "helper")}
        type="checkbox"
        name="Checkbox"
        data-name="Checkbox"
        required={false}
        checked={false}
        fs-list-field="make"
        fs-list-value={name}
        id="Checkbox"
        form={{
          type: "checkbox-input",
          name: "Checkbox",
        }}
        inputType="custom"
        customClassName="w-checkbox-input--inputType-custom"
      />
      <_Builtin.FormInlineLabel
        className={_utils.cx(_styles, "checkbox_label")}
      >
        {name2}
      </_Builtin.FormInlineLabel>
      <_Builtin.Block
        className={_utils.cx(_styles, "option-results-2")}
        tag="div"
      >
        {"["}
        <_Builtin.Span fs-cmsfilter-element="filter-results-count">
          {"0"}
        </_Builtin.Span>
        {"]"}
      </_Builtin.Block>
    </_Component>
  );
}

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WizFilterBlock.module.css";

export function WizFilterBlock({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "filter_block-2")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_block_header")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block_title-4")}
          id={_utils.cx(
            _styles,
            "w-node-_7e32467a-d46c-6f87-c6a5-8801ab716fb0-ab716fae"
          )}
          tag="div"
        >
          {"Won an Oscar"}
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "filter_clear", "helper")}
          button={false}
          fs-list-element="clear"
          fs-list-field="oscar"
          block=""
          options={{
            href: "#",
          }}
        >
          {"Clear"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "filter_list")} tag="div">
        <_Builtin.FormRadioWrapper
          className={_utils.cx(_styles, "radio-button_field")}
        >
          <_Builtin.FormRadioInput
            className={_utils.cx(_styles, "radio_button-3", "helper")}
            type="radio"
            name="oscar"
            value="yes"
            data-name="oscar"
            required={false}
            fs-list-field="oscar"
            fs-list-value="yes"
            id="yes"
            form={{
              type: "radio-input",
              name: "oscar",
            }}
            inputType="custom"
            customClassName="w-form-formradioinput--inputType-custom"
          />
          <_Builtin.FormInlineLabel
            className={_utils.cx(_styles, "radio_label")}
          >
            {"Yes"}
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
        </_Builtin.FormRadioWrapper>
        <_Builtin.FormRadioWrapper
          className={_utils.cx(_styles, "radio-button_field")}
        >
          <_Builtin.FormRadioInput
            className={_utils.cx(_styles, "radio_button-3", "helper")}
            type="radio"
            name="oscar"
            value="no"
            data-name="oscar"
            required={false}
            fs-list-field="oscar"
            fs-list-value="no"
            id="no"
            form={{
              type: "radio-input",
              name: "oscar",
            }}
            inputType="custom"
            customClassName="w-form-formradioinput--inputType-custom"
          />
          <_Builtin.FormInlineLabel
            className={_utils.cx(_styles, "radio_label")}
          >
            {"No"}
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
        </_Builtin.FormRadioWrapper>
      </_Builtin.Block>
    </_Component>
  );
}

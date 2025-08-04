"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Mileage.module.css";

export function Mileage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "filter_block")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_block-header")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-small")}
          tag="h3"
        >
          {"Mileage"}
        </_Builtin.Heading>
        <_Builtin.Link
          className={_utils.cx(_styles, "filter_reset")}
          button={false}
          fs-cmsfilter-element="reset"
          fs-cmsfilter-reset="mileage"
          block=""
          options={{
            href: "#",
          }}
        >
          {"Clear"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rangeslider_wrapper")}
        tag="div"
        fs-rangeslider-element="wrapper"
        fs-rangeslider-min="0"
        fs-rangeslider-max="600000"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rangeslider_track")}
          tag="div"
          fs-rangeslider-element="track"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "rangeslider_handle")}
            tag="div"
            fs-rangeslider-element="handle"
            fs-rangeslider-start="0"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "rangeslider_handle")}
            tag="div"
            fs-rangeslider-element="handle"
            fs-rangeslider-start="600000"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "rangeslider_fill")}
            tag="div"
            fs-rangeslider-element="fill"
          />
        </_Builtin.Block>
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "rangeslider_input")}
          name="From-3"
          maxLength={256}
          data-name="From 3"
          placeholder="From"
          disabled={false}
          type="text"
          required={false}
          autoFocus={false}
          fs-displayvalues-element="source-3"
          fs-cmsfilter-field="mileage"
          fs-cmsfilter-range="from"
          fs-cmsfilter-tagcategory="Mileage Range"
          id="From-3"
        />
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "rangeslider_input")}
          name="To-3"
          maxLength={256}
          data-name="To 3"
          placeholder="To"
          disabled={false}
          type="text"
          required={false}
          autoFocus={false}
          fs-displayvalues-element="source-4"
          fs-cmsfilter-field="mileage"
          fs-cmsfilter-range="to"
          fs-cmsfilter-tagcategory="Mileage Range"
          id="To-3"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "range_values")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Span fs-rangeslider-element="display-value">
              {"0"}
            </_Builtin.Span>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.Span fs-rangeslider-element="display-value">
              {"0"}
            </_Builtin.Span>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

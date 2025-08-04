"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardContent.module.css";

export function CardContent({
  as: _Component = _Builtin.Block,
  brandName = "This is some text inside of a div block.",
  colorName = "This is some text inside of a div block.",
  year = "This is some text inside of a div block.",
  prices = "This is some text inside of a div block.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "card_content")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "card_list")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "card_item")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "card_title")}
            tag="div"
          >
            {"Make:"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_info", "helper")}
            tag="div"
            fs-list-field="make"
          >
            {brandName}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "card_item")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "card_title")}
            tag="div"
          >
            {"Color:"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_info", "helper")}
            tag="div"
            fs-list-field="color"
          >
            {colorName}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card_item")}
          id={_utils.cx(
            _styles,
            "w-node-_984a2ce4-27e7-7d0b-c42c-f401711becb0-711beca6"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "card_title")}
            tag="div"
          >
            {"Year:"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_info", "helper")}
            tag="div"
            fs-list-field="year"
          >
            {year}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "featured_embed")}
          id={_utils.cx(
            _styles,
            "w-node-_984a2ce4-27e7-7d0b-c42c-f401711becb4-711beca6"
          )}
          fs-list-field="featured"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "card_price")}
        id={_utils.cx(
          _styles,
          "w-node-_984a2ce4-27e7-7d0b-c42c-f401711becb5-711beca6"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "card_price_text")}
          tag="div"
        >
          {"$"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card_price_text", "helper")}
          tag="div"
          fs-list-field="price"
          fs-list-fieldtype="number"
        >
          {prices}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

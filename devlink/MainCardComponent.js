"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainCardComponent.module.css";

export function MainCardComponent({
  as: _Component = _Builtin.Block,
  name = "This is some text inside of a div block.",
  card = "",
  brandName = "This is some text inside of a div block.",
  colorName = "This is some text inside of a div block.",
  year = "This is some text inside of a div block.",
  prices = "This is some text inside of a div block.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "card_component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "card_header")}
        id={_utils.cx(
          _styles,
          "w-node-_4c60e83f-0795-5d73-7dba-af97b44670fe-b44670fd"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "card_location")}
          tag="div"
        >
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
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "card_image_wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_4c60e83f-0795-5d73-7dba-af97b4467108-b44670fd"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "card_image")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={card}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "card_content")} tag="div">
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
              "w-node-_4c60e83f-0795-5d73-7dba-af97b4467114-b44670fd"
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
              "w-node-_4c60e83f-0795-5d73-7dba-af97b4467118-b44670fd"
            )}
            fs-list-field="featured"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card_price")}
          id={_utils.cx(
            _styles,
            "w-node-_4c60e83f-0795-5d73-7dba-af97b4467119-b44670fd"
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
          >
            {prices}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Int2Card.module.css";

export function Int2Card({
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
          "w-node-_7f85e3a8-c432-f83f-9972-65762bda09ed-2bda09ec"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "card_location")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "card_text")} tag="div">
            {"This is some text inside of a div block."}
          </_Builtin.Block>
          <_Builtin.Block tag="div">{","}</_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "card_text")} tag="div">
            {"This is some text inside of a div block."}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "card_model")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "card_name")} tag="div">
            {name}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "card_image_wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_7f85e3a8-c432-f83f-9972-65762bda09f7-2bda09ec"
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
              className={_utils.cx(_styles, "card_info")}
              tag="div"
            >
              {colorName}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_item")}
            id={_utils.cx(
              _styles,
              "w-node-_7f85e3a8-c432-f83f-9972-65762bda0a03-2bda09ec"
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
              className={_utils.cx(_styles, "card_info")}
              tag="div"
            >
              {year}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "featured_embed")}
            id={_utils.cx(
              _styles,
              "w-node-_7f85e3a8-c432-f83f-9972-65762bda0a07-2bda09ec"
            )}
            fs-list-field="featured"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card_price")}
          id={_utils.cx(
            _styles,
            "w-node-_7f85e3a8-c432-f83f-9972-65762bda0a08-2bda09ec"
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
            className={_utils.cx(_styles, "card_price_text")}
            tag="div"
          >
            {prices}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

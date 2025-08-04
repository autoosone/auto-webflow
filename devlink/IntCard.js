"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IntCard.module.css";

export function IntCard({
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
          "w-node-e4e0fa2f-9c22-8f94-0738-797af24cbefe-f24cbefd"
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
          "w-node-e4e0fa2f-9c22-8f94-0738-797af24cbf08-f24cbefd"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "card_image_logo")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        />
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
              "w-node-e4e0fa2f-9c22-8f94-0738-797af24cbf15-f24cbefd"
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
              "w-node-e4e0fa2f-9c22-8f94-0738-797af24cbf19-f24cbefd"
            )}
            fs-list-field="featured"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card_price")}
          id={_utils.cx(
            _styles,
            "w-node-e4e0fa2f-9c22-8f94-0738-797af24cbf1a-f24cbefd"
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

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WizStaticList.module.css";

export function WizStaticList({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "static_list-wrapper", "helper")}
      tag="div"
      fs-list-element="wrapper"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "static_list", "helper")}
        tag="div"
        fs-list-element="list"
        wized="artistCard_list"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "static_item", "helper")}
          tag="div"
          wized="artistCard"
          fs-list-element="item"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_card")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "filter_card_name")}
              tag="h3"
              wized="artistCard_name"
              fs-list-field="artist_name"
            >
              {"Artist Name"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_card_text")}
              tag="div"
              wized="artistCard_bestFilm"
              fs-list-field="best_film"
            >
              {"Best Film"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_card_text")}
              tag="div"
            >
              <_Builtin.Strong>{"Has an Oscar: "}</_Builtin.Strong>
              <_Builtin.Span fs-list-field="oscar" wized="artistCard_oscar">
                {"Yes"}
              </_Builtin.Span>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_card_text")}
              tag="div"
            >
              <_Builtin.Strong>{"Country: "}</_Builtin.Strong>
              <_Builtin.Span fs-list-field="country" wized="artistCard_country">
                {"UK"}
              </_Builtin.Span>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

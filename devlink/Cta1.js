"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cta1.module.css";

export function Cta1({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section-subscribe")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "subscribe-image")}
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src="https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/688d891ec3a40ec8b9dd7a2b_Subscribe.webp"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "subscribe-shadow")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "subscribe-content")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "heading-style-h1",
            "text-color-white",
            "subscribe"
          )}
          tag="h1"
        >
          {"find your local"}
          <br />
          {"dealer"}
        </_Builtin.Heading>
        <_Builtin.Link
          className={_utils.cx(_styles, "main-button")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-6")}
            tag="div"
          >
            {"see locations"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}

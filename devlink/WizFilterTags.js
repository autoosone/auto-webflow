"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WizFilterTags.module.css";

export function WizFilterTags({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "filter_tags")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_tags_label")}
        tag="div"
      >
        {"Filtering by:"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_tags_item", "helper")}
        tag="div"
        fs-list-element="tag"
        wized="tags"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_tags_text", "helper")}
          tag="div"
          fs-list-element="tag-field"
        >
          {"Tag"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_tags_text", "helper")}
          tag="div"
          fs-list-element="tag-operator"
        >
          {"Operator"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_tags_text", "helper")}
          tag="div"
          fs-list-element="tag-value"
        >
          {"Value"}
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "filter_tags_remove", "helper")}
          width="auto"
          height="auto"
          loading="lazy"
          fs-list-element="tag-remove"
          alt=""
          src="https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/688fc43f095ccc71f01e726b_close-icon.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}

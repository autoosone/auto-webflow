"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainFilterResults.module.css";

export function MainFilterResults({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "filter_results")}
      id={_utils.cx(
        _styles,
        "w-node-_2d468044-56bb-8836-3908-5c8140a6b79a-40a6b79a"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_results_wrapper")}
        tag="div"
      >
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "filter_results_text")}
          id={_utils.cx(
            _styles,
            "w-node-_2d468044-56bb-8836-3908-5c8140a6b79c-40a6b79a"
          )}
        >
          {"Results "}
          <_Builtin.Span
            className={_utils.cx(_styles, "filter_results_span", "helper")}
            fs-list-element="results-count"
          >
            {"1"}
          </_Builtin.Span>
        </_Builtin.Paragraph>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "filter_results_text")}
        >
          {"Showing items "}
          <_Builtin.Span
            className={_utils.cx(_styles, "filter_results_span", "helper")}
            fs-list-element="visible-count-from"
          >
            {"1"}
          </_Builtin.Span>
          {" to"}
          <_Builtin.Span
            className={_utils.cx(_styles, "filter_results_span", "helper")}
            fs-list-element="visible-count-to"
          >
            {"3"}
          </_Builtin.Span>
          {" of "}
          <_Builtin.Span
            className={_utils.cx(_styles, "filter_results_span", "helper")}
            fs-list-element="items-count"
          >
            {"6"}
          </_Builtin.Span>
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.DropdownWrapper
        className={_utils.cx(_styles, "filter_dropdown", "helper")}
        tag="div"
        fs-list-element="sort-trigger"
        delay="0"
        hover={false}
      >
        <_Builtin.DropdownToggle
          className={_utils.cx(_styles, "filter_dropdown_toggle")}
          tag="div"
        >
          <_Builtin.Icon
            className={_utils.cx(_styles, "filter_dropdown_icon")}
            widget={{
              type: "icon",
              icon: "dropdown-toggle",
            }}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_dropdown_label", "helper")}
            tag="div"
            fs-list-element="dropdown-label"
          >
            {"Sort by"}
          </_Builtin.Block>
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList
          className={_utils.cx(_styles, "filter_dropdown_list")}
          tag="nav"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "filter_dropdown_link", "helper")}
            button={false}
            fs-list-field="name-asc"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Name(A-Z)"}</_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "filter_dropdown_link", "helper")}
            button={false}
            fs-list-field="name-desc"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Name (Z-A)"}</_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "filter_dropdown_link", "helper")}
            button={false}
            fs-list-field="year-asc"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Year(Asc)"}</_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "filter_dropdown_link", "helper")}
            button={false}
            fs-list-field="year-desc"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Year (Desc)"}</_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "filter_dropdown_link", "helper")}
            button={false}
            fs-list-field="price-asc"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Lowest Price"}</_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "filter_dropdown_link", "helper")}
            button={false}
            fs-list-field="price-desc"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Highest Price"}</_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
    </_Component>
  );
}

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { FormBlock } from "./FormBlock";
import * as _utils from "./utils";
import _styles from "./FilterResults.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-116":{"id":"e-116","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-117"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a44bcaa0-91c2-0ac9-2ed6-4396cc88502a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a44bcaa0-91c2-0ac9-2ed6-4396cc88502a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746461742553},"e-118":{"id":"e-118","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25e36eca-e1ab-0cff-64b1-89d94a44074b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25e36eca-e1ab-0cff-64b1-89d94a44074b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745521739349}},"actionLists":{"a-44":{"id":"a-44","title":"Filter Dropdown [Open]","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-44-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-44-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"value":"block"}}]},{"actionItems":[{"id":"a-44-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":250,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-44-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1745494869638},"a-45":{"id":"a-45","title":"Filter Dropdown [Close]","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-45-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-45-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".dynamic_dropdown-list","selectorGuids":["3bc6a253-e58c-f72a-de0a-c6cc42532b61"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1745494869638}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FilterResults({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "filter_results")}
      id={_utils.cx(
        _styles,
        "w-node-a44bcaa0-91c2-0ac9-2ed6-4396cc885028-cc885028"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "dynamic_dropdown")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "dynamic_dropdown-toggle")}
          data-w-id="a44bcaa0-91c2-0ac9-2ed6-4396cc88502a"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "dynamic_dropdown-icon")}
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_6697_1036)%22%3E%0A%3Cpath%20d%3D%22M10%2018H14V16H10V18ZM3%206V8H21V6H3ZM6%2013H18V11H6V13Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"Filter"}</_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Block
          className={_utils.cx(_styles, "dynamic_dropdown-list")}
          tag="div"
        >
          <FormBlock />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "filter_results_wrapper")}
        tag="div"
      >
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "filter_results_text")}
          id={_utils.cx(
            _styles,
            "w-node-a44bcaa0-91c2-0ac9-2ed6-4396cc885054-cc885028"
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
    </_Component>
  );
}

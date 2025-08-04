"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Cta.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"},"targets":[{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159297749},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-237"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"},"targets":[{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159297787},"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7793d95-3205-1846-db88-92aead5c977f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7793d95-3205-1846-db88-92aead5c977f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159682669},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-260"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7793d95-3205-1846-db88-92aead5c977f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7793d95-3205-1846-db88-92aead5c977f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159682671}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Cta({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "cta")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "cta__text")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "cta__text-wrapper")}
          tag="div"
        >
          <_Builtin.Heading
            data-w-id="f7793d95-3205-1846-db88-92aead5c977f"
            tag="h2"
          >
            {"Model S"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "cta__text-buttons")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "button--dark")}
              button={false}
              block=""
              options={{
                href: "https://www.eikonlabs.com/",
                target: "_blank",
              }}
            >
              {"order now"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "button--dark")}
              button={false}
              block=""
              options={{
                href: "https://www.eikonlabs.com/",
                target: "_blank",
              }}
            >
              {"compare"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "cta__img")} tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt="Tesla Model S"
          src="https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe06_MS-Order-Hero-Desktop.jpeg"
        />
      </_Builtin.Block>
    </_Component>
  );
}

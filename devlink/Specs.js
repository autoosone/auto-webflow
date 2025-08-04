"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Specs.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-197"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".specs__item","originalId":"30c7e651-7950-f53c-0f71-d63686c640a9","appliesTo":"CLASS"},"targets":[{"selector":".specs__item","originalId":"30c7e651-7950-f53c-0f71-d63686c640a9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159652151},"e-42":{"id":"e-42","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-249"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".specs__item","originalId":"30c7e651-7950-f53c-0f71-d63686c640a9","appliesTo":"CLASS"},"targets":[{"selector":".specs__item","originalId":"30c7e651-7950-f53c-0f71-d63686c640a9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159652190}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Specs({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "specs")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "specs__img")} tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt="Tesla Model S"
          src="https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe07_MS-Specs-Hero-Desktop.jpeg"
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "specs__txt")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "specs__info")} tag="div">
          <_Builtin.Heading tag="h2">
            <_Builtin.Strong>{"Model S "}</_Builtin.Strong>
            {"Specs"}
          </_Builtin.Heading>
          <_Builtin.TabsWrapper
            className={_utils.cx(_styles, "specs__tabs")}
            data-duration-in="300"
            data-duration-out="100"
            current="Tab 1"
            easing="ease"
            fadeIn={300}
            fadeOut={100}
          >
            <_Builtin.TabsMenu
              className={_utils.cx(_styles, "tabs-menu")}
              tag="div"
            >
              <_Builtin.TabsLink
                className={_utils.cx(_styles, "button-tab")}
                data-w-tab="Tab 1"
                block="inline"
              >
                <_Builtin.Block tag="div">{"Plaid"}</_Builtin.Block>
              </_Builtin.TabsLink>
              <_Builtin.TabsLink
                className={_utils.cx(_styles, "button-tab")}
                data-w-tab="Tab 2"
                block="inline"
              >
                <_Builtin.Block tag="div">{"long range"}</_Builtin.Block>
              </_Builtin.TabsLink>
            </_Builtin.TabsMenu>
            <_Builtin.TabsContent
              className={_utils.cx(_styles, "specs__tab-content")}
              tag="div"
            >
              <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
                <_Builtin.Grid
                  className={_utils.cx(_styles, "specs__grid")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Range"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"390 mi (est.)"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Acceleration"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"1.99 s 0-60 mph*"}
                      <br />
                      <_Builtin.Emphasized>
                        {"*with rollout subtracted"}
                      </_Builtin.Emphasized>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"1/4 Mile"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"390 mi (e9.23@155 mph trap speedst.)"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Top Speed"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"200 mph†"}
                      <_Builtin.Emphasized>
                        {
                          "†when equipped with the proper wheels and tires (available fall 2021)"
                        }
                      </_Builtin.Emphasized>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Peak Power"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"1,020 hp"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Drag Coefficient"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"0.208 "}
                      <_Builtin.Emphasized>{"Cd"}</_Builtin.Emphasized>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Cargo"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"28 cu ft"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Powertrain"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"Tri Motor"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Weight"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"4,766 lbs"}
                      <br />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Supercharging Max"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"250 kW"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.TabsPane>
              <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
                <_Builtin.Grid
                  className={_utils.cx(_styles, "specs__grid")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Range"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"412 mi (est.)"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Top Speed"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"155 mph"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Peak Power"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"670 hp"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Drag Coefficient"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"0.208 "}
                      <_Builtin.Emphasized>{"Cd"}</_Builtin.Emphasized>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Wheels"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {'19" or 21"'}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Weight"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"4,561 lbs"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Cargo"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"28 cu ft"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Powertrain"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"Dual Motor"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Acceleration"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"3.1 s 0-60 mph"}
                      <br />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "specs__item")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "specs__line")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block")}
                      tag="div"
                    >
                      {"Supercharging Max"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-2")}
                      tag="div"
                    >
                      {"250 kW"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.TabsPane>
            </_Builtin.TabsContent>
          </_Builtin.TabsWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Powertrain.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"698565f9-73a9-159d-b770-febee005a196","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"698565f9-73a9-159d-b770-febee005a196","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159177274},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"698565f9-73a9-159d-b770-febee005a196","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"698565f9-73a9-159d-b770-febee005a196","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159177275},"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"698565f9-73a9-159d-b770-febee005a198","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"698565f9-73a9-159d-b770-febee005a198","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159189681},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-151"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"698565f9-73a9-159d-b770-febee005a198","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"698565f9-73a9-159d-b770-febee005a198","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159189682},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-256"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"698565f9-73a9-159d-b770-febee005a1cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"698565f9-73a9-159d-b770-febee005a1cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159221655},"e-22":{"id":"e-22","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"698565f9-73a9-159d-b770-febee005a1cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"698565f9-73a9-159d-b770-febee005a1cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159221692},"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317255},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317256},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"},"targets":[{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159561602},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"},"targets":[{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159561604}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Powertrain({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "powertrain")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "container--840",
          "contaiener--840-powertrain"
        )}
        tag="div"
      >
        <_Builtin.Heading
          data-w-id="698565f9-73a9-159d-b770-febee005a196"
          tag="h2"
        >
          {"Electric Powertrain"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph__animated")}
          data-w-id="698565f9-73a9-159d-b770-febee005a198"
        >
          {
            "Long Range and Plaid platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions."
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "container--1260",
          "container--1260-powertrain"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "container",
            "container--840",
            "contaiener--840-powertrain-2"
          )}
          tag="div"
        />
        <_Builtin.TabsWrapper
          className={_utils.cx(_styles, "tabs")}
          data-duration-in="300"
          data-duration-out="100"
          current="Tab 1"
          easing="ease"
          fadeIn={300}
          fadeOut={100}
        >
          <_Builtin.TabsContent
            className={_utils.cx(_styles, "tabs-imgs-wrapper")}
            tag="div"
          >
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 1"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "powetrain__img",
                  "powetrain__img--1"
                )}
                tag="div"
              />
            </_Builtin.TabsPane>
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 2"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "powetrain__img",
                  "powetrain__img--2"
                )}
                tag="div"
              />
            </_Builtin.TabsPane>
          </_Builtin.TabsContent>
          <_Builtin.TabsMenu
            className={_utils.cx(_styles, "freedom-grid")}
            tag="div"
          >
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 1"
              block="inline"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "powertrain__heading")}
                tag="h3"
              >
                {"Long Range"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "powetrain__text")}
              >
                {
                  "Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration."
                }
              </_Builtin.Paragraph>
              <_Builtin.Grid
                className={_utils.cx(_styles, "powertrain-subgrid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "data-grid__item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__title",
                      "data__title-black"
                    )}
                    tag="div"
                  >
                    {"3.1s"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__sub-text",
                      "data__sub-text--black"
                    )}
                    tag="div"
                  >
                    {"0-60mph"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "data-grid__item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__title",
                      "data__title-black"
                    )}
                    tag="div"
                  >
                    {"412mi"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__sub-text",
                      "data__sub-text--black"
                    )}
                    tag="div"
                  >
                    {"range (est.)"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "data-grid__item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__title",
                      "data__title-black"
                    )}
                    tag="div"
                  >
                    {"670hp"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__sub-text",
                      "data__sub-text--black"
                    )}
                    tag="div"
                  >
                    {"peak power"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 2"
              block="inline"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "powertrain__heading")}
                tag="h3"
              >
                {"Plaid"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "powetrain__text")}
              >
                {
                  "Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-sleeved rotor that maintains peak power output all the way to top speed."
                }
              </_Builtin.Paragraph>
              <_Builtin.Grid
                className={_utils.cx(_styles, "powertrain-subgrid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "data-grid__item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__title",
                      "data__title-black"
                    )}
                    tag="div"
                  >
                    {"1.99s*"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__sub-text",
                      "data__sub-text--black"
                    )}
                    tag="div"
                  >
                    {"0-60mph"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "data-grid__item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__title",
                      "data__title-black"
                    )}
                    tag="div"
                  >
                    {"390mi"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__sub-text",
                      "data__sub-text--black"
                    )}
                    tag="div"
                  >
                    {"range (est.)"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "data-grid__item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__title",
                      "data__title-black"
                    )}
                    tag="div"
                  >
                    {"1,020hp"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "data__sub-text",
                      "data__sub-text--black"
                    )}
                    tag="div"
                  >
                    {"peak power"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.TabsLink>
          </_Builtin.TabsMenu>
        </_Builtin.TabsWrapper>
        <_Builtin.Block
          className={_utils.cx(_styles, "powertrarin__note")}
          data-w-id="698565f9-73a9-159d-b770-febee005a1cf"
          tag="div"
        >
          {"* With rollout subtracted"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

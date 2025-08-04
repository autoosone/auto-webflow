"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Freedom.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317255},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317256},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df59771d-5041-3a40-7003-938503d7bd3d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df59771d-5041-3a40-7003-938503d7bd3d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159481958},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df59771d-5041-3a40-7003-938503d7bd3d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df59771d-5041-3a40-7003-938503d7bd3d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159481960},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"},"targets":[{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159561602},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"},"targets":[{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159561604}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Freedom({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "freedom")} tag="div">
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
          data-w-id="df59771d-5041-3a40-7003-938503d7bd3d"
          tag="h2"
        >
          {"Freedom to Travel"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph__animated")}
          data-w-id="df59771d-5041-3a40-7003-938503d7bd3f"
        >
          {
            "Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way."
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
            className={_utils.cx(_styles, "tab-vids__wrapper")}
            tag="div"
          >
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 1"
            >
              <_Builtin.BackgroundVideoWrapper
                className={_utils.cx(_styles, "tab__vid")}
                tag="div"
                sources={[
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdfc_1-transcode.webm",
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdfc_1-transcode.mp4",
                ]}
                posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/60425fb90bd126b08f1ac9a3_1-poster-00001.jpg"
                autoPlay={true}
                loop={true}
              />
            </_Builtin.TabsPane>
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 2"
            >
              <_Builtin.BackgroundVideoWrapper
                className={_utils.cx(_styles, "tab__vid")}
                tag="div"
                sources={[
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdfd_2-transcode.webm",
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdfd_2-transcode.mp4",
                ]}
                posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/6042601528575568f46225be_2-poster-00001.jpg"
                autoPlay={true}
                loop={true}
              />
            </_Builtin.TabsPane>
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 3"
            >
              <_Builtin.BackgroundVideoWrapper
                className={_utils.cx(_styles, "tab__vid")}
                tag="div"
                sources={[
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdfe_3-transcode.webm",
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdfe_3-transcode.mp4",
                ]}
                posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/6042614bf8e5b63afa9e5aef_3-poster-00001.jpg"
                autoPlay={true}
                loop={true}
              />
            </_Builtin.TabsPane>
            <_Builtin.TabsPane
              className={_utils.cx(_styles, "tab")}
              tag="div"
              data-w-tab="Tab 4"
            >
              <_Builtin.BackgroundVideoWrapper
                className={_utils.cx(_styles, "tab__vid")}
                tag="div"
                sources={[
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdff_4-transcode.webm",
                  "https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdff_4-transcode.mp4",
                ]}
                posterImage="https://uploads-ssl.webflow.com/603fb2df5d769f79ad78c09c/60426163f8fd85670734656c_4-poster-00001.jpg"
                autoPlay={true}
                loop={true}
              />
            </_Builtin.TabsPane>
          </_Builtin.TabsContent>
          <_Builtin.TabsMenu
            className={_utils.cx(_styles, "tab-vids__grid")}
            tag="div"
          >
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 1"
              block="inline"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "powertrain__heading")}
                tag="h3"
              >
                {"San Jose to Los Angeles "}
              </_Builtin.Heading>
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
              </_Builtin.Grid>
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 2"
              block="inline"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "powertrain__heading")}
                tag="h3"
              >
                {"Berkeley to Lake Tahoe"}
              </_Builtin.Heading>
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
              </_Builtin.Grid>
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 3"
              block="inline"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "powertrain__heading")}
                tag="h3"
              >
                {"Manhattan to Boston"}
              </_Builtin.Heading>
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
              </_Builtin.Grid>
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "powertrain__grid-item")}
              data-w-tab="Tab 4"
              block="inline"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "powertrain__heading",
                  "powertrain__heading--margin"
                )}
                tag="h3"
              >
                {"Fort Lauderdale"}
                <br />
                {"to Orlando"}
              </_Builtin.Heading>
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
              </_Builtin.Grid>
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
            </_Builtin.TabsLink>
          </_Builtin.TabsMenu>
        </_Builtin.TabsWrapper>
      </_Builtin.Block>
    </_Component>
  );
}

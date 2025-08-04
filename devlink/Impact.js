"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Impact.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-125"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278cf","appliesTo":"CLASS"},"targets":[{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278cf","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159255668},"e-24":{"id":"e-24","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-265"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278cf","appliesTo":"CLASS"},"targets":[{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278cf","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159255706},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".ludicrous__heading","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d1","appliesTo":"CLASS"},"targets":[{"selector":".ludicrous__heading","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159269908},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-159"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".ludicrous__heading","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d1","appliesTo":"CLASS"},"targets":[{"selector":".ludicrous__heading","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159269910},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"},"targets":[{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159297749},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-237"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"},"targets":[{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159297787},"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317255},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"},"targets":[{"selector":".paragraph__animated","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159317256}},"actionLists":{"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Impact({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "impact")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "impact__text")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "hero-grid__subheading",
            "hero-grid__subheading--alight-left"
          )}
          tag="div"
        >
          {"Safety"}
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(_styles, "ludicrous__heading")}
          tag="h3"
        >
          {"High Impact Protection"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph__animated")}
        >
          {
            "Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
          }
        </_Builtin.Paragraph>
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "button",
            "button--dark",
            "button--auto"
          )}
          button={false}
          block=""
          options={{
            href: "https://www.eikonlabs.com/",
            target: "_blank",
          }}
        >
          {"order now"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "impact__img")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "prot-content-wrapper")}
          tag="div"
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt="Tesla Model S"
            src="https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fe00_MS-Safety-Hero-Desktop.jpeg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "prot__content", "prot__content-2")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "prot__heading")}
              tag="h4"
            >
              {"Front-Impact Protection"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "prot__line")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "prot__dot")}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "prot__content", "prot__content-3")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "prot__heading",
                "prot__heading--up"
              )}
              tag="h4"
            >
              {"Side-Impact Protection"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "prot__line")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "prot__dot", "prot__dot--up")}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "prot__content", "prot__content-1")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "prot__heading")}
              tag="h4"
            >
              {"Side-Impact Protection"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "prot__line")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "prot__dot")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

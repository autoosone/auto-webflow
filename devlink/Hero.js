"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d2991c49-1be9-f105-05da-0e877c87b186","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d2991c49-1be9-f105-05da-0e877c87b186","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1614894469799},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-255"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d2991c49-1be9-f105-05da-0e877c87b186","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d2991c49-1be9-f105-05da-0e877c87b186","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1614894469802},"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-125"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278cf","appliesTo":"CLASS"},"targets":[{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278cf","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159255668},"e-24":{"id":"e-24","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-265"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278cf","appliesTo":"CLASS"},"targets":[{"selector":".hero-grid__subheading.hero-grid__subheading--alight-left","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278cf","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159255706},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"},"targets":[{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159297749},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-237"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"},"targets":[{"selector":".button.button--dark","originalId":"687bbc3b0bb3dd57d6c1fdc2|eadc0780-6da9-e9af-b69a-f694cab278d3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159297787},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"},"targets":[{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159561602},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"},"targets":[{"selector":".data-grid__item","originalId":"687bbc3b0bb3dd57d6c1fdc2|360ccfe7-4b62-2092-a8bf-2104d80bef0b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1615159561604}},"actionLists":{"a":{"id":"a","title":"menu-open","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".side-nav","selectorGuids":["7c4f4788-8d58-ed9d-c6d8-f109f99b21eb"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-dark-screen","selectorGuids":["d5ecf10d-8ef3-18ad-f0f2-732e58f7bc8f"]},"value":0,"unit":""}},{"id":"a-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".hero-dark-screen","selectorGuids":["d5ecf10d-8ef3-18ad-f0f2-732e58f7bc8f"]},"value":"none"}}]},{"actionItems":[{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".hero-dark-screen","selectorGuids":["d5ecf10d-8ef3-18ad-f0f2-732e58f7bc8f"]},"value":"block"}},{"id":"a-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-dark-screen","selectorGuids":["d5ecf10d-8ef3-18ad-f0f2-732e58f7bc8f"]},"value":1,"unit":""}},{"id":"a-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--mid","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","4eca1b45-2bda-cf1e-169e-792b4f4256b0"]},"value":0,"unit":""}},{"id":"a-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--bot","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","20f19f1e-56b9-83ce-0e66-df0ba942d277"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--bot","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","20f19f1e-56b9-83ce-0e66-df0ba942d277"]},"yValue":-5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--top","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","0ea43c8d-b543-7586-78d6-91b2539d777c"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--top","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","0ea43c8d-b543-7586-78d6-91b2539d777c"]},"yValue":5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":"outExpo","duration":500,"target":{"selector":".side-nav","selectorGuids":["7c4f4788-8d58-ed9d-c6d8-f109f99b21eb"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1614894481072},"a-2":{"id":"a-2","title":"menu-close","actionItemGroups":[{"actionItems":[{"id":"a-2-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"selector":".side-nav","selectorGuids":["7c4f4788-8d58-ed9d-c6d8-f109f99b21eb"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-2-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".hero-dark-screen","selectorGuids":["d5ecf10d-8ef3-18ad-f0f2-732e58f7bc8f"]},"value":"none"}},{"id":"a-2-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-dark-screen","selectorGuids":["d5ecf10d-8ef3-18ad-f0f2-732e58f7bc8f"]},"value":0,"unit":""}},{"id":"a-2-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--mid","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","4eca1b45-2bda-cf1e-169e-792b4f4256b0"]},"value":1,"unit":""}},{"id":"a-2-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--bot","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","20f19f1e-56b9-83ce-0e66-df0ba942d277"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--bot","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","20f19f1e-56b9-83ce-0e66-df0ba942d277"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--top","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","0ea43c8d-b543-7586-78d6-91b2539d777c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__burger-line.nav__burger-line--top","selectorGuids":["8c3a5513-3864-1233-5252-f66f6a47cf10","0ea43c8d-b543-7586-78d6-91b2539d777c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1614894481072},"a-3":{"id":"a-3","title":"In-view","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":1,"unit":""}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615158676110},"a-4":{"id":"a-4","title":"Out-of-view","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"687bbc3b0bb3dd57d6c1fdc3|ef84c021-ebab-be06-65f8-7d4ac5740858"},"yValue":30,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615158676110}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Hero({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "hero")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "hero-flex")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-dark-screen")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "hero-flex__item",
            "hero-flex__item--nav"
          )}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "nav")} tag="div">
            <_Builtin.Link
              className={_utils.cx(_styles, "nav__logo")}
              button={false}
              block="inline"
              options={{
                href: "https://www.eikonlabs.com/",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="100"
                height="12"
                alt="Tesla Model S"
                src="https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdea_TESLA.svg"
              />
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "nav__center-nav")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "nav__link")}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"model s"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav__link")}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"model 3"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav__link")}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"model x"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav__link")}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"model y"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav__link")}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"Solar roof"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav__link")}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"Solar panes"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "nav__left-nav")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "nav__link",
                  "nav__link--hide-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"shop"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "nav__link",
                  "nav__link--hide-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"tesla account"}
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "nav__burger")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "nav__burger-line",
                    "nav__burger-line--top"
                  )}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "nav__burger-line",
                    "nav__burger-line--mid"
                  )}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "nav__burger-line",
                    "nav__burger-line--bot"
                  )}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "side-nav")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "side-nav__link",
                  "side-nav__link-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"model s"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "side-nav__link",
                  "side-nav__link-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"model 3"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "side-nav__link",
                  "side-nav__link-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"model x"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "side-nav__link",
                  "side-nav__link-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"model y"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "side-nav__link",
                  "side-nav__link-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"Solar roof"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "side-nav__link",
                  "side-nav__link-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"Solar panes"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "side-nav__link",
                  "side-nav__link-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"shop"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "side-nav__link",
                  "side-nav__link-mobile"
                )}
                button={false}
                block=""
                options={{
                  href: "https://www.eikonlabs.com/",
                  target: "_blank",
                }}
              >
                {"tesla account"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Existing Inventory"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"used inventory"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"trade-in"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"cybertruck"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"roadster"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"semi"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"charging"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"powerwall"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"commercial solar"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"test drive"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"find us"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"support"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "side-nav__link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"united states"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "hero-flex__item",
            "hero-flex__item-mid"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "", "hero-grid__heading")}
            tag="h1"
          >
            {"Model S"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-grid__subheading")}
            tag="div"
          >
            {"Plaid"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "hero-flex__item",
            "hero-flex__item--bot"
          )}
          tag="div"
        >
          <_Builtin.Grid className={_utils.cx(_styles, "data-grid")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "data-grid__item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "data__title")}
                tag="div"
              >
                {"390mi"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "data__sub-text")}
                tag="div"
              >
                {"Range (est.)"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "data-grid__item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "data__title")}
                tag="div"
              >
                {"1.99s"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "data__sub-text")}
                tag="div"
              >
                {"0-60 mph*"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "data-grid__item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "data__title")}
                tag="div"
              >
                {"200mph"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "data__sub-text")}
                tag="div"
              >
                {"Top Speed†"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "data-grid__item",
                "data-grid__item--mobile-hide"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "data__title")}
                tag="div"
              >
                {"1,020hp"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "data__sub-text")}
                tag="div"
              >
                {"Peak Power"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "data-grid__button-wrapper")}
              id={_utils.cx(
                _styles,
                "w-node-_31591a5b-e1b1-7930-e8c6-2709495f39cf-495f396c"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button")}
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
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

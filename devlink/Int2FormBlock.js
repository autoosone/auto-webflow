"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Int2FormBlock.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-114":{"id":"e-114","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-checkbox-5_button","originalId":"688f5f2407927d7cac00a36e|e28c816d-9469-0db8-a7cd-2ae0b87a024f","appliesTo":"CLASS"},"targets":[{"selector":".fs-checkbox-5_button","originalId":"688f5f2407927d7cac00a36e|e28c816d-9469-0db8-a7cd-2ae0b87a024f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1667593849195},"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-checkbox-5_button","originalId":"688f5f2407927d7cac00a36e|e28c816d-9469-0db8-a7cd-2ae0b87a024f","appliesTo":"CLASS"},"targets":[{"selector":".fs-checkbox-5_button","originalId":"688f5f2407927d7cac00a36e|e28c816d-9469-0db8-a7cd-2ae0b87a024f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1667593849195}},"actionLists":{"a-42":{"id":"a-42","title":"Feature Checkbox [Check]","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_dot","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77b"]},"xValue":1,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-42-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_mask","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77e"]},"globalSwatchId":"@var_variable-45991dc3","rValue":185,"bValue":59,"gValue":253,"aValue":1}},{"id":"a-42-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_dot","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77b"]},"globalSwatchId":"@var_variable-4a3d901e-59ae-e01f-3c8e-c7d23ad547d9","rValue":36,"bValue":36,"gValue":36,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1638537122270},"a-43":{"id":"a-43","title":"Feature Checkbox [Uncheck]","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_dot","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77b"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-43-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_dot","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77b"]},"globalSwatchId":"@var_variable-c3882138-100e-a1cc-5409-1711b944db1c","rValue":161,"bValue":161,"gValue":161,"aValue":1}},{"id":"a-43-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".fs-checkbox-5_mask","selectorGuids":["10a57ff7-e754-5cc5-2eb2-73be60c8b77e"]},"globalSwatchId":"@var_variable-6301439f-dfa7-5abe-a490-14018a0b0f5b","rValue":76,"bValue":76,"gValue":76,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1638537122270}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Int2FormBlock({ as: _Component = _Builtin.FormWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "filter_form_block")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "filter_form-3", "helper")}
        name="wf-form-filter"
        data-name="filter"
        method="get"
        fs-list-element="filters"
        id="wf-form-filter"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block-2", "hide")}
          id={_utils.cx(
            _styles,
            "w-node-_498d3822-e393-77ec-3811-dc520ea62d5a-0ea62d58"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_block_header")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_block_title-5")}
              id={_utils.cx(
                _styles,
                "w-node-_498d3822-e393-77ec-3811-dc520ea62d5c-0ea62d58"
              )}
              tag="div"
            >
              {"Featured"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "fs-checkbox-5_component")}
              id={_utils.cx(
                _styles,
                "w-node-_498d3822-e393-77ec-3811-dc520ea62d5e-0ea62d58"
              )}
              tag="div"
            >
              <_Builtin.FormCheckboxWrapper
                className={_utils.cx(_styles, "fs-checkbox-5_wrapper")}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "fs-checkbox-5_dot")}
                  tag="div"
                />
                <_Builtin.FormCheckboxInput
                  className={_utils.cx(
                    _styles,
                    "fs-checkbox-5_button",
                    "helper"
                  )}
                  type="checkbox"
                  name="Checkbox-5"
                  data-name="Checkbox 5"
                  required={false}
                  checked={false}
                  fs-list-field="featured"
                  id="Checkbox-5"
                  form={{
                    type: "checkbox-input",
                    name: "Checkbox 5",
                  }}
                  inputType="default"
                />
                <_Builtin.FormInlineLabel
                  className={_utils.cx(_styles, "fs-checkbox-5_label")}
                >
                  {"Checkbox 8"}
                </_Builtin.FormInlineLabel>
                <_Builtin.Block
                  className={_utils.cx(_styles, "fs-checkbox-5_mask")}
                  tag="div"
                />
              </_Builtin.FormCheckboxWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_block-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "filter_block_header")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "filter_block_title-5")}
              id={_utils.cx(
                _styles,
                "w-node-_498d3822-e393-77ec-3811-dc520ea62d67-0ea62d58"
              )}
              tag="div"
            >
              {"Filter by make"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage>
        <_Builtin.Block tag="div">
          {"Thank you! Your submission has been received!"}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage>
        <_Builtin.Block tag="div">
          {"Oops! Something went wrong while submitting the form."}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}

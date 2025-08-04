"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainFilterList.module.css";

export function MainFilterList({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "filter_list")} tag="div">
      <_Builtin.FormRadioWrapper
        className={_utils.cx(
          _styles,
          "radio_field-2",
          "is-list-emptyfacet",
          "helper"
        )}
        fs-list-emptyfacet="add-class"
      >
        <_Builtin.FormRadioInput
          className={_utils.cx(_styles, "radio_button-3", "helper")}
          type="radio"
          name="Color"
          value="Radio"
          data-name="Color"
          required={false}
          fs-list-field="color"
          fs-list-value="black"
          id="radio-16"
          form={{
            type: "radio-input",
            name: "Color",
          }}
          inputType="custom"
          customClassName="w-form-formradioinput--inputType-custom"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "radio_color", "is-black")}
          tag="div"
        />
        <_Builtin.FormInlineLabel className={_utils.cx(_styles, "radio_label")}>
          {"Black"}
        </_Builtin.FormInlineLabel>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_facet-count", "helper")}
          tag="div"
          fs-list-element="facet-count"
        >
          {"0"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "option-results-2")}
          tag="div"
        >
          {"["}
          <_Builtin.Span fs-cmsfilter-element="filter-results-count">
            {"0"}
          </_Builtin.Span>
          {"]"}
        </_Builtin.Block>
      </_Builtin.FormRadioWrapper>
      <_Builtin.FormRadioWrapper
        className={_utils.cx(_styles, "radio_field-2", "helper")}
        fs-list-emptyfacet="add-class"
      >
        <_Builtin.FormRadioInput
          className={_utils.cx(_styles, "radio_button-3", "helper")}
          type="radio"
          name="Color"
          value="Radio"
          data-name="Color"
          required={false}
          fs-list-field="color"
          fs-list-value="white"
          id="radio-16"
          form={{
            type: "radio-input",
            name: "Color",
          }}
          inputType="custom"
          customClassName="w-form-formradioinput--inputType-custom"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "radio_color", "is-white")}
          tag="div"
        />
        <_Builtin.FormInlineLabel className={_utils.cx(_styles, "radio_label")}>
          {"White"}
        </_Builtin.FormInlineLabel>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_facet-count", "helper")}
          tag="div"
          fs-list-element="facet-count"
        >
          {"0"}
        </_Builtin.Block>
      </_Builtin.FormRadioWrapper>
      <_Builtin.FormRadioWrapper
        className={_utils.cx(_styles, "radio_field-2", "helper")}
        fs-list-emptyfacet="add-class"
      >
        <_Builtin.FormRadioInput
          className={_utils.cx(_styles, "radio_button-3", "helper")}
          type="radio"
          name="Color"
          value="Radio"
          data-name="Color"
          required={false}
          fs-list-field="color"
          fs-list-value="gray"
          id="radio-16"
          form={{
            type: "radio-input",
            name: "Color",
          }}
          inputType="custom"
          customClassName="w-form-formradioinput--inputType-custom"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "radio_color", "is-gray")}
          tag="div"
        />
        <_Builtin.FormInlineLabel className={_utils.cx(_styles, "radio_label")}>
          {"Gray "}
        </_Builtin.FormInlineLabel>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_facet-count", "helper")}
          tag="div"
          fs-list-element="facet-count"
        >
          {"0"}
        </_Builtin.Block>
      </_Builtin.FormRadioWrapper>
      <_Builtin.FormRadioWrapper
        className={_utils.cx(_styles, "radio_field-2", "helper")}
        id={_utils.cx(
          _styles,
          "w-node-e58e92d5-14ab-d2b9-e9c8-5ab44dae1a00-4dae19e5"
        )}
        fs-list-emptyfacet="add-class"
      >
        <_Builtin.FormRadioInput
          className={_utils.cx(_styles, "radio_button-3")}
          type="radio"
          name="Color"
          value="Radio"
          data-name="Color"
          required={false}
          fs-list-field="color"
          fs-list-value="cream"
          id="radio-16"
          form={{
            type: "radio-input",
            name: "Color",
          }}
          inputType="custom"
          customClassName="w-form-formradioinput--inputType-custom"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "radio_color", "is-cream")}
          tag="div"
        />
        <_Builtin.FormInlineLabel className={_utils.cx(_styles, "radio_label")}>
          {"Cream"}
        </_Builtin.FormInlineLabel>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_facet-count", "helper")}
          tag="div"
          fs-list-element="facet-count"
        >
          {"0"}
        </_Builtin.Block>
      </_Builtin.FormRadioWrapper>
      <_Builtin.FormRadioWrapper
        className={_utils.cx(_styles, "radio_field-2", "helper")}
        fs-list-emptyfacet="add-class"
      >
        <_Builtin.FormRadioInput
          className={_utils.cx(_styles, "radio_button-3")}
          type="radio"
          name="Color"
          value="Radio"
          data-name="Color"
          required={false}
          fs-list-field="color"
          fs-list-value="yellow"
          id="radio-16"
          form={{
            type: "radio-input",
            name: "Color",
          }}
          inputType="custom"
          customClassName="w-form-formradioinput--inputType-custom"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "radio_color", "is-yellow")}
          tag="div"
        />
        <_Builtin.FormInlineLabel className={_utils.cx(_styles, "radio_label")}>
          {"Yellow"}
        </_Builtin.FormInlineLabel>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_facet-count", "helper")}
          tag="div"
          fs-list-element="facet-count"
        >
          {"0"}
        </_Builtin.Block>
      </_Builtin.FormRadioWrapper>
      <_Builtin.FormRadioWrapper
        className={_utils.cx(_styles, "radio_field-2", "helper")}
        fs-list-emptyfacet="add-class"
      >
        <_Builtin.FormRadioInput
          className={_utils.cx(_styles, "radio_button-3")}
          type="radio"
          name="Color"
          value="Radio"
          data-name="Color"
          required={false}
          fs-list-field="color"
          fs-list-value="red"
          id="radio-16"
          form={{
            type: "radio-input",
            name: "Color",
          }}
          inputType="custom"
          customClassName="w-form-formradioinput--inputType-custom"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "radio_color", "red")}
          tag="div"
        />
        <_Builtin.FormInlineLabel className={_utils.cx(_styles, "radio_label")}>
          {"Red"}
        </_Builtin.FormInlineLabel>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_facet-count", "helper")}
          tag="div"
          fs-list-element="facet-count"
        >
          {"0"}
        </_Builtin.Block>
      </_Builtin.FormRadioWrapper>
      <_Builtin.FormRadioWrapper
        className={_utils.cx(_styles, "radio_field-2", "helper")}
        fs-list-emptyfacet="add-class"
      >
        <_Builtin.FormRadioInput
          className={_utils.cx(_styles, "radio_button-3")}
          type="radio"
          name="Color"
          value="Radio"
          data-name="Color"
          required={false}
          fs-list-field="color"
          fs-list-value="green"
          id="radio-16"
          form={{
            type: "radio-input",
            name: "Color",
          }}
          inputType="custom"
          customClassName="w-form-formradioinput--inputType-custom"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "radio_color", "is-green")}
          tag="div"
        />
        <_Builtin.FormInlineLabel className={_utils.cx(_styles, "radio_label")}>
          {"Green"}
        </_Builtin.FormInlineLabel>
        <_Builtin.Block
          className={_utils.cx(_styles, "filter_facet-count", "helper")}
          tag="div"
          fs-list-element="facet-count"
        >
          {"0"}
        </_Builtin.Block>
      </_Builtin.FormRadioWrapper>
    </_Component>
  );
}

"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Slider.module.css";

export function Slider({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "slider")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container--1260")}
        tag="div"
      >
        <_Builtin.SliderWrapper
          className={_utils.cx(_styles, "slider-wide")}
          data-delay="4000"
          data-animation="slide"
          data-autoplay="1"
          data-duration="500"
          data-infinite="1"
          navSpacing={3}
          autoplay={true}
          delay={4000}
          iconArrows={true}
          animation="slide"
          easing="ease"
          navRound={true}
          disableSwipe={false}
          duration={500}
          infinite={true}
          autoMax={0}
          hideArrows={false}
          navNumbers={false}
          navShadow={false}
          navInvert={false}
        >
          <_Builtin.SliderMask>
            <_Builtin.SliderSlide tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__img", "slider__img--1")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__text")}
                tag="div"
              >
                <_Builtin.Heading tag="h3">
                  {"17” Cinematic Display"}
                </_Builtin.Heading>
                <_Builtin.Paragraph>
                  {
                    "With 2200x1300 resolution, ultra bright, true colors, exceptional responsiveness and left-right tilt, the new center display is the best screen to watch anywhere."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__img", "slider__img--2")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__text")}
                tag="div"
              >
                <_Builtin.Heading tag="h3">
                  {"Focus on Driving"}
                </_Builtin.Heading>
                <_Builtin.Paragraph>
                  {
                    "The ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__img", "slider__img--3")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__text")}
                tag="div"
              >
                <_Builtin.Heading tag="h3">
                  {"Perfect Environment "}
                </_Builtin.Heading>
                <_Builtin.Paragraph>
                  {
                    "Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__img", "slider__img--4")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__text")}
                tag="div"
              >
                <_Builtin.Heading tag="h3">
                  {"Redesigned Second Row"}
                </_Builtin.Heading>
                <_Builtin.Paragraph>
                  {
                    "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.SliderSlide>
          </_Builtin.SliderMask>
          <_Builtin.SliderArrow
            className={_utils.cx(_styles, "left-arrow")}
            dir="left"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "slider__arrow-wrapper",
                "slider__arrow-wrapper--left"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__arrow")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.SliderArrow>
          <_Builtin.SliderArrow
            className={_utils.cx(_styles, "right-arrow")}
            dir="right"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "slider__arrow-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slider__arrow")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.SliderArrow>
          <_Builtin.SliderNav className={_utils.cx(_styles, "slide-nav")} />
        </_Builtin.SliderWrapper>
      </_Builtin.Block>
    </_Component>
  );
}

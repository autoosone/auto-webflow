"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Empty.module.css";

export function Empty({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "filter_empty-6", "helper")}
      tag="div"
      fs-list-element="empty"
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "filter_empty_icon")}
        value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_3876_454)%22%3E%0A%3Cpath%20d%3D%22M15.5003%2014H14.7103L14.4303%2013.73C15.4103%2012.59%2016.0003%2011.11%2016.0003%209.5C16.0003%205.91%2013.0903%203%209.50027%203C6.08027%203%203.28027%205.64%203.03027%209H5.05027C5.30027%206.75%207.18027%205%209.50027%205C11.9903%205%2014.0003%207.01%2014.0003%209.5C14.0003%2011.99%2011.9903%2014%209.50027%2014C9.33027%2014%209.17027%2013.97%209.00027%2013.95V15.97C9.17027%2015.99%209.33027%2016%209.50027%2016C11.1103%2016%2012.5903%2015.41%2013.7303%2014.43L14.0003%2014.71V15.5L19.0003%2020.49L20.4903%2019L15.5003%2014Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M6.47031%2010.82L4.00031%2013.29L1.53031%2010.82L0.820312%2011.53L3.29031%2014L0.820312%2016.47L1.53031%2017.18L4.00031%2014.71L6.47031%2017.18L7.18031%2016.47L4.71031%2014L7.18031%2011.53L6.47031%2010.82Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
      />
      <_Builtin.Block tag="div">
        {"There are no available cars matching the current filters."}
      </_Builtin.Block>
    </_Component>
  );
}

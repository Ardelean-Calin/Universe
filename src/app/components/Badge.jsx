import React from "react";

exports.Badge = props => {
  return props.noNotifications > 0 ? (
    <span
      style={
        props.topRight
          ? {
              position: "absolute",
              top: "5px",
              right: "5px",
              minWidth: "2rem"
            }
          : { minWidth: "2rem" }
      }
      class="new badge blue darken-1"
      data-badge-caption={props.noNotifications}
    />
  ) : (
    ""
  );
};

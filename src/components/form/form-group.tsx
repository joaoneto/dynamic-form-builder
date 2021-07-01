import React from "react";

const formGroupStyles = {
  display: "flex",
  flexGrow: 1,
  flexShrink: 0,
  flexDirection: "column",
  width: "240px",
  flexWrap: "wrap",
  padding: "4px",
  justifyContent: "center"
};

export default React.forwardRef(
  ({ ...props }, ref?: React.RefObject<HTMLDivElement>) => {
    return <div {...props} ref={ref} style={formGroupStyles} />;
  }
);

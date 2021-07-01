import React from "react";

const formControlStyles = {
  display: "flex",
  flexGrow: 1,
  flexShrink: 1,
  flexWrap: "wrap"
};

export default React.forwardRef(
  ({ ...props }, ref?: React.RefObject<HTMLDivElement>) => {
    return <div {...props} ref={ref} style={formControlStyles} />;
  }
);

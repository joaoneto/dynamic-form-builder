import React from "react";

export default React.forwardRef(
  ({ ...props }, ref?: React.RefObject<HTMLInputElement>) => {
    return <input ref={ref} {...props} />;
  }
);

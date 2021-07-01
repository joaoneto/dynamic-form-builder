import React from "react";

const formWrapStyles = {
  display: "flex",
  width: "100%"
};

const formStyles = {
  display: "flex",
  flexGrow: 1,
  flexShrink: 1
};

export default React.forwardRef(
  ({ children, ...props }, ref?: React.RefObject<HTMLFormElement>) => {
    return (
      <div role="form" style={formWrapStyles}>
        <form {...props} ref={ref} style={formStyles}>
          {children}
        </form>
      </div>
    );
  }
);

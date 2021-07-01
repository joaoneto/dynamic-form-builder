import React from "react";
import { useForm } from "react-hook-form";

const Form = React.forwardRef(
  ({ children, ...props }, ref?: React.RefObject<HTMLFormElement>) => {
    return (
      <div
        role="form"
        style={{
          display: "flex",
          width: "100%"
        }}
      >
        <form
          style={{
            flex: 1
          }}
          ref={ref}
          {...props}
        >
          {children}
        </form>
      </div>
    );
  }
);

const FormGroup = ({ ...props }) => {
  return <div {...props} />;
};

function render(root) {
  const children = Array.isArray(root.children)
    ? root.children.map(render)
    : root.children;
  return React.createElement(root.component, root.props, children);
}

export default (form) => {
  const { register, handleSubmit, watch, errors } = useForm();
  return render(formData);
};

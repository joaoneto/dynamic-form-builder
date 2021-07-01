import React from "react";
import { useForm } from "react-hook-form";
import * as formComponents from "../components/form";

function render(root, options) {
  const { register, onSubmit } = options;
  const component = formComponents[root.component] || root.component;
  const props = {
    ...root.props,
    ...(root.component === "Form" && { onSubmit }),
    ...(root.component === "Input" && { ref: register })
  };
  const children = Array.isArray(root.children)
    ? root.children.map((child, key) =>
        render({ ...child, props: { ...props, key } }, options)
      )
    : root.children;

  return React.createElement(component, props, children);
}

export const useFormBuild = (form, formComponents) => {
  const methods = useForm();
  const { register } = methods;
  const Form = ({ onSubmit }) => {
    return render(form, { register, onSubmit });
  };

  return {
    Form,
    ...methods
  };
};

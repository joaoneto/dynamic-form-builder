import React from "react";
import { useFormBuild } from "../../hooks/use-form-build";
import registerFormData from "./form-register";

export default ({ onSuccess }) => {
  const { Form, handleSubmit } = useFormBuild(registerFormData);
  const onSubmit = (data) => {
    onSuccess(data);
  };

  return () => <Form onSubmit={handleSubmit(onSubmit)} />;
};

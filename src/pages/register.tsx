import React, { useCallback } from "react";
import useRegister from "../forms/register/use-register";

export default function Register() {
  const onSuccess = useCallback((data) => console.log(data), []);
  const RegisterForm = useRegister({ onSuccess });

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
}

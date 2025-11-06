import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.js";
import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setFormFields(defaultFormFields); // never set to undefined

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (e) {
      console.log(e);
      if (e.code === "auth/email-already-in-use") {
        alert("email already in use");
      }
    }
  };

  return (
    <>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          label="Display Name"
          type="text"
          id="displayName"
          name="displayName"
          value={displayName ?? ""}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Email address"
          type="email"
          id="email"
          name="email"
          value={email ?? ""}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password ?? ""}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword ?? ""}
          required
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </>
  );
};

export default SignUpForm;

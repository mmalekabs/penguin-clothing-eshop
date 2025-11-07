import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.js";
import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx";
import SignUpForm from "./SignUpForm.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      resetForm();
      console.log(response);
    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("email and password not match");
          break;
        case "auth/user-not-found":
          alert("no user with this email");
          break;
        default:
          console.log(e);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="flex flex-col w-[380px]">
      <h2>Already have an account?</h2>
      <form onSubmit={handleSubmit}>
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

        {/* Buttons container to match your SCSS spacing */}
        <div className="mt-4 flex justify-between gap-3">
          <Button type="submit" className="flex-1">
            Sign In
          </Button>

          <Button
            type="button" //I have to say it explicitly because the default type of button in forms is "submit"
            variant="google"
            onClick={signInWithGoogle}
            className="flex-1"
          >
            Sign in with Google
          </Button>
        </div>
      </form>

      {/* If you intend to show SignUpForm below, keep it here */}
      {/* <SignUpForm /> */}
    </div>
  );
};

export default SignInForm;

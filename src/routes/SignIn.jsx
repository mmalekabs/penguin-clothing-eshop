import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.js";
import SignUpForm from "../components/SignUpForm.jsx";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sing In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;

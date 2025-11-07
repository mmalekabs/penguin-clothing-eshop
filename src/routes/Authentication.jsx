import SignUpForm from "../components/SignUpForm.jsx";
import SignInForm from "../components/SignInForm.jsx";

const Authentication = () => {
  return (
    <div
      className="
        mx-auto my-[30px] w-full max-w-[1200px] px-4 md:px-6 lg:px-8
        flex flex-col md:flex-row
        items-start md:items-start
        justify-start md:justify-between
        gap-8 md:gap-12
      "
    >
      {/* Left column */}
      <div className="w-full md:w-auto md:flex-1">
        {/*<h1 className="text-2xl font-bold mb-4">Sign In</h1>*/}
        <SignInForm />
      </div>

      {/* Right column */}
      <div className="w-full md:w-auto md:flex-1">
        {/*<h1 className="text-2xl font-bold mb-4">Sign Up</h1>*/}
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;

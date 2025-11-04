import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/penguin-logo.svg";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="h-[70px] w-full flex justify-between mb-[25px]">
        <Link to="/" className="h-full w-[70px] p-[25px]">
          <img className="h-full w-full" src={Logo} alt="logo" />
        </Link>

        <div className="w-1/2 h-full flex items-center justify-end">
          <Link to="/shop" className="py-[10px] px-[15px] cursor-pointer">
            SHOP
          </Link>
          <Link to="/sign-in" className="py-[10px] px-[15px] cursor-pointer">
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

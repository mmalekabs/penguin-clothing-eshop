const baseBtn =
  "inline-flex items-center justify-center cursor-pointer select-none " +
  // size/shape/typography
  "min-w-[165px] h-[50px] leading-[50px] px-[35px] text-[15px] tracking-[0.5px] " +
  "uppercase font-extrabold font-['Open_Sans_Condensed'] border border-transparent " +
  // transitions
  "transition-colors duration-150";

const variants = {
  default:
    "bg-black text-white hover:bg-white hover:text-black hover:border-black",
  google: "bg-[#4285f4] text-white hover:bg-[#357ae8] hover:border-transparent",
  inverted:
    "bg-white text-black border-black hover:bg-black hover:text-white hover:border-transparent",
};

export const Button = ({
  children,
  variant = "default",
  className = "",
  ...otherProps
}) => {
  return (
    <button
      className={[
        baseBtn,
        variants[variant] ?? variants.default,
        className,
      ].join(" ")}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

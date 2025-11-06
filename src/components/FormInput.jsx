const FormInput = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  ...otherProps
}) => {
  const isPassword = type === "password";
  const shrink = value && `${value}`.length > 0;

  return (
    <div className="relative my-[45px]">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={[
          // base input
          "peer block w-full border-0 rounded-none bg-transparent",
          "text-[18px] text-gray-500", // sub-color = grey
          "px-[5px] py-[10px] pb-[10px]", // padding matches: 10px 10px 10px 5px
          "border-b border-gray-500 my-[25px]",
          "focus:outline-none",
          isPassword ? "tracking-[0.3em]" : "",
        ].join(" ")}
        {...otherProps}
      />

      {/* floating label */}
      {label && (
        <label
          htmlFor={id}
          className={[
            "absolute left-[5px] pointer-events-none",
            "text-gray-500 font-normal text-[16px]",
            "top-[10px] transition-all duration-300 ease-in-out",
            // shrink on focus (peer-focus) OR when value exists (manual 'shrink' behavior)
            "peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-black",
            shrink ? "top-[-14px] text-[12px] text-black" : "",
          ].join(" ")}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

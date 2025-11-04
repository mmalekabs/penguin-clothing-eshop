const CategoryItem = ({ imageUrl, title }) => {
  return (
    <div className="group relative flex min-w-[30%] h-[240px] flex-[1_1_auto] items-center justify-center border border-black mx-[7.5px] mb-[15px] overflow-hidden hover:cursor-pointer first:mr-[7.5] last:ml-[7.5px] [&.large]:h-[380px]">
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-[1.1]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="absolute h-[90px] px-[25px] flex flex-col items-center justify-center border border-black bg-white opacity-70 group-hover:opacity-90 transition-opacity">
        <h2 className="">{title}</h2>
        <p className="font-light text-[16px]">Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;

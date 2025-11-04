import CategoryItem from "./CategoryItem.jsx";
import categories from "../constants/categories.js";

const CategoriesDirectory = () => {
  return (
    <>
      <div className="w-full flex flex-wrap justify-between">
        {categories.map(({ id, title, imageUrl }) => (
          <CategoryItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    </>
  );
};

export default CategoriesDirectory;

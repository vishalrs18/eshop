import { NavLink, useParams } from "react-router";
import Widget from "../Components/Widget/Widget";
import { useSelector } from "react-redux";
import Card from "../Components/Card/Card";

const CategoryItems = () => {
  const { type } = useParams();
  const itemList = useSelector((state) => state.item);
  const categoryList = useSelector((state) => state.category);

  const catData = categoryList.find((i) => i.categoryName === type);
  const filterCategoryItem = itemList.filter(
    (i) => i.categoryId === catData.id
  );

  return (
    <Widget header={type}>
      <div className="container">
        {filterCategoryItem?.length
          ? filterCategoryItem.map((i) => {
              return (
                <NavLink key={i.itemId} to={`/category/${type}/${i.itemName}`}>
                  <Card id={i.itemId} header={i.itemName} url={"/images/veg.jpg"} price={i.price} isButton/>
                </NavLink>
              );
            })
          : ""}
      </div>
    </Widget>
  );
};

export default CategoryItems;

import { useSelector } from "react-redux";
import Widget from "../Components/Widget/Widget";
import Card from "../Components/Card/Card";
import "./style.scss";
import { NavLink } from "react-router";

const Home = () => {
  const categoryList = useSelector((state) => state.category);
  return (
    <Widget header="Category">
      <div className="container">
        {categoryList.length
          ? categoryList.map((i) => {
              return (
                <NavLink key={i.id} to={`/category/${i.categoryName}`}>
                  <Card header={i.categoryName} url={i.imgUrl} />
                </NavLink>
              );
            })
          : ""}
      </div>
    </Widget>
  );
};

export default Home;

import { useParams } from "react-router";
import Widget from "../Components/Widget/Widget";
import { useSelector } from "react-redux";
import Card from "../Components/Card/Card";

const Item = () => {
  const { item } = useParams();
  const itemList = useSelector((state) => state.item);
  const selectedItem = itemList.filter((i) => i.itemName == item);

  if (!selectedItem.length) {
    return <p className="empty">No Item available</p>;
  }
  const { itemId, itemName, price } = selectedItem[0];

  return (
    <Widget widgetClass="item-page">
      <Card
        id={itemId}
        header={itemName}
        url={"/images/veg.jpg"}
        price={price}
        isButton
        isDescription
        showTotalPrice
      />
    </Widget>
  );
};

export default Item;

import { useDispatch, useSelector } from "react-redux";
import { cartHandler } from "../../utils/helpers";
import Button from "../Button/Button";
import { useFetchOrderData } from "../../hooks/fetchOrderDetails";

const ItemList = (props) => {
  const { itemId } = props;
  const itemData = useSelector((state) => state.item);
  const item = itemData.filter((i) => i.itemId === itemId);
  const [data] = useFetchOrderData(itemId);
  const dispatch = useDispatch();

  return (
    <div className="list">
      <div>
        <img src="/images/veg.jpg" alt={item[0].itemName} />
        <div className="details">
          <p>{item[0].itemName}</p>
          <p className="price">&#8377;{item[0].price}/-</p>
        </div>
      </div>
      <div className="stepper-button">
        <Button
          click={(e) =>
            cartHandler(e, itemId, "add", data, dispatch, item[0].price)
          }
          value="+"
        ></Button>
        <p>{data.cardOrderData[0]?.quantity}</p>
        <Button
          click={(e) =>
            cartHandler(e, itemId, "minus", data, dispatch, item[0].price)
          }
          value="-"
        ></Button>
      </div>
    </div>
  );
};

export default ItemList;

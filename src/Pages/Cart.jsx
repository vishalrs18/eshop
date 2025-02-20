import { useEffect, useState } from "react";
import ItemList from "../Components/CartTemplate/ItemList";
import Widget from "../Components/Widget/Widget";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button/Button";
import { cartData, ordersData } from "../store/store";
import { Summary } from "../Components/Summary/Summary";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const items = useSelector((state) => state.item);
  const [totalPrice, setTotalPrice] = useState();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cart.reduce(
      (tot, curr) => (tot = tot + Number(curr.price)),
      0
    );
    setTotalPrice(total);
  }, [cart]);

  if (isOrderPlaced) {
    return <p className="empty">Your Order placed successfully</p>;
  }

  if (!cart.length) {
    return <p className="empty">Your Cart is Empty</p>;
  }

  const orderHandler = () => {
    const newOrder = structuredClone(orders);
    if (newOrder.length) {
      newOrder.push({
        orderId: newOrder.length + 1,
        orderDetails: cart,
        totalPrice: totalPrice,
      });
    } else {
      newOrder.push({ orderId: 1, orderDetails: cart, totalPrice: totalPrice });
    }
    dispatch(ordersData(newOrder));
    setIsOrderPlaced(true);
    dispatch(cartData([]));
  };
  return (
    <>
      <Widget header="cart" widgetClass="cart-list">
        <div>
          <div className="wrapper">
            {cart.map((i) => {
              return <ItemList {...i} key={i.itemId} />;
            })}
          </div>
          <Widget header="summary" widgetClass="summary">
            {cart.map((i) => {
              return (
                <li className="summary-list" key={i.itemId}>
                  <Summary cartItem={i} items={items} />
                </li>
              );
            })}
            <p className="total">Total: {Number(totalPrice).toFixed(2)}/-</p>
            <Button value="Place Order" click={orderHandler} />
          </Widget>
        </div>
      </Widget>
    </>
  );
};

export default Cart;

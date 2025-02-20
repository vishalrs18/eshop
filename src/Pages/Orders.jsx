import { useSelector } from "react-redux";
import Widget from "../Components/Widget/Widget";
import { Summary } from "../Components/Summary/Summary";

const Orders = () => {
  const orders = useSelector((state) => state.order);
  const items = useSelector((state) => state.item);

  if (!orders.length) {
    return <p className="empty">{"You haven't placed any orders yet."}</p>;
  }
  return (
    <Widget header="Orders">
      {orders.map((i) => {
        return (
          <div key={i.orderId} className="orders-list">
            <div className="header">
              <h4>Order Id: #{i.orderId}</h4>
              <p className="price">
                Total: &#8377;{Number(i.totalPrice).toFixed(2)}/-
              </p>
            </div>
            {i.orderDetails.map((list) => {
              return (
                <div key={list.itemId} className="item-list">
                  <Summary cartItem={list} items={items} showItemImg />
                </div>
              );
            })}
          </div>
        );
      })}
    </Widget>
  );
};

export default Orders;

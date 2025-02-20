export const Summary = ({ cartItem, items, showItemImg = false }) => {
  const item = items.filter((i) => i?.itemId === cartItem?.itemId);
  return (
    <>
      {showItemImg && <img src="/images/veg.jpg" alt={item[0].itemName} />}
      <p>{item[0]?.itemName}</p>
      <p>
        {cartItem?.quantity} * {item[0]?.price} ={" "}
        {Number(cartItem?.price).toFixed(2)}
      </p>
    </>
  );
};

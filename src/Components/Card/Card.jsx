import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { useFetchOrderData } from "../../hooks/fetchOrderDetails";
import { cartHandler } from "../../utils/helpers";

const Card = (props) => {
  const {
    header = "",
    url = "",
    name = "",
    price = "",
    isButton = false,
    isDescription = false,
    id,
    showTotalPrice = false,
  } = props;

  const dispatch = useDispatch();
  const [data] = useFetchOrderData(id);

  return (
    <div className="item">
      <section>
        <img src={url} alt={name} className="img" />
      </section>
      {header && (
        <footer>
          <h3>{header}</h3>
          {isDescription && (
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              voluptatum. Hic ad, aliquam quas enim expedita culpa recusandae
              autem saepe, dicta, veniam labore? Molestiae odit beatae fuga esse
              dolores id.
            </p>
          )}
          {price && <p className="price">&#8377;{price}/-</p>}
          {isButton && !data.cardOrderData?.length && (
            <Button
              click={(e) => cartHandler(e, id, "add", data, dispatch, price)}
              value="add to cart"
            ></Button>
          )}
          {isButton && data.cardOrderData?.length ? (
            <div className="stepper-button">
              <Button
                click={(e) => cartHandler(e, id, "add", data, dispatch, price)}
                value="+"
              ></Button>
              <p>{data.cardOrderData[0]?.quantity}</p>
              <Button
                click={(e) =>
                  cartHandler(e, id, "minus", data, dispatch, price)
                }
                value="-"
              ></Button>
            </div>
          ) : (
            ""
          )}
          {showTotalPrice && data?.cardOrderData[0] ? (
            <p className="price">
              Total: &#8377;{Number(data?.cardOrderData[0]?.price).toFixed(2)}/-
            </p>
          ) : (
            ""
          )}
        </footer>
      )}
    </div>
  );
};

export default Card;

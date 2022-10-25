import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, description, category, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <p className="category">{category}</p>
      <img src={image} width={200} height={200} alt="" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <FontAwesomeIcon icon={faStar} className="star" />
          ))}
      </div>
      <p className="desc">{description.slice(0,100)}....</p>
      <div className="price">
        ${price}
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

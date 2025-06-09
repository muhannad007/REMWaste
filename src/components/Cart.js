// import { useState } from "react";
const Cart = ({ item, image }) => {
  // const [color, setColor] = useState("");
  return (
    <div className="cart">
      <img src={image} alt="skip" />
      <div className="info">
        {item.allowed_on_road || (
          <div className="road">Not Allowed On The Road</div>
        )}
        <h3>{item.size} yarder skip</h3>
        <p className="period">{item.hire_period_days} days hire period</p>
        <h4 className="size">{item.size} yard</h4>
        <h2 className="price">&#163;{item.price_before_vat}</h2>
      </div>
    </div>
  );
};

export default Cart;

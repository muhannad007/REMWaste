const PopUp = (props) => {
  const { price, size, period } = props;
  const togglePopup = props.toggle;
  return (
    <div className="popup-box">
      <div className="popup-content">
        <p>
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
        <div>
          <h3>{period} hire period days</h3>
          <h2 style={{ color: "blue" }}>&#163;{price}</h2>
          <h3>{size} yarder skips</h3>
          <button className="cancle-button" onClick={(e) => togglePopup(e, {})}>
            Cancle
          </button>
          <button className="continue-button">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

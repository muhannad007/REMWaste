const ProgressBar = ({ value }) => {
  return (
    <div className="progress">
      <div className="progress-stop">
        <h4 style={value >= 0 ? { color: "blue" } : { color: "" }}>Postcode</h4>
        <h4 style={value >= 0.2 ? { color: "blue" } : { color: "" }}>
          Waste type
        </h4>
        <h4 style={value >= 0.4 ? { color: "blue" } : { color: "" }}>
          Select Skip
        </h4>
        <h4 style={value >= 0.6 ? { color: "blue" } : { color: "" }}>
          Permit Check
        </h4>
        <h4 style={value >= 0.8 ? { color: "blue" } : { color: "" }}>
          Choose Date
        </h4>
        <h4 style={value === 1 ? { color: "blue" } : { color: "" }}>Payment</h4>
      </div>
      <progress className="progress-bar" value={value} />
    </div>
  );
};

export default ProgressBar;

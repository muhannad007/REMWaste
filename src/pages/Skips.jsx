import axios from "axios";
import { useMemo, useEffect, useState } from "react";

import SkipsList from "../components/SkipsList";
import ProgressBar from "../components/ProgressBar";
import PopUp from "../components/PopUp";

const Skips = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [period, setPeriod] = useState(0);
  const [size, setSize] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = (e, item) => {
    e.preventDefault();
    setOpacity(!opacity);
    setPrice(item.price_before_vat);
    setSize(item.size);
    setPeriod(item.hire_period_days);
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "/api/y/ct/?l=TsD0Kn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w"
        );
        const result = await res.data;

        // console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const list = useMemo(
    () => <SkipsList data={data} toggle={togglePopup} />,
    [data]
  );

  return (
    <>
      <ProgressBar value={0.4} />
      <h1 style={{ color: "blue" }}>Choose Your Skip</h1>
      <h3>Select the skip size that best suits your needs</h3>
      <div
        style={
          opacity
            ? { opacity: "0.1", transition: "opacity 1s" }
            : { opacity: "1", transition: "opacity 1s" }
        }
        className="swiper-container"
      >
        {list}
        {/* <SkipsList data={data} toggle={togglePopup} /> */}
      </div>
      {isPopupOpen && (
        <PopUp price={price} period={period} size={size} toggle={togglePopup} />
      )}
    </>
  );
};

export default Skips;

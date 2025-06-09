import axios from "axios";
import { useEffect, useState, lazy, Suspense, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Spinner from "../components/Spinner";
import {
  four,
  six,
  eight,
  ten,
  twelve,
  fourteen,
  sixteen,
  twenty,
  fourty,
} from "../assets/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProgressBar from "../components/ProgressBar";
import PopUp from "../components/PopUp";

const images = [
  four,
  six,
  eight,
  ten,
  twelve,
  fourteen,
  sixteen,
  twenty,
  fourty,
];

const Skips = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [period, setPeriod] = useState(0);
  const [size, setSize] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const ref = useRef(null);

  const togglePopup = (e, item) => {
    e.preventDefault();
    setOpacity(!opacity);
    setPrice(item.price_before_vat);
    setSize(item.size);
    setPeriod(item.hire_period_days);
    setIsPopupOpen(!isPopupOpen);
  };

  const Cart = lazy(() => import("../components/Cart"));

  useEffect(() => {
    if (ref.current) {
      const getData = async () => {
        try {
          const res = await axios.get(
            "/y/ct/?l=TsD0Kn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w"
          );
          const result = await res.data;

          // console.log(result);
          setData(result);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  }, []);

  return (
    <>
      <ProgressBar value={0.4} />
      <h1 style={{ color: "blue" }}>Choose Your Skip</h1>
      <h3>Select the skip size that best suits your needs</h3>
      <div
        ref={ref}
        style={
          opacity
            ? { opacity: "0.1", transition: "opacity 1s" }
            : { opacity: "1", transition: "opacity 1s" }
        }
        className="swiper-container"
      >
        <Swiper
          className="sw"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          // slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div className="list">
            {data &&
              data.map((item, index) => {
                return (
                  <SwiperSlide onClick={(e) => togglePopup(e, item)}>
                    <Suspense fallback={<Spinner />}>
                      <Cart key={item.id} item={item} image={images[index]} />
                    </Suspense>
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
      </div>
      {isPopupOpen && (
        <PopUp price={price} period={period} size={size} toggle={togglePopup} />
      )}
    </>
  );
};

export default Skips;

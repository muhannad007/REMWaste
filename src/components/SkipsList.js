import { memo, lazy, Suspense } from "react";
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

const SkipsList = (props) => {
  const togglePopup = props.toggle;
  const data = props.data;
  const Cart = lazy(() => import("../components/Cart"));
  return (
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
  );
};

export default memo(SkipsList);

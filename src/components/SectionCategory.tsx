import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Card2 } from "./Card2";

export function SectionCategory() {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1280: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      }}
      slidesPerGroup={2}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={16}
      pagination={{ clickable: true }}
      slidesPerView={2}
      navigation={false}
      className="mySwiper"
    >
      <SwiperSlide>
        <Card2
          imgUrl="https://mister-mango.omni.la/items_2/uid_commerces.1/uid_items_2.FDBZE1JCN8XA/500x500/65021CF6C8469-Pantalon-Casual-Mujer-Mave.jpg"
          brand="violetta"
          title="truza cachetero"
          price={23}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card2
          imgUrl="https://mister-mango.omni.la/items_2/uid_commerces.1/uid_items_2.FDBZE1JCN8XA/500x500/65021CF6C8469-Pantalon-Casual-Mujer-Mave.jpg"
          brand="violetta"
          title="truza cachetero"
          price={23}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card2
          imgUrl="https://mister-mango.omni.la/items_2/uid_commerces.1/uid_items_2.FDBZE1JCN8XA/500x500/65021CF6C8469-Pantalon-Casual-Mujer-Mave.jpg"
          brand="violetta"
          title="truza cachetero"
          price={23}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card2
          imgUrl="https://mister-mango.omni.la/items_2/uid_commerces.1/uid_items_2.FDBZE1JCN8XA/500x500/65021CF6C8469-Pantalon-Casual-Mujer-Mave.jpg"
          brand="violetta"
          title="truza cachetero"
          price={23}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card2
          imgUrl="https://mister-mango.omni.la/items_2/uid_commerces.1/uid_items_2.FDBZE1JCN8XA/500x500/65021CF6C8469-Pantalon-Casual-Mujer-Mave.jpg"
          brand="violetta"
          title="truza cachetero"
          price={23}
        />
      </SwiperSlide>
    </Swiper>
  );
}

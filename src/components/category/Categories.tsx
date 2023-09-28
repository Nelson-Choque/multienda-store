import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  A11y,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Category } from "./Category";

export function Categories() {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
        1024: {
          slidesPerView: 8,
          slidesPerGroup: 8,
        },
        1280: {
          slidesPerView: 10,
          slidesPerGroup: 10,
        },
      }}
      slidesPerView={4}
      slidesPerGroup={4}
      spaceBetween={16}
      className="swiper-category"
      grabCursor={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Category
          imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="polo"
        />
      </SwiperSlide>
    </Swiper>
  );
}

{
  /* <Category
imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
title="polo"
/> */
}

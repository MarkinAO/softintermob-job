import { Block } from "@/entities/block/block";
import { CardBlog } from "@shared/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { mock as articles } from "./mock/mock";

export const Blog = () => {
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 3,
  };
  return (
    <Block title="FAQ">
      <div>
        <Swiper {...swiperParams}>
          {articles.map((el, i) => (
            <SwiperSlide key={i}>
              {<CardBlog title={el.title} text={el.text} image={el.image} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Block>
  );
};

import style from "./portfolio.module.scss";
import { Block } from "@/entities/block/block";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { data as projects } from "./mock";

export const Portfolio = () => {
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 6,
  };
  return (
    <Block title="портфолио">
      <div className={style.container}>
        <div className={style.row}>
          <Swiper {...swiperParams}>
            {projects.map((el, i) => (
              <SwiperSlide key={i}>
                <div className={style.slide}>
                  <img src={el.icon} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={style.rowCenter}>
          <Swiper {...swiperParams} slidesPerView={7}>
            {projects.map((el, i) => (
              <SwiperSlide key={i}>
                <div className={style.slide}>
                  <img src={el.icon} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={style.row}>
          <Swiper {...swiperParams}>
            {projects.map((el, i) => (
              <SwiperSlide key={i}>
                <div className={style.slide}>
                  <img src={el.icon} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Block>
  );
};

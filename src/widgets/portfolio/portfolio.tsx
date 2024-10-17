import style from "./portfolio.module.scss";
import { Block, Project } from "@/entities";
import { useStore } from "@shared/index";
import type { Project as TProject } from "@shared/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { projectData as projects } from "../../shared/store/mock/data";
import { useState } from "react";

const initial = {
  title: "",
  image: "",
  description: "",
  video: "",
};

export const Portfolio = () => {
  const { projectPopup, toggleProjectPopup } = useStore((state) => state);
  const [project, setProject] = useState<TProject>(initial);

  const onClick = (elem: TProject) => {
    toggleProjectPopup();
    setProject(elem);
  };

  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 6,
  };

  return (
    <>
      {projectPopup && <Project props={project} />}
      <Block title="портфолио">
        <div className={style.container}>
          <div className={style.row}>
            <Swiper {...swiperParams}>
              {projects.map((el, i) => (
                <SwiperSlide key={i}>
                  <div className={style.slide} onClick={() => onClick(el)}>
                    <img src={el.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={style.rowCenter}>
            <Swiper {...swiperParams} slidesPerView={7}>
              {projects.map((el, i) => (
                <SwiperSlide key={i}>
                  <div className={style.slide} onClick={() => onClick(el)}>
                    <img src={el.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={style.row}>
            <Swiper {...swiperParams}>
              {projects.map((el, i) => (
                <SwiperSlide key={i}>
                  <div className={style.slide} onClick={() => onClick(el)}>
                    <img src={el.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Block>
    </>
  );
};

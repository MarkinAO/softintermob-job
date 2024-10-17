import { Block } from "@/entities/block/block";
import { CardBlog } from "@shared/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { useStore } from "@shared/index";
import type { Article as TArticle } from "@shared/model/model";
import { Article } from "@/entities/article/article";

import { mock as articles } from "./mock/mock";

const initial = {
  title: "",
  image: "",
  text: "",
};

export const Blog = () => {
  const { articlePopup, toggleArticlePopup } = useStore((state) => state);
  const [article, setArticle] = useState<TArticle>(initial);

  const onClick = (elem: TArticle) => {
    toggleArticlePopup();
    setArticle(elem);
  };

  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 3,
  };
  return (
    <>
      {articlePopup && <Article props={article} />}
      <Block title="FAQ">
        <div>
          <Swiper {...swiperParams}>
            {articles.map((el, i) => (
              <SwiperSlide key={i}>
                <div onClick={() => onClick(el)}>
                  {
                    <CardBlog
                      title={el.title}
                      text={el.text}
                      image={el.image}
                    />
                  }
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Block>
    </>
  );
};

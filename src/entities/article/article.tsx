import style from "./article.module.scss";
import { Popup } from "@shared/index";
import type { Article as TArticle } from "@shared/model/model";
import { useStore } from "@shared/index";

interface IArticle {
  props: TArticle;
}

export const Article = ({ props }: IArticle) => {
  const { title, image, text } = props;
  const togglePopup = useStore((state) => state.toggleArticlePopup);
  return (
    <Popup position="fixed" onClick={togglePopup}>
      <div className={style.container}>
        <div className={style.title}>{title}</div>
        <div className={style.image}>
          <img src={image} alt="" />
        </div>
        <div className={style.text}>{text}</div>
      </div>
    </Popup>
  );
};

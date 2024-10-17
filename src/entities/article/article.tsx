import style from "./article.module.scss";
import { Popup } from "@shared/index";
import type { Article as TArticle } from "@shared/model/model";
import { useStore } from "@shared/index";

interface IArticle {
  props: TArticle;
}

export const Article = ({ props }: IArticle) => {
  const { title, image, description } = props;
  const togglePopup = useStore((state) => state.toggleProjectPopup);
  return (
    <Popup position="absolute" onClick={togglePopup}>
      <div className={style.container}>
        <div className={style.title}>{title}</div>
        <div className={style.image}>
          <img src={image} alt="" />
        </div>
        <div className={style.description}>
          {description.map((el, i) => {
            return (
              <div key={i}>
                <p className={style.title}>{el.title}</p>
                <p className={style.text}>
                  <pre>{el.text}</pre>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Popup>
  );
};

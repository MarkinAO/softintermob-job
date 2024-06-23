import style from "./card.module.scss";

interface ICardBlog {
  title: string;
  text: string;
}

export const CardBlog = ({ title, text }: ICardBlog) => {
  return (
    <div className={style.container}>
      <div className={style.header}></div>
      <div className={style.content}>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{text}</div>
      </div>
    </div>
  );
};

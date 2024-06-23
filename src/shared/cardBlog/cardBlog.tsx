import style from "./card.module.scss";

interface ICardBlog {
  title: string;
  text: string;
  image: string;
}

export const CardBlog = ({ title, text, image }: ICardBlog) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={image} alt={title} />
      </div>
      <div className={style.content}>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{`${text.slice(0, 160)}...`}</div>
      </div>
    </div>
  );
};

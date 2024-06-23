import style from "./card.module.scss";

interface ICard {
  text: string;
}

export const Card = ({ text }: ICard) => {
  return (
    <div className={style.container}>
      <div className={style.text}>{text}</div>
    </div>
  );
};

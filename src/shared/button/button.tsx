import style from "./button.module.scss";

interface IButton {
  text: string;
  onClick: Function;
}

export const Button = ({ text, onClick }: IButton) => {
  return (
    <button className={style.main} onClick={() => onClick()}>
      {text}
    </button>
  );
};

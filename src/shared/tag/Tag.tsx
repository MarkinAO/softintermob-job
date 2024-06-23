import style from "./tag.module.scss";

interface ITag {
  text: string;
  active: boolean;
}

export const Tag = ({ text, active }: ITag) => {
  return (
    <div className={active ? `${style.active} ${style.main}` : style.main}>
      {text}
    </div>
  );
};

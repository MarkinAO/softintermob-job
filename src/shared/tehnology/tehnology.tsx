import style from "./tehnology.module.scss";

interface ITehnology {
  title: string;
  logo: string;
}

export const Tehnology = ({ title, logo }: ITehnology) => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
    </div>
  );
};

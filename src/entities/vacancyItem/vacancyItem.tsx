import style from "./vacancyItem.module.scss";
import { Button } from "@shared/index";

interface IVacancyItem {
  title: string;
}

export const VacancyItem = ({ title }: IVacancyItem) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <Button text="Подробнее" onClick={() => {}} />
    </div>
  );
};

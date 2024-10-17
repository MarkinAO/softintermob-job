import style from "./vacancyItem.module.scss";
import { Button } from "@shared/index";
import type { Vacancy } from "@shared/model/model";

interface IVacancyItem {
  title: string;
  onClick: (el: Vacancy) => void
}

export const VacancyItem = ({ title, onClick }: IVacancyItem) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <Button text="Подробнее" onClick={onClick} />
    </div>
  );
};

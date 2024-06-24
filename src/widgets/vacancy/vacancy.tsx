import style from "./vacancy.module.scss";
import { Block } from "@/entities/block/block";
import { VacancyItem } from "../../entities/vacancyItem/vacancyItem";

import { data } from "./mock";

interface IVacancy {
  limit?: boolean;
}

export const Vacancy = ({ limit = true }: IVacancy) => {
  const vacancy = limit ? data.slice(-4) : data;
  return (
    <Block title="Вакансии">
      <div className={style.container}>
        {vacancy.map((el, i) => {
          return <VacancyItem title={el.title} key={i} />;
        })}
      </div>
      <button className={style.button}>Смотреть все</button>
    </Block>
  );
};

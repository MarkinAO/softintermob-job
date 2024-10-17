import style from "./vacancy.module.scss";
import { Block } from "@/entities/block/block";
import { VacancyItem } from "@/entities";
import { VacancyCard } from "@/entities";
import { useStore } from "@shared/index";
import type { Vacancy as TVacancy } from "@shared/model/model";

import { vacData as data } from "@shared/store/mock/data";
import { useState } from "react";

interface IVacancy {
  limit?: boolean;
}

const initialState = {
  title: "",
  tags: [""],
  description: [
    {
      title: "",
      text: "",
    },
  ],
};

export const Vacancy = ({ limit = true }: IVacancy) => {
  const [vac, setVac] = useState<TVacancy>(initialState);
  const { vacancyPopup, toggleVacancyPopup } = useStore((state) => state);
  const [allVac, setAllVac] = useState(false);
  const vacancy = limit ? data.slice(-4) : data;

  const onclick = (el: TVacancy) => {
    setVac(el);
    toggleVacancyPopup();
  };

  return (
    <>
      {vacancyPopup && <VacancyCard props={vac} />}
      <Block title="Вакансии" id="vacancy">
        <div className={style.container}>
          {!allVac &&
            vacancy.map((el, i) => {
              return (
                <VacancyItem
                  title={el.title}
                  key={i}
                  onClick={() => onclick(el)}
                />
              );
            })}
          {allVac &&
            data.map((el, i) => {
              return (
                <VacancyItem
                  title={el.title}
                  key={i}
                  onClick={() => onclick(el)}
                />
              );
            })}
        </div>
        {!allVac && (
          <button className={style.button} onClick={() => setAllVac(true)}>
            Смотреть все
          </button>
        )}
      </Block>
    </>
  );
};

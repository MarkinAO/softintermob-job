import style from "./vacancyCard.module.scss";
import { Popup } from "@shared/index";
import type { Vacancy as TVacancy } from "@shared/model/model";
import { useStore } from "@shared/index";

interface IVacancy {
  props: TVacancy;
}

export const VacancyCard = ({ props }: IVacancy) => {
  const { title, description } = props;
  const togglePopup = useStore((state) => state.toggleVacancyPopup);
  return (
    <Popup position="fixed" onClick={togglePopup}>
      <div className={style.container}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>
          {description.map((el, i) => {
            return (
              <div key={i}>
                <p className={style.title}>{el.title}</p>
                <p className={style.text}>
                  <pre>{el.text}</pre>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Popup>
  );
};

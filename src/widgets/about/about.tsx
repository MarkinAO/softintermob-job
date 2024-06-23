import style from "./about.module.scss";
import { Card } from "@shared/index";

export const About = () => {
  return (
    <section className={style.container}>
      <video className={style.video} src=""></video>
      <div className={style.cards}>
        <Card text="Выпущено более 300 проектов" />
        <Card text="Команда более 400+ профессионалов" />
        <Card text="90% проектов занимают в чартах позиции ТОП 50" />
      </div>
    </section>
  );
};

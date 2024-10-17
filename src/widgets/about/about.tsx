import style from "./about.module.scss";
import { Card } from "@shared/index";
import { useStore } from "@shared/index";

export const About = () => {
  const mainVideo = useStore((state) => state.mainVideo);
  return (
    <section className={style.container}>
      <iframe
        className={style.video}
        src={mainVideo}
        frameBorder="0"
        allow="clipboard-write; autoplay"
      ></iframe>
      <div className={style.cards}>
        <Card text="Выпущено более 300 проектов" />
        <Card text="Команда более 400+ профессионалов" />
        <Card text="90% проектов занимают в чартах позиции ТОП 50" />
      </div>
    </section>
  );
};

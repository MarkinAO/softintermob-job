import { Block } from "@/entities/block/block";
import { Tehnology } from "@shared/index";
import style from "./technologies.module.scss";

import { mock as technologies } from "./mock/mock";

export const Technologies = () => {
  return (
    <Block title="Технологии">
      <div className={style.container}>
        {technologies.map((el, i) => {
          return <Tehnology title={el.title} logo={el.logo} key={i} />;
        })}
      </div>
    </Block>
  );
};

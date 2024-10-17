import style from "./partners.module.scss";
import { Block } from "@/entities/block/block";
import { logos } from "./assets/data";

export const Partners = () => {
  return (
    <Block title="Партнеры" id="partners">
      <div className={style.container}>
        <div className={style.box}>
          {logos.map((el, i) => {
            return <img src={el} alt="" key={i} />;
          })}
          {logos.map((el, i) => {
            return <img src={el} alt="" key={i} />;
          })}
        </div>
      </div>
    </Block>
  );
};

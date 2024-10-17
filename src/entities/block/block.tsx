import style from "./block.module.scss";
import { ReactNode } from "react";

interface IBlock {
  title: string;
  id: string;
  children: ReactNode;
}

export const Block = ({ title, id, children }: IBlock) => {
  return (
    <section className={style.container} id={id} >
      <div className={style.title}>{title}</div>
      {children}
    </section>
  );
};

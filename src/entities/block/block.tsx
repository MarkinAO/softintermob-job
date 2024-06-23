import style from "./block.module.scss";
import { ReactNode } from "react";

interface IBlock {
  title: string;
  children: ReactNode;
}

export const Block = ({ title, children }: IBlock) => {
  return (
    <section className={style.container}>
      <div className={style.title}>{title}</div>
      {children}
    </section>
  );
};

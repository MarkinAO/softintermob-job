import style from "./popup.module.scss";
import { ReactNode } from "react";

interface IPopup {
  children: ReactNode;
  position: "absolute" | "fixed";
  onClick: () => void;
}

export const Popup = ({ children, position, onClick }: IPopup) => {  
  return (
    <section>
      <div className={style.background}></div>
      <div className={style.wrap} style={{ position: position }}>
        <div className={style.container}>
          <div className={style.box}>
            <span className={style.cross} onClick={() => onClick()}></span>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

import { useRef } from "react";
import style from "./FAQ.module.scss";

interface IFAQ {
  title: string;
  text: string;
}

export const FAQ = ({ title, text }: IFAQ) => {
  const arrow = useRef<HTMLDivElement>(null);
  const textBox = useRef<HTMLDivElement>(null);
  const hiddenText = useRef<HTMLDivElement>(null);

  const onClick = () => {
    let rotate = 0;
    let delta = -2;
    let height = 0;
    let opacity = 0;
    const maxHeight = hiddenText.current ? hiddenText.current.offsetHeight : 0;
    if (arrow.current && arrow.current.style.transform === "rotate(-180deg)") {
      rotate = -180;
      height = maxHeight;
      opacity = 1;
      delta = 2;
    }

    const animation = () => {
      if (arrow.current && textBox.current && hiddenText.current) {
        arrow.current.style.transform = `rotate(${rotate}deg)`;
        textBox.current.style.height = `${height}px`;
        textBox.current.style.opacity = `${opacity}`;
      }
      rotate += delta;
      height -= (maxHeight / 180) * delta;
      opacity -= (delta / 100 / 180) * 100;
    };
    setInterval(() => {
      if (rotate !== -182 && rotate !== 2) animation();
    }, 1);
  };

  return (
    <div className={style.container} onClick={onClick}>
      <div className={style.line}></div>
      <div className={style.title}>
        {title}
        <div className={style.arrow} ref={arrow}></div>
      </div>
      <div className={style.text} ref={textBox}>
        <div ref={hiddenText}>{text}</div>
      </div>
    </div>
  );
};

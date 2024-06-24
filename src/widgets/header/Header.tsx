import style from "./header.module.scss";
import { Logo } from "@shared/index";
import { Button } from "@shared/index";

const links = [
  { title: "О нас", link: "" },
  { title: "Портфолио", link: "" },
  { title: "Отделы", link: "" },
  { title: "Вакансии", link: "" },
  { title: "Технологии", link: "" },
  { title: "Блог", link: "" },
  { title: "FAQ", link: "" },
  { title: "Партнеры", link: "" },
  { title: "Контакты", link: "" },
];

export const Header = () => {
  return (
    <header className={style.wrap}>
      <div className={style.container}>
      <div className={style.logo}>
        <Logo />
      </div>
      <ul className={style.links}>
        {links.map((el, i) => {
          return (
            <li key={i}>
              <a href={el.link}>{el.title}</a>
            </li>
          );
        })}
      </ul>
      <Button text="Присоединяйся" onClick={() => {}} />
      </div>
      
    </header>
  );
};

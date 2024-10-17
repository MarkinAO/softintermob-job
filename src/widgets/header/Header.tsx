import style from "./header.module.scss";
import { Logo } from "@shared/index";
import { Button } from "@shared/index";
import { Link } from "react-scroll";

const links = [
  { title: "О нас", link: "about" },
  { title: "Портфолио", link: "portfolio" },
  { title: "Вакансии", link: "vacancy" },
  { title: "Технологии", link: "technologies" },
  { title: "Блог", link: "blog" },
  { title: "FAQ", link: "FAQ" },
  { title: "Партнеры", link: "partners" },
  { title: "Контакты", link: "contacts" },
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
              <li className={style.link} key={i}>
                <Link
                  activeClass={style.active}
                  to={el.link}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                >
                  {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link          
          to="join"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          <Button text="Присоединяйся" onClick={() => {}} />
        </Link>
      </div>
    </header>
  );
};

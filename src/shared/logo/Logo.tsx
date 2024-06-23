import style from "./logo.module.scss"
import logo from "./logo.svg";

export const Logo = () => {
  return <img className={style.main} src={logo} alt="SOFTINTERMOB" />;
};

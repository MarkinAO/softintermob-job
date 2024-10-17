import style from "./footer.module.scss";
import { Logo } from "@shared/index";
import { socials, email, phone, address } from "./assets/data";

export const Footer = () => {
  return (
    <footer className={style.container} id="contacts">
      <div className={style.box}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.socials}>
          {socials.map((el, i) => {
            return (
              <a className={style.icon} href={el.link} key={i}>
                <img src={el.icon} alt={el.link} />
              </a>
            );
          })}
        </div>
      </div>
      <div className={style.box}>
        <div className={style.contact}>
          <img className={style.icon} src={email.icon} alt={email.link} />
          <a className={style.link} type="mail" href={`mailto:${email.link}`}>{email.link}</a>
        </div>
        <div className={style.contact}>
          <img className={style.icon} src={phone.icon} alt={phone.link} />
          <a className={style.link} href={`tel:${phone.link}`}>{phone.link}</a>
        </div>
        <div className={style.contact}>
          <img className={style.icon} src={address.icon} alt={address.link} />
          <a className={style.link} type="mail" href="">{address.link}</a>
        </div>
      </div>
    </footer>
  );
};

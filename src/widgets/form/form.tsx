import style from "./form.module.scss";
import { Button, Input } from "@shared/index";

export const Form = () => {
  return (
    <section className={style.main} id="join">
      <div className={style.background}></div>
      <div className={style.wrap}>
        <div className={style.container}>
          <div className={style.title}>Присоединяйтесь к нашей команде</div>
          <form className={style.field}>
            <Input placeholder="Фамилия" />
            <Input placeholder="Имя" />
            <Input placeholder="Telegram" />
            <Input placeholder="e-mail" />
            <Button text="Присоединиться" onClick={() => {}} />
          </form>
        </div>
      </div>
    </section>
  );
};

import style from "./form.module.scss";
import { Button } from "@shared/index";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Некорректный email",
  }),
  name: z
    .string()
    .min(1, {
      message: "Поле обязательно для заполнения",
    })
    .max(25, {
      message: "Поле должно содержать не более 25 символов",
    }),
  surname: z
    .string()
    .min(1, {
      message: "Поле обязательно для заполнения",
    })
    .max(25, {
      message: "Поле должно содержать не более 25 символов",
    }),
  telegram: z
    .string()
    .min(5, {
      message:
        "Поле обязательно для заполнения и должно содержать не менее 5 символов",
    })
    .max(25, {
      message: "Поле должно содержать не более 25 символов",
    })
    .refine(
      (value) =>
        value.match(
          /^([a-zA-Z0-9_-]{5,25})(?:@([a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+))?$/
        ),
      {
        message:
          "Строка должна состоять из символов латинского алфавита, цифр или спецсимволов '_' или '-'",
      }
    ),
});

type FormFields = z.infer<typeof formSchema>;

export const Form = () => {
  const [message, setMessage] = useState("");

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormFields>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const success = () => {
    setMessage("Данные успешно отправлены");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (isValid) {
      success();
      reset();      
    }
  };

  return (
    <section className={style.main} id="join">
      <div className={style.background}></div>
      <div className={style.wrap}>
        <div className={style.container}>
          <div className={style.title}>Присоединяйтесь к нашей команде</div>
          <form className={style.field} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={style.input}
              type="text"
              placeholder="Фамилия"
              {...register("surname")}
            />
            <div className={style.error}>{errors?.surname?.message}</div>
            <input
              className={style.input}
              type="text"
              placeholder="Имя"
              {...register("name")}
            />
            <div className={style.error}>{errors?.name?.message}</div>
            <input
              className={style.input}
              type="text"
              placeholder="Telegram"
              {...register("telegram")}
            />
            <div className={style.error}>{errors?.telegram?.message}</div>
            <input
              className={style.input}
              type="text"
              placeholder="e-mail"
              {...register("email")}
            />
            <div className={style.error}>{errors?.email?.message}</div>
            <Button text="Присоединиться" onClick={() => {}} />
            <div className={style.success}>{message}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

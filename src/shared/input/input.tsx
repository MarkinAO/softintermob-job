import { useState } from "react";
import style from "./input.module.scss";

interface IInput {
  placeholder: string;
}

export const Input = ({ placeholder }: IInput) => {
  const [value, setValue] = useState("");
  return (
    <input
      className={style.main}
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder}
    />
  );
};

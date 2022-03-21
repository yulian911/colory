import React, { useState } from "react";
import { IColors } from "./interface";
import styles from "../app.module.scss";

interface IProps {
  filters: IColors[];
  colors: IColors[];
  setColors: (value: IColors[]) => void;
}

function Form({ setColors, colors, filters }: IProps) {
  const [hex, setHex] = useState<string>("");

  const hexToRgb = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
      const add = {
        id: Date.now() + Math.random(),
        red: r,
        green: g,
        blue: b,
        default: false,
        hex: `#${hex.toLocaleUpperCase()}`,
      };
      return (
        // console.log([...colors,add]),
        setColors([...colors, add]), setHex("")
        // document.documentElement.style.setProperty('--background-color' ,`rgb(${r},${g},${b})`)
      );
    }
    return null;
  };

  const check = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    ? false
    : true;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    hexToRgb(hex);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label>HEX {"=>"} RGB</label>
        <input
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          maxLength={7}
          placeholder="Proszę wprowadzić kolor"
        />
      </div>

      {filters.length >= 10 ? (
        <div>
          <p>Za dużo kolorów ,proszę usuąć !!! </p>
        </div>
      ) : (
        <button type="submit" disabled={check}>
          Zobacz
        </button>
      )}
    </form>
  );
}

export default Form;

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
  const[hslColor,setHSLColor]=useState<number>(0)


  const hexToRgb = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);

      const red = (parseInt(result[1], 16)/255);
      const green = (parseInt(result[2], 16)/255);
      const blue = (parseInt(result[3], 16)/255);
      let cmin = Math.min(red,green,blue),
      cmax = Math.max(red,green,blue),
      delta = cmax - cmin,
      s = 0,
      l = 0;
      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(1);
     
       const add = {
        id: Date.now() + Math.random(),
        red: r,
        green: g,
        blue: b,
        default: false,
        hex: hex.toLocaleUpperCase(),
        saturation:Math.round(s)

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

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // hexToHSL(hex)
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

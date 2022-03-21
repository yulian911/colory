import React from "react";
import { IColors } from "./interface";
import styles from "../app.module.scss";

interface IProps {
  css: string;
  el: IColors;
  deleteColor: (id: number) => void;
}

const Test = ({ css, el, deleteColor }: IProps) => {
  const constructCss = (css: string) => {
    const style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  };

  const constructCssStyleAndReturnClassName = (css: string) => {
    const generateRandomString = (length = 6) =>
      Math.random().toString(20).substr(2, length);
    const className = `styled-${generateRandomString(8)}`;
    constructCss(`.${className} ${css}`);
    return className;
  };

  const className = constructCssStyleAndReturnClassName(css);
  console.log(el.id);

  const check = el.red >= 127 && el.green >= 127 ? styles.black : styles.white;
  return (
    <div className={className}>
      <div className={styles.content}>
        <p className={check}>
          HEX <span>{el.hex}</span>
        </p>
        <p className={check}>
          RGB
          <span>
            ({el.red},{el.green},{el.blue})
          </span>
        </p>
      </div>

      {!el.default && (
        <button
          className={styles.deleteButton}
          onClick={() => deleteColor(el.id)}
        >
          x
        </button>
      )}
    </div>
  );
};

export default Test;
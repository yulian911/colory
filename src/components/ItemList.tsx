import React, { Component } from "react";
import { IColors } from "./interface";
import styles from "../app.module.scss";

type ColorProps = {
  css: string;
  el: IColors;
  deleteColor: (id: number) => void;
};

export class ItemList extends Component<ColorProps> {
  render() {
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

    const { red, green, blue, id, hex, saturation } = this.props.el;
    const className = constructCssStyleAndReturnClassName(this.props.css);
    const checkHash = hex.slice(0, 1) === "#" ? hex : `#${hex}`;

    return (
      <li>
        <div className={styles.colors}>
          <p>HEX {checkHash}</p>
          <div className={className}></div>
          <p>
            RGB({red},{green},{blue})
          </p>
        </div>
        <div>
          <p>Saturation:{saturation}%</p>
        </div>
        <div>
          {!this.props.el.default && (
            <button
              className={styles.deleteButton}
              onClick={() => this.props.deleteColor(id)}
            >
              x
            </button>
          )}
        </div>
      </li>
    );
  }
}

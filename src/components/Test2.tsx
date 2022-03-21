import React, { Component } from 'react'
import { IColors } from './interface'
import styles from "../app.module.scss";

type ColorProps={
    css:string,
     el:IColors,
    deleteColor :(id: number) => void;
}


export class ItemList extends Component<ColorProps>{


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

    const {red,green,blue,id,hex,saturation}=this.props.el
    // const this.props.el
    const className = constructCssStyleAndReturnClassName(this.props.css);
    const check = red >= 127 && green >= 127 ? styles.black : styles.white;
    const checkHash = hex.slice(0,1)==='#'?hex:`#${hex}`
    // console.log('slice' ,checkHash)
    return (
        <div className={className}>
        <div className={styles.content}>
          <p className={check}>

            HEX <span>{checkHash}</span>
            
          </p>
          <p className={check}>Saturation:{saturation}%</p>
          <p className={check}>
            RGB
            <span>
              ({red},{green},{blue})
            </span>
          </p>
        </div>
  
        {!this.props.el.default && (
          <button
            className={styles.deleteButton}
            onClick={() => this.props.deleteColor(id)}
          >
            x
          </button>
        )}
      </div>
    )
  }

}


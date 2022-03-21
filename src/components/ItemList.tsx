import React from 'react'
import { IColors } from './interface';

interface IProps{
    css:string,
    el:IColors
    deleteColor:(id:number)=>void
}



const ItemList = ({ css,el,deleteColor}:IProps) => {


    const constructCss = (css:string) => {
        const style = document.createElement("style");
        document.head.appendChild(style);
        style.appendChild(document.createTextNode(css));
      };
      
      const constructCssStyleAndReturnClassName = (css:string) => {
    
        const generateRandomString = (length = 6) =>
          Math.random().toString(20).substr(2, length);
        const className = `styled-${generateRandomString(8)}`;
        constructCss(`.${className} ${css}`);
        return className;
      };


    const className = constructCssStyleAndReturnClassName(css);
    console.log(el.id)
    return (  
    <div className={className}>
          <p >RGB({el.red},{el.green},{el.blue}) </p>
         {!el.default &&  <p onClick={()=>deleteColor(el.id)} >x</p>}
    </div>
  
    )
  };

export default ItemList
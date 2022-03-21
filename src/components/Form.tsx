import React, { useState } from 'react'
import { IColors } from './interface';


interface IProps{
    filters:IColors[]
    colors: IColors[],
    setColors:(value: any | ((prevVar: IColors) => IColors)) => void
}


function Form({setColors ,colors,filters}:IProps) {
    const [hex ,setHex]=useState<string>('')

    const hexToRgb=(hex:string)=> {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if(result){
            var r= parseInt(result[1], 16);
            var g= parseInt(result[2], 16);
            var b= parseInt(result[3], 16);
            const add ={
              id: Date.now() + Math.random(),
              red: r,
              green:g,
              blue:b,
              default:false,
            }
            return (
              // console.log([...colors,add]),
              setColors([...colors,add]),
          
              setHex('')
              // document.documentElement.style.setProperty('--background-color' ,`rgb(${r},${g},${b})`)
              
              )
           
        } 
        return null;
      }

     
      const check = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) ? false :true 
  return (
    <div>

      <input value={hex} onChange={(e)=>setHex(e.target.value) }  maxLength={6}/>
     {filters.length>=10 ?<p>Za dużo ,proszę usuąć kolor </p>:<button onClick={()=>hexToRgb(hex)} disabled={check }>Pokaż</button>} 
    </div>
  )
}

export default Form
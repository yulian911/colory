import React from 'react'
import { IColors } from './interface'



interface IProps{
    colors: IColors[] ,
    setFilters:(value: IColors[]) => void
}

const FilterComponent = ({setFilters,colors}:IProps) => {

    const filterColors =(color:string)=>{
        if('red'===color){
            const updateColors =colors.filter((x:{red:number})=>x.red >= 127).sort(compareFunctionRed)
              // const updateSort =updateColors
              setFilters(updateColors)
             
        }else if('green' === color){
          const updateColors =colors.filter((x:{green:number})=>x.green >= 127).sort(compareFunctionGreen)
          setFilters(updateColors)
        }else{
          const updateColors =colors.filter((x:{blue:number})=>x.blue >= 127).sort(compareFunctionBlue)
          setFilters(updateColors)
        } 
   }

   const compareFunctionRed =(a:{red:number},b:{red:number})=>{
    return b.red- a.red
}
const compareFunctionBlue =(a:{blue:number},b:{blue:number})=>{
  return b.blue- a.blue
}
const compareFunctionGreen =(a:{green:number},b:{green:number})=>{
return b.green- a.green
}


  return (
    <div>
        <button onClick={()=>setFilters(colors)}>ALL</button>
        <button onClick={()=>filterColors('red')}>Red</button>
        <button onClick={()=>filterColors('green')}>Green</button>
        <button onClick={()=>filterColors('blue')}>Blue</button>
  </div>
  )
}

export default FilterComponent
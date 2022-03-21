import React, { useEffect, useState } from 'react';
import './app.scss';
import FilterComponent from './components/FilterComponent';
import Form from './components/Form';
import { IColors } from './components/interface';
import ItemList from './components/ItemList';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [colors ,setColors]=useLocalStorage('colors',[
    {id:1, red:255,green:0,blue:0,default:true},
    {id:2,red:0,green:255,blue:0,default:true},
    {id:3,red:0,green:0,blue:255,default:true}
])

const deleteColor =(id:number)=>{
  const newColor =colors.filter((x) =>{
    return x.id !==id
  })
  setColors(newColor)
}
useEffect(() => {
  setFilters(colors)
     
   }, [colors])

const [filters,setFilters]=useState<IColors[]>([])
console.log(filters.length)
  return (
    <div className="App">
      <div>
        <FilterComponent setFilters={setFilters} colors={colors}/>
        <Form colors={colors} setColors={setColors} filters={filters}/>
      </div>
       <div className='card'>
        { filters.map((el:IColors)=>
              <ItemList
              key={el.id}
            
              css={`{background-color:rgb(${el.red},${el.green},${el.blue});color: white;border:1px solid black; border-radius:12px;display:flex;justify-content:space-between;padding:10px;  }`} 
              el={el}
              deleteColor={deleteColor}
              />
              )}
      </div>
      
    </div>
  );
}

export default App;

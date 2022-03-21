import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import FilterComponent from "./components/FilterComponent";
import Form from "./components/Form";
import { IColors } from "./components/interface";
import { ItemList } from "./components/ItemList";

import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [colors, setColors] = useLocalStorage("colors", [
    { id: 1, red: 255, green: 0, blue: 0, default: true, hex: "#FF0000" ,saturation:100 },
    { id: 2, red: 0, green: 255, blue: 0, default: true, hex: "#00FF00",saturation:100 },
    { id: 3, red: 0, green: 0, blue: 255, default: true, hex: "#0000FF" ,saturation:100},
    { id: 4, red: 255, green: 255, blue: 255, default: true, hex: "#FFFFFF",saturation:0 },
  ]);

  const deleteColor = (id: number) => {
    const newColor = colors.filter((x) => {
      return x.id !== id;
    });
    setColors(newColor);
  };
  useEffect(() => {
    setFilters(colors);
  }, [colors]);

  const [filters, setFilters] = useState<IColors[]>([]);

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <FilterComponent setFilters={setFilters} colors={colors} />
        <Form colors={colors} setColors={setColors} filters={filters} />
      </div>
      <div className={styles.card}>
        {filters.map((el: IColors) => (
          <ItemList
            key={el.id}
            css={`
               {
                background-color: rgb(${el.red}, ${el.green}, ${el.blue});
                color: white;
                border: 1px solid black;
                border-radius: 12px;
                display: flex;
                justify-content: space-between;
                padding: 10px;
              }
            `}
            el={el}
            deleteColor={deleteColor}
          />
    
        ))}
      </div>
    </div>
  );
}

export default App;

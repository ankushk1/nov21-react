import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";

const ApiComp = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await data.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Todos</h3>
      {data.length == 0 ? (
        <pre>Loading...</pre>
      ) : (
        data.map((elem, index) => (
            <ItemDetails key={index} id={elem.id} title={elem.title} 
              completed={elem.completed}
            />
        ))
      )}
      {/* {data.map((elem) => {
         return (
          <div>
            <pre>{elem.id}</pre>
            <pre>{elem.title}</pre>
          </div>
        );
      })} */}
    </div>
  );
};

export default ApiComp;

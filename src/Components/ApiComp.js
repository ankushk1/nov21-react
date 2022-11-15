import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import './ApiComp.css'

const ApiComp = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h3>Todos</h3>
      {data.length == 0 ? (
        <div >Loading...</div>
      ) : (
        data.map((elem, index) => (
            <ItemDetails 
             key={index} id={elem.id} title={elem.title} styleClass="text-white"
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

import React from "react";
import ItemDetails from "../Components/ItemDetails";
import withApi from "./withApi";

const Todoss = ({ data }) => {
  return (
    <div>
      Todoss
      {data.slice(0, 10).map((elem, index) => (
        <ItemDetails
          key={index}
          id={elem.id}
          title={elem.title}
          completed={elem.completed}
        />
      ))}
    </div>
  );
};

export default withApi(Todoss, "todos");

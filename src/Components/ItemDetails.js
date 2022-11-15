import React from "react";
import './ApiComp.css'

const ItemDetails = (props) => {
  const { id, title, completed, styleClass } = props;
  return (
    <div style={{
      color:"blue"
    }}>
      <pre>{id}</pre>
      <pre>{title}</pre>
      <pre>{String(completed)}</pre>
    </div>
  );
};

export default ItemDetails;

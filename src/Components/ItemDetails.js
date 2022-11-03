import React from "react";

const ItemDetails = (props) => {
  const { id, title, completed } = props;
  return (
    <div>
      <pre>{id}</pre>
      <pre>{title}</pre>
      <pre>{String(completed)}</pre>
    </div>
  );
};

export default ItemDetails;

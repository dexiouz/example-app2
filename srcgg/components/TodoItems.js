import React, { Component } from "react";

const TodoItems = props => {
  // destructure prop items
  const { individualItem, handleRemoveOneItem } = props;
  return (
    <div>
      {individualItem}
      <button onClick={handleRemoveOneItem}>Remove</button>
    </div>
  );
};

export default TodoItems;

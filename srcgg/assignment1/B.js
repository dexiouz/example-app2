import React, { Component } from "react";
import C from "./C";
const B = props => {
  const mapped = props.mappingItems;
  console.log(mapped, "mapped");
  return (
    <div>
      <h5>This is from component B</h5>
      {mapped.map(item => (
        <C item={item} />
      ))}
    </div>
  );
};

export default B;

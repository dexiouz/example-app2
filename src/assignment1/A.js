import React from "react";
import B from "./B";

const A = () => {
  const myStuff = ["gionee", "lenovo", "ipod"];
  return (
    <div>
      <p>This is A component</p>
      <B mappingItems={myStuff} title="ANYTHING FOR TITLE" />
    </div>
  );
};

export default A;

import React from "react";

const HeavyList = () => {
  console.log("Rendering HeavyList...");
  return <div>📋 Heavy List Component Loaded!</div>;
};

export default React.memo(HeavyList);

import React from "react";

const Output = ({ clickedOn }) => {
  return (
    <div className="bg-orange-400 p-5 sticky top-1 rounded-2xl shadow-2xl">
      <h1>Output:</h1>
      <h1>Clicked On: {clickedOn}</h1>
    </div>
  );
};

export default Output;

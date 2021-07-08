import React from "react";

export const Title = (props) => {
  console.log(props);
  return (
    <div className="benefits-section">
      <div className="container">
        <h1 className="title">{props.title}</h1>
      </div>
    </div>
  );
};

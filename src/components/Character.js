// Write your Character component here
import React from "react";

export default function Character(props) {
  const { name, sprite, type1, type2 } = props;

  return (
    <div>
      <h1>{name}</h1>
      <img src={sprite} />
      <h3>{type1 + (type2 ? "/" + type2 : "")}</h3>
    </div>
  );
}

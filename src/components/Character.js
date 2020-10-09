// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  background-color: white;
  border-radius: 7px;
  width: 60%;
  padding: 3%;
  margin: 3% auto;
`;

export default function Character(props) {
  const { name, sprite, type1, type2 } = props;

  return (
    <StyledCharacter>
      <h1>{name}</h1>
      <img src={sprite} />
      <h3>{type1 + (type2 ? "/" + type2 : "")}</h3>
    </StyledCharacter>
  );
}

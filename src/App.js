import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 1%;
  margin: 1% auto;
  cursor: pointer;
`;

const StyledHeader = styled.h1`
  background-color: white;
  border-radius: 3px;
  padding: 1%;
  width: 60%;
  margin: 3% auto;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [pokemonIds, setPokemonIds] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  const generator = () => {
    let ids = [];

    for (let i = 0; i < 10; i++) {
      let randomId = Math.floor(Math.random() * 806) + 1;
      ids.push(randomId);
    }
    setPokemonIds(ids);
  };

  useEffect(() => {
    const promises = [];

    for (let i = 0; i < pokemonIds.length; i++) {
      let promise = axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonIds[i]}`
      );
      promises.push(promise);
    }

    Promise.all(promises).then((res) => {
      const finalData = [];
      res.forEach((result) => {
        finalData.push(result.data);
      });
      setPokemonData(finalData);
      console.log(finalData);
    });
  }, [pokemonIds]);

  return (
    <div className="App">
      <StyledButton onClick={generator}>Generate Pokemon</StyledButton>
      <StyledHeader className="Header">Characters</StyledHeader>
      {pokemonData.map((pokemon) => {
        return (
          <Character
            key={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprites.front_default}
            type1={pokemon.types[0].type.name}
            type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
          />
        );
      })}
    </div>
  );
};

export default App;

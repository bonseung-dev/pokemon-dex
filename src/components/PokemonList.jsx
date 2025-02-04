import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  background-color: gray;
  flex-wrap: wrap;
`;
const PokemonList = () => {
  const pokemons = [
    "피카츄",
    "꼬부기",
    "이상해씨",
    "피카츄",
    "꼬부기",
    "이상해씨",
    "피카츄",
    "꼬부기",
    "이상해씨",
    "피카츄",
    "꼬부기",
    "이상해씨",
    "피카츄",
    "꼬부기",
    "이상해씨",
    "피카츄",
    "꼬부기",
    "이상해씨",
  ]; // 예시 데이터

  return (
    <>
      <ul>
        <ListContainer>
          {pokemons.map((pokemon, index) => (
            <PokemonCard key={index} name={pokemon} />
          ))}
        </ListContainer>
      </ul>
    </>
  );
};
export default PokemonList;

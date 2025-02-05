import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

const ListContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 30px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;
const PokemonList = () => {
  const pokemons = useContext(PokemonContext);
  if (!pokemons || pokemons.length === 0) {
    return <div>포켓몬 데이터가 없습니다.</div>; // 데이터가 없을 때 메시지
  }
  return (
    <>
      <ul>
        <ListContainer>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.korean_name}
              img_url={pokemon.img_url}
            />
          ))}
        </ListContainer>
      </ul>
    </>
  );
};
export default PokemonList;

import React from "react";
import PokemonCard from "./PokemonCard";
import { ListContainer } from "../styles/StyledComponents";
import { useSelector } from "react-redux";
const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  if (!pokemons || pokemons.length === 0) {
    return <div>포켓몬 데이터가 없습니다.</div>;
  }
  return (
    <>
      <ul>
        <ListContainer>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              types={pokemon.types}
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

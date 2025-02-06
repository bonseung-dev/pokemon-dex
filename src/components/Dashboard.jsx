import React from "react";
import styled from "styled-components";
import PokemonList from "./PokemonList";
import { useDashboard } from "../context/DashboardContext";
import { ListContainer } from "./PokemonList";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Dashboard = () => {
  const { addPokemons, removePokemon } = useDashboard();
  return (
    <>
      <DashboardContainer>
        {addPokemons.length === 0 ? (
          <></>
        ) : (
          <div style={{ display: "flex", gap: "20px" }}>
            {addPokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                img_url={pokemon.img_url}
                types={pokemon.types}
                onRemove={removePokemon}
              />
            ))}
          </div>
        )}
      </DashboardContainer>
      <PokemonList />
    </>
  );
};

export default Dashboard;

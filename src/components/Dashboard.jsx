import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListContainer } from "../styles/StyledComponents";
import PokemonCard from "./PokemonCard";
import { DashboardContainer } from "../styles/StyledComponents";
import PokemonList from "./PokemonList";
import { removePokemon } from "../redux/slices/dashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedPokemons = useSelector(
    (state) => state.dashboard.selectedPokemons
  );

  return (
    <>
      <DashboardContainer>
        {selectedPokemons.length === 0 ? (
          <p>선택 된 포켓몬이 없습니다.</p>
        ) : (
          <ListContainer>
            {selectedPokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                img_url={pokemon.img_url}
                types={pokemon.types}
                onRemove={() => dispatch(removePokemon(pokemon.id))}
              />
            ))}
          </ListContainer>
        )}
      </DashboardContainer>
      <PokemonList />
    </>
  );
};

export default Dashboard;

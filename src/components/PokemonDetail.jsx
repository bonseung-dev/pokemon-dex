import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/dashboardSlice";
import { DetailContainer, DetailImg } from "../styles/StyledComponents";

const PokemonDetail = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pokemonId = parseInt(params.get("id"));

  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate("/Dex");
  };

  const handleAddPokemon = () => {
    if (pokemon) {
      dispatch(addPokemon(pokemon));
    }
  };

  const pokemon = pokemons.find((p) => p.id === pokemonId);

  if (pokemon) {
    return (
      <DetailContainer>
        <h2>{pokemon.korean_name}</h2>
        <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>타입: {pokemon.types.join(", ")}</p>
        <p>{pokemon.description}</p>
        <button onClick={handleBackNavigation}>뒤로 가기</button>
        <button onClick={handleAddPokemon}>추가</button> {/* 추가 버튼 */}
      </DetailContainer>
    );
  }

  return <div>상세정보 페이지</div>;
};

export default PokemonDetail;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/dashboardSlice";
import {
  DetailContainer,
  DetailImg,
  CardBtn,
} from "../styles/StyledComponents";

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
  const pokemon = pokemons.find((p) => p.id === pokemonId);
  console.log("찾은 포켓몬:", pokemon);
  const handleAddPokemon = () => {
    console.log("추가할 포켓몬:", pokemon);
    if (pokemon) {
      dispatch(addPokemon(pokemon));
    }
  };

  if (pokemon) {
    return (
      <DetailContainer>
        <h2>{pokemon.korean_name}</h2>
        <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>타입: {pokemon.types.join(", ")}</p>
        <p>{pokemon.description}</p>
        <CardBtn onClick={handleBackNavigation}>뒤로 가기</CardBtn>
        <CardBtn onClick={handleAddPokemon}>추가</CardBtn> {/* 추가 버튼 */}
      </DetailContainer>
    );
  }

  return <div>상세정보 페이지</div>;
};

export default PokemonDetail;

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardBtn, CardContainer, CardLi } from "../styles/StyledComponents";
import { addPokemon, removePokemon } from "../redux/slices/dashboardSlice";

const PokemonCard = ({ name, img_url, types, id, onRemove }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPokemon = () => {
    const pokemon = { id, name, img_url, types };
    console.log("추가 버튼 클릭:", pokemon);
    dispatch(addPokemon(pokemon));
  };

  const handleRemovePokemon = () => {
    dispatch(removePokemon(id));
  };

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      return;
    }
    navigate(`/PokemonDetail?id=${id}`);
  };

  return (
    <CardLi>
      <CardContainer onClick={handleClick}>
        <img
          src={img_url}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <p>{name}</p>
        <p>{types.join(", ")}</p>
        {onRemove ? (
          <CardBtn onClick={handleRemovePokemon}>삭제</CardBtn>
        ) : (
          <CardBtn onClick={handleAddPokemon}>추가</CardBtn>
        )}
      </CardContainer>
    </CardLi>
  );
};

export default PokemonCard;

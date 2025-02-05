import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  height: auto;
  width: 150px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
`;
const CardBtn = styled.button`
  border-color: red;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;
const CardLi = styled.li`
  list-style: none;
`;

const PokemonCard = ({ name, img_url, id }) => {
  return (
    <CardLi>
      <CardContainer>
        <img
          src={img_url}
          alt={name}
          style={{ width: "80px", height: "80px" }}
        />
        <p>{id}</p>
        <p>{name}</p>
        <CardBtn>추가</CardBtn>
      </CardContainer>
    </CardLi>
  );
};

export default PokemonCard;

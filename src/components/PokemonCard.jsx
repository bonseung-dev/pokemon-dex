import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  float: left;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  width: 100px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PokemonCard = ({ name }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <CardContainer>
        <h2>{name}</h2>
      </CardContainer>
    </li>
  );
};

export default PokemonCard;

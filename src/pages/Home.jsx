import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeContainer } from "../styles/StyledComponents";
import { HomeImg } from "../styles/StyledComponents";
import { HomeBtn } from "../styles/StyledComponents";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeImg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" />
      <HomeBtn onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</HomeBtn>
    </HomeContainer>
  );
};

export default Home;

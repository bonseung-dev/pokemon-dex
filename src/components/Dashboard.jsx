import React from "react";
import styled from "styled-components";
import PokemonList from "./PokemonList";

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
  return (
    <>
      <DashboardContainer>대시보드</DashboardContainer>
      <PokemonList />
    </>
  );
};

export default Dashboard;

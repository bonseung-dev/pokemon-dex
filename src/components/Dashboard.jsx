import React from "react";
import styled from "styled-components";
import PokemonList from "./PokemonList";

const DashboardContainer = styled.div`
  padding: 7%;
  background-color: #a1caee;
  text-align: center;
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

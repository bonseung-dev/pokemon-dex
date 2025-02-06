import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [addPokemons, setAddPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    // 포켓몬 추가 함수
    setAddPokemons((prev) => [...prev, pokemon]);
  };

  const removePokemon = (id) => {
    console.log("삭제 버튼 이벤트 제거한 포켓몬 id :", id);
    setAddPokemons((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };
  return (
    <DashboardContext.Provider
      value={{ addPokemons, addPokemon, removePokemon }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  return useContext(DashboardContext);
};

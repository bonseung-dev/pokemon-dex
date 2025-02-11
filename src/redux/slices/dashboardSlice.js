import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemons: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const isAlreadySelected = state.selectedPokemons.some(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (isAlreadySelected) {
        alert("이미 선택한 포켓몬입니다.");
        return;
      }
      if (state.selectedPokemons.length >= 6) {
        alert("최대 6개까지 선택할 수 있습니다.");
        return;
      }
      state.selectedPokemons.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.selectedPokemons = state.selectedPokemons.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = dashboardSlice.actions;
export default dashboardSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice";
import dashboardReducer from "../slices/dashboardSlice";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    dashboard: dashboardReducer,
  },
});

export default store;

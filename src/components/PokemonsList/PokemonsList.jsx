import { useSelector, useDispatch } from "react-redux";
import { fetchRandomPokemon } from "../../store/pokemonsSlice";
import { useEffect } from "react";

import PokemonItem from "../PokemonItem/PokemonItem";

export default function PokemonsList({ secondValue }) {
  const dispatch = useDispatch();
  const pokemonsStatus = useSelector((state) => state.pokemons.status);
  const error = useSelector((state) => state.pokemons.error);

  let resetButton = document.querySelector("#reset");

  let visitCount = localStorage.getItem("page_view");
  if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
  } else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
  }

  useEffect(() => {
    if (!localStorage.getItem("pokemon")) {
      dispatch(fetchRandomPokemon());
    }
  }, [dispatch]);

  if (pokemonsStatus === "loading") return <div>Loading...</div>;
  if (pokemonsStatus === "failed") return <div>Error: {error}</div>;
  return <PokemonItem secondValue={secondValue} />;
}

import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

import PokemonItem from "../PokemonItem/PokemonItem";

export default function PokemonsList() {
  const dispatch = useDispatch();

  let resetButton = document.querySelector("#reset");

  let visitCount = localStorage.getItem("page_view");
  if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
  } else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
  }

  return <PokemonItem />;
}

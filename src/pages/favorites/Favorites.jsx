import React from "react";
import { useSelector } from "react-redux";

import CarsList from "../../components/carsList/CarsList";
import { selectFavoriteItems } from "../../store/favorites/favoriteSelectors";

function Favorites() {
  const favoriteItems = useSelector(selectFavoriteItems);

  return (
    <>
      <CarsList cars={favoriteItems} />
    </>
  );
}

export default Favorites;

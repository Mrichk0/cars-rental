import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favorites/favoritesSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as outlineHeart } from "@fortawesome/free-regular-svg-icons";

import style from "./likeButton.module.scss";

function LikeButton({ item }) {
  const { favoriteItems } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const isFavorite = (id) => {
    return favoriteItems.some((item) => item.id === id);
  };

  const handleAddToFavorites = (item) => {
    dispatch(addToFavorites(item));
  };

  const handleRemoveFromFavorites = (item) => {
    dispatch(removeFromFavorites(item));
  };
  return (
    <FontAwesomeIcon
      className={style.likeButton}
      icon={isFavorite(item.id) ? solidHeart : outlineHeart}
      style={{
        cursor: "pointer",
        color: isFavorite(item.id)
          ? "rgba(52, 112, 255, 1)"
          : "rgba(255, 255, 255, 0.8)",
      }}
      onClick={() => {
        isFavorite(item.id)
          ? handleRemoveFromFavorites(item)
          : handleAddToFavorites(item);
      }}
    />
  );
}

export default LikeButton;

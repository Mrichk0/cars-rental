import React from "react";
import CarItem from "../carItem/CarItem";
import style from "./carsList.module.scss";

function CarsList({ cars }) {
  return (
    <ul className={style.list}>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
}

export default CarsList;

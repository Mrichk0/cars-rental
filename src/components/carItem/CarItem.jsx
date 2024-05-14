import React from "react";
import LikeButton from "../likeButton/LikeButton";
import Modal from "../modal/Modal";

import style from "./carItem.module.scss";

function CarItem({ car }) {
  const addressParts = car.address.split(",");

  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();
  return (
    <li>
      <div className={style.cart}>
        <div className={style.cart__imgWrapper}>
          <img className={style.cart__image} src={car.img} alt={car.make} />
        </div>

        <div className={style.cart__details}>
          <div className={style.cart__details__title}>
            <h3 className={style.cart__title}>
              {car.make}, {car.year}
            </h3>
            <p className={style.cart__price}>{car.rentalPrice}</p>
          </div>

          <ul className={style.cart__details__features}>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>{city}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>{country}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>{car.rentalCompany}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>{car.type}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>{car.make}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>{car.mileage}</p>
            </li>
          </ul>
          <LikeButton className={style.cart__details__button} item={car} />
          <Modal car={car} />
        </div>
      </div>
    </li>
  );
}

export default CarItem;

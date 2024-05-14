import React from "react";
import { nanoid } from "nanoid";

import style from "./modalContent.module.scss";
import LikeButton from "../likeButton/LikeButton";

function ModalContent({ car }) {
  const addressParts = car.address.split(",");

  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();

  const conditions = car.rentalConditions.split("\n");

  const age = conditions.splice(0, 1)[0].split(":")[1];

  const accessories = [...car.accessories, ...car.functionalities];
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
          </div>

          <ul className={style.cart__details__features}>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>{city}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>{country}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>Id: {car.id}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>year: {car.year}</p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>type: {car.type}</p>
            </li>
            <br />
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>
                Engine Size:{car.engineSize}
              </p>
            </li>
            <li className={style.cart__details__item}>
              <p className={style.cart__details__info}>
                Fuel Consumption:{car.fuelConsumption}
              </p>
            </li>
          </ul>
          <p className={style.cart__details__description}> {car.description}</p>
          <h4 className={style.cart__details__title}>
            Accessories and functionalities:
          </h4>
          <ul className={style.cart__details__features}>
            {accessories.map((accessory) => (
              <li className={style.cart__details__item} key={nanoid()}>
                <p className={style.cart__details__info}>{accessory}</p>
              </li>
            ))}
          </ul>

          <h4 className={style.cart__details__title}>Rental Conditions:</h4>

          <ul className={style.cart__conditions__features}>
            <li className={style.cart__conditions__item} key={nanoid()}>
              <p className={style.cart__conditions__info}>
                Minimum age:
                <span className={style.cart__conditions__numb}>{age}</span>
              </p>
            </li>
            {conditions.map((condition) => (
              <li className={style.cart__conditions__item} key={nanoid()}>
                <p className={style.cart__conditions__info}>{condition}</p>
              </li>
            ))}
            <li className={style.cart__conditions__item} key={nanoid()}>
              <p className={style.cart__conditions__info}>
                Mileage:
                <span className={style.cart__conditions__numb}>
                  {car.mileage}
                </span>
              </p>
            </li>
            <li className={style.cart__conditions__item} key={nanoid()}>
              <p className={style.cart__conditions__info}>
                Price:
                <span className={style.cart__conditions__numb}>
                  {car.rentalPrice}
                </span>
              </p>
            </li>
          </ul>
          <a href="tel:+380730000000">
            <button className={style.cart__callButton}>Call Now</button>
          </a>
          <LikeButton className={style.cart__details__button} item={car} />
        </div>
      </div>
    </li>
  );
}

export default ModalContent;

import React, { useState } from "react";

import { carMakes, prices } from "./options";
import SelectorForm from "../selectorForm/SelectorForm";

import style from "./carSearchForm.module.scss";

const CarSearchForm = ({ onSubmit }) => {
  const [make, setMake] = useState({ label: "", value: "" });
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [carPrice, setCarPrice] = useState({ label: "", value: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedPrice = carPrice.value
      ? parseInt(carPrice.value.substring(1))
      : null;

    const parsedMinMileage = Number(minMileage);
    const parsedMaxMileage = Number(maxMileage);
    onSubmit({
      make: make.value,
      carPrice: parsedPrice,
      minMileage: parsedMinMileage,
      maxMileage: parsedMaxMileage,
    });
    setMake({ label: "", value: "" });
    setCarPrice({ label: "", value: "" });
    setMinMileage("");
    setMaxMileage("");
  };

  const handelMakeChange = (value) => {
    setMake(value);
  };

  const handelPriceChange = (value) => {
    setCarPrice(value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.form__selectContainer}>
        <label className={style.form__label} htmlFor="brand">
          Car brand
        </label>
        <SelectorForm
          value={make.value}
          onChange={handelMakeChange}
          id={"brand"}
          options={carMakes}
          placeholder="Enter the text"
        />
      </div>
      <div className={style.form__selectContainer}>
        <label htmlFor="price" className={style.form__label}>
          Price/ 1hour
        </label>
        <SelectorForm
          value={carPrice.value}
          onChange={handelPriceChange}
          id={"price"}
          options={prices}
          placeholder="To $"
        />
      </div>

      <div className={style.form__inputContainer}>
        <label htmlFor="mileage" className={style.form__labelInput}>
          Сar mileage / km
        </label>
        <input
          className={`${style.form__input} ${style.form__input__from}`}
          htmlFor="mileage"
          type="number"
          value={minMileage}
          onChange={(e) => setMinMileage(e.target.value)}
          id="mileage"
        />
        <span className={style.form__placeholder}>From</span>
      </div>
      <div className={style.form__inputContainer}>
        <input
          className={`${style.form__input} ${style.form__input__to}`}
          type="number"
          value={maxMileage}
          onChange={(e) => setMaxMileage(e.target.value)}
          // placeholder="To"
          id="mileage"
        />
        <span className={style.form__placeholder}>To</span>
      </div>

      <button className={style.form__button} type="submit">
        Search
      </button>
    </form>
  );
};

export default CarSearchForm;

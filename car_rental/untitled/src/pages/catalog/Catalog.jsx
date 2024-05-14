import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../store/cars/carsOperations";
import CarSearchForm from "../../components/carSearchForm/CarSearchForm";
import CarsList from "../../components/carsList/CarsList";

import style from "./catalog.module.scss";
import {
  selectCars,
  selectError,
  selectIsLoading,
} from "../../store/cars/carsSelectors";
import Loader from "../../components/loader/Loader";
import ButtonLoadMore from "../../components/buttonLoadMore/ButtonLoadMore";

function Catalog() {
  const [page, setPage] = useState(1);
  const [loadedItems, setLoadedItems] = useState([]);

  const dispatch = useDispatch();
  const items = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (page === 1) {
      setLoadedItems(items);
    } else {
      const newItems = items.filter((item) => {
        return !loadedItems.some((loadedItem) => loadedItem.id === item.id);
      });
      setLoadedItems([...loadedItems, ...newItems]);
    }
  }, [items, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = (formData) => {
    const { make, carPrice, minMileage, maxMileage } = formData;
    const filteredItems = items.filter((item) => {
      if (make && item.make !== make) {
        return false;
      }
      if (
        (minMileage && item.mileage < minMileage) ||
        (maxMileage && item.mileage > maxMileage)
      ) {
        return false;
      }
      if (carPrice && parseInt(item.rentalPrice.substring(1)) > carPrice) {
        return false;
      }
      return true;
    });
    setLoadedItems(filteredItems);
  };

  return (
    <div className={style.catalog}>
      <CarSearchForm onSubmit={handleSearch} />
      {loading && <Loader />}
      {!loading && !error && <CarsList cars={loadedItems} />}
      {error && <div className={style.error}>{error}</div>}
      {loadedItems.length < 32 && (
        <ButtonLoadMore handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}

export default Catalog;

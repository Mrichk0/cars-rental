import React from "react";
import style from "./buttonLoadMore.module.scss";

function ButtonLoadMore({ handleLoadMore }) {
  return (
    <>
      <button className={style.button} onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
}

export default ButtonLoadMore;

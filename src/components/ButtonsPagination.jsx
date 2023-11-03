import React, { useContext, useState } from 'react'
import PictureContext from '../contexts/PIcturesContext';

const ButtonsPagination = () => {

    const {page, setPage} = useContext(PictureContext)

    const changePage = (page) => {
    page === "next" && setPage((prevValue) => prevValue + 1);
    page === "prev" &&
      setPage((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
  };

  return (
    <>
        <button onClick={() => changePage('prev')}>&larr;</button>
        <button onClick={() => changePage('next')}>&rarr;</button>
    </>
  )
}

export default ButtonsPagination
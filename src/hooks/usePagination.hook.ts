"use client";
import { useState } from "react";

/**
 *  Manages the pages actively shown
 *
 * @param limit the number of pokemon shown
 */
const usePagination = (limit: number = 20) => {
  const [offset, setOffset] = useState(0);

  const nextPage = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const previousPage = () => {
    setOffset((prevOffset) => Math.max(0, prevOffset - limit));
  };

  const page = Math.floor(offset / limit);

  return { nextPage, previousPage, offset, page };
};

export default usePagination;

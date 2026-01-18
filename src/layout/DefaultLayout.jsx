import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
const DefaultLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (game) => {
    setCompareList((prev) => {
      if (prev.some((g) => g.id === game.id)) return prev;
      if (prev.length === 2) return prev;
      return [...prev, game];
    });
  };

  const removeFromCompare = (id) => {
    setCompareList((prev) => prev.filter((g) => g.id !== id));
  };

  const isInCompare = (id) => {
    return compareList.some((g) => g.id === game.id);
  };

  const addToFavourites = (game) => {
    setFavourites((prev) => {
      const exists = prev.some((g) => g.id === game.id);
      if (exists) return prev;
      return [...prev, game];
    });
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((g) => g.id !== id));
  };

  const isFavourite = (id) => {
    return favourites.some((g) => g.id === id);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <>
      <NavigationBar
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />
      <Outlet
        context={{
          searchTerm,
          category,
          sortOrder,
          favourites,
          addToFavourites,
          removeFromFavourites,
          isFavourite,
          compareList,
          addToCompare,
          removeFromCompare,
          isInCompare,
        }}
      />
    </>
  );
};

export default DefaultLayout;

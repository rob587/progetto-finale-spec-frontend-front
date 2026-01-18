import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
const DefaultLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [favourites, setFavourites] = useState([]);

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
        }}
      />
    </>
  );
};

export default DefaultLayout;

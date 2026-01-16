import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
const DefaultLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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
      <Outlet context={{ searchTerm, category, sortOrder }} />
    </>
  );
};

export default DefaultLayout;

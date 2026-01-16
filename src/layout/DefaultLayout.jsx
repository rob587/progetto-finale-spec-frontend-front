import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
const DefaultLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <NavigationBar onSearch={handleSearch} />
      <Outlet context={{ searchTerm }} />
    </>
  );
};

export default DefaultLayout;

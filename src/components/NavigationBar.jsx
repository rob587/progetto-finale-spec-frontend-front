import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = ({ onSearch, onCategoryChange, onSortChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    onCategoryChange(value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    onSortChange(value);
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"favourites"}>
              Preferiti
            </Nav.Link>
            <Nav.Link href="diff">Comparatore</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="me-3"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Form.Select
              aria-label="Categoria"
              value={category}
              onChange={handleCategoryChange}
              className="me-2"
            >
              <option value="">Tutte le categorie</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="rpg">RPG</option>
            </Form.Select>
            <Form.Select aria-label="Ordina" onChange={handleSortChange}>
              <option value="">Ordina per</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </Form.Select>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

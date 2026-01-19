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
    <Navbar
      expand="lg"
      className="py-3 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-white"
          style={{
            fontSize: "1.8rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            letterSpacing: "2px",
          }}
        >
          🎮 GAME STORE
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{
            borderColor: "rgba(255,255,255,0.5)",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link
              as={Link}
              to="/"
              className="text-white fw-semibold mx-2 px-3 py-2"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              🏠 Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="favourites"
              className="text-white fw-semibold mx-2 px-3 py-2"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              ❤️ Preferiti
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="diff"
              className="text-white fw-semibold mx-2 px-3 py-2"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              ⚔️ Comparatore
            </Nav.Link>
          </Nav>

          <Form className="d-flex gap-2">
            <Form.Control
              type="search"
              placeholder="🔍 Cerca gioco..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                borderRadius: "20px",
                border: "2px solid rgba(255,255,255,0.3)",
                backgroundColor: "rgba(255,255,255,0.9)",
                padding: "8px 16px",
                fontWeight: "500",
              }}
            />

            <Form.Select
              aria-label="Categoria"
              value={category}
              onChange={handleCategoryChange}
              style={{
                borderRadius: "20px",
                border: "2px solid rgba(255,255,255,0.3)",
                backgroundColor: "rgba(255,255,255,0.9)",
                fontWeight: "500",
                minWidth: "150px",
              }}
            >
              <option value="">📁 Categorie</option>
              <option value="horror">👻 Horror</option>
              <option value="action">💥 Action</option>
              <option value="adventure">🗺️ Adventure</option>
              <option value="rpg">⚔️ RPG</option>
            </Form.Select>

            <Form.Select
              aria-label="Ordina"
              onChange={handleSortChange}
              style={{
                borderRadius: "20px",
                border: "2px solid rgba(255,255,255,0.3)",
                backgroundColor: "rgba(255,255,255,0.9)",
                fontWeight: "500",
                minWidth: "120px",
              }}
            >
              <option value="">🔀 Ordina</option>
              <option value="asc">A → Z</option>
              <option value="desc">Z → A</option>
            </Form.Select>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

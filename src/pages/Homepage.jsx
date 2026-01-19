import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const Homepage = () => {
  const {
    searchTerm,
    category,
    sortOrder,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
    compareList,
    addToCompare,
    removeFromCompare,
    isInCompare,
  } = useOutletContext();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/games`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
        setLoading(false);
      });
  }, []);

  let filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (category) {
    filteredGames = filteredGames.filter(
      (game) => game.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (sortOrder === "asc") {
    filteredGames = [...filteredGames].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  } else if (sortOrder === "desc") {
    filteredGames = [...filteredGames].sort((a, b) =>
      b.title.localeCompare(a.title),
    );
  }

  if (loading) {
    return (
      <Container className="my-4">
        <p>Caricamento...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2
        className="text-center mb-4 fw-bold"
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        🎮 Catalogo Giochi
      </h2>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredGames.map((game) => (
          <Col key={game.id}>
            <Card
              className="h-100 border-0 shadow-lg"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
              }}
            >
              <div
                style={{
                  height: "8px",
                  background:
                    "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "1.4rem",
                    color: "#2d3748",
                    minHeight: "60px",
                  }}
                >
                  {game.title}
                </Card.Title>

                <div className="mb-3">
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#667eea",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    {game.category}
                  </span>
                </div>

                <div className="mt-auto d-flex flex-column gap-2">
                  <Button
                    variant={
                      isInCompare(game.id) ? "warning" : "outline-warning"
                    }
                    className="fw-semibold"
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      border: isInCompare(game.id)
                        ? "none"
                        : "2px solid #ffc107",
                      transition: "all 0.3s ease",
                    }}
                    onClick={async () => {
                      if (isInCompare(game.id)) {
                        removeFromCompare(game.id);
                      } else {
                        try {
                          const response = await fetch(
                            `http://localhost:3001/games/${game.id}`,
                          );
                          const data = await response.json();
                          addToCompare(data.game);
                        } catch (error) {
                          console.error(
                            "Errore nel caricamento dei dettagli:",
                            error,
                          );
                        }
                      }
                    }}
                  >
                    {isInCompare(game.id) ? "✓ Nel confronto" : "⚔️ Confronta"}
                  </Button>

                  <Button
                    variant={isFavourite(game.id) ? "danger" : "outline-danger"}
                    className="fw-semibold"
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      border: isFavourite(game.id)
                        ? "none"
                        : "2px solid #dc3545",
                      transition: "all 0.3s ease",
                    }}
                    onClick={async () => {
                      if (isFavourite(game.id)) {
                        removeFromFavourites(game.id);
                      } else {
                        try {
                          const response = await fetch(
                            `http://localhost:3001/games/${game.id}`,
                          );
                          const data = await response.json();
                          addToFavourites(data.game);
                        } catch (error) {
                          console.error(
                            "Errore nel caricamento dei dettagli:",
                            error,
                          );
                        }
                      }
                    }}
                  >
                    {isFavourite(game.id) ? "❤️ Nei preferiti" : "🤍 Aggiungi"}
                  </Button>

                  <Button
                    as={Link}
                    to={`/games/${game.id}`}
                    className="fw-bold"
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                      color: "white",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow =
                        "0 5px 15px rgba(102, 126, 234, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    🎯 Vai al dettaglio
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homepage;

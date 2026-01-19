import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const DetailGame = () => {
  const {
    addToFavourites,
    removeFromFavourites,
    isFavourite,
    addToCompare,
    removeFromCompare,
    isInCompare,
  } = useOutletContext();

  const { id } = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3001/games/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gioco non trovato");
        }
        return response.json();
      })
      .then((data) => {
        setGame(data.game);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (error) {
    return (
      <Container className="my-4">
        <p>Gioco non trovato</p>
        <Button onClick={() => navigate("/")}>Torna alla home</Button>
      </Container>
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
      <Button
        variant="outline-secondary"
        onClick={() => navigate(-1)}
        className="mb-4 fw-semibold"
        style={{
          borderRadius: "10px",
          padding: "10px 20px",
          border: "2px solid #6c757d",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#6c757d";
          e.target.style.color = "white";
          e.target.style.transform = "translateX(-5px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#6c757d";
          e.target.style.transform = "translateX(0)";
        }}
      >
        ← Indietro
      </Button>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <div
            className="p-4 shadow-lg"
            style={{
              borderRadius: "20px",
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              border: "3px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <h1
              className="mb-4 fw-bold text-center"
              style={{
                fontSize: "2.5rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {game.title}
            </h1>

            <div className="mb-4 text-center">
              <Badge
                className="me-2"
                style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                📁 {game.category}
              </Badge>
              <Badge
                style={{
                  backgroundColor: "#764ba2",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                🎮 {game.genre}
              </Badge>
            </div>

            <Card
              className="mb-4 border-0 shadow"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "6px",
                  background:
                    "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                }}
              />
              <Card.Body className="p-4">
                <Row className="g-4">
                  <Col md={6}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#f8f9fa",
                        borderRadius: "10px",
                        borderLeft: "4px solid #667eea",
                      }}
                    >
                      <p className="mb-2">
                        <strong style={{ color: "#667eea" }}>
                          🖥️ Piattaforma:
                        </strong>
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "1.1rem", color: "#2d3748" }}
                      >
                        {game.platform}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#f8f9fa",
                        borderRadius: "10px",
                        borderLeft: "4px solid #764ba2",
                      }}
                    >
                      <p className="mb-2">
                        <strong style={{ color: "#764ba2" }}>
                          📅 Anno di uscita:
                        </strong>
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "1.1rem", color: "#2d3748" }}
                      >
                        {game.releaseYear}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#f8f9fa",
                        borderRadius: "10px",
                        borderLeft: "4px solid #667eea",
                      }}
                    >
                      <p className="mb-2">
                        <strong style={{ color: "#667eea" }}>🎯 Genere:</strong>
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "1.1rem", color: "#2d3748" }}
                      >
                        {game.genre}
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#f8f9fa",
                        borderRadius: "10px",
                        borderLeft: "4px solid #764ba2",
                      }}
                    >
                      <p className="mb-2">
                        <strong style={{ color: "#764ba2" }}>
                          📂 Categoria:
                        </strong>
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "1.1rem", color: "#2d3748" }}
                      >
                        {game.category}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div
              className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 p-4"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "15px",
              }}
            >
              <h2
                className="mb-0 fw-bold"
                style={{
                  fontSize: "2.5rem",
                  background:
                    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                💰 €{game.price}
              </h2>

              <div className="d-flex flex-column flex-md-row gap-3">
                <Button
                  size="lg"
                  variant={isInCompare(game.id) ? "warning" : "outline-warning"}
                  className="fw-semibold"
                  style={{
                    borderRadius: "12px",
                    padding: "12px 24px",
                    border: isInCompare(game.id) ? "none" : "2px solid #ffc107",
                    transition: "all 0.3s ease",
                    minWidth: "200px",
                  }}
                  onClick={() => {
                    isInCompare(game.id)
                      ? removeFromCompare(game.id)
                      : addToCompare(game);
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {isInCompare(game.id)
                    ? "✓ Nel confronto"
                    : "⚔️ Aggiungi al confronto"}
                </Button>

                <Button
                  variant={isFavourite(game.id) ? "danger" : "outline-danger"}
                  size="lg"
                  className="fw-semibold"
                  style={{
                    borderRadius: "12px",
                    padding: "12px 24px",
                    border: isFavourite(game.id) ? "none" : "2px solid #dc3545",
                    transition: "all 0.3s ease",
                    minWidth: "200px",
                  }}
                  onClick={() =>
                    isFavourite(game.id)
                      ? removeFromFavourites(game.id)
                      : addToFavourites(game)
                  }
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {isFavourite(game.id)
                    ? "❤️ Nei preferiti"
                    : "🤍 Aggiungi ai preferiti"}
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailGame;

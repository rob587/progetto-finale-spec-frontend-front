import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const DetailGame = () => {
  const { addToFavourites, removeFromFavourites, isFavourite } =
    useOutletContext();

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
        className="mb-4"
      >
        ← Indietro
      </Button>

      <Row>
        <Col md={8}>
          <h1 className="mb-3">{game.title}</h1>

          <div className="mb-3">
            <Badge bg="primary" className="me-2">
              {game.category}
            </Badge>
            <Badge bg="secondary">{game.genre}</Badge>
          </div>

          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <p>
                    <strong>Piattaforma:</strong> {game.platform}
                  </p>
                  <p>
                    <strong>Anno di uscita:</strong> {game.releaseYear}
                  </p>
                </Col>

                <Col md={6}>
                  <p>
                    <strong>Genere:</strong> {game.genre}
                  </p>
                  <p>
                    <strong>Categoria:</strong> {game.category}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="d-flex align-items-center justify-content-between">
            <h2 className="text-success mb-0">€{game.price}</h2>

            <Button
              variant={isFavourite(game.id) ? "danger" : "outline-primary"}
              size="lg"
              onClick={() =>
                isFavourite(game.id)
                  ? removeFromFavourites(game.id)
                  : addToFavourites(game)
              }
            >
              {isFavourite(game.id)
                ? "Rimuovi dai preferiti ❤️"
                : "Aggiungi ai preferiti ❤️"}
            </Button>

            <Button variant="outline-primary" size="lg">
              ❤️ Aggiungi ai preferiti
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailGame;

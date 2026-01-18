import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Favourites = () => {
  const { favourites, removeFromFavourites } = useOutletContext();

  if (favourites.length === 0) {
    return (
      <Container className="my-4">
        <h2>Nessun Preferito</h2>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Row>
        {favourites.map((game) => (
          <Col md={4} key={game.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.category}</Card.Text>
                <Button
                  className="me-2"
                  variant="danger"
                  onClick={() => removeFromFavourites(game.id)}
                >
                  Rimuovi ❤️
                </Button>
                <Button as={Link} to={`/games/${game.id}`}>
                  Vai al dettaglio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favourites;

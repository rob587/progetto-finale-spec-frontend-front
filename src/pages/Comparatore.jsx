import React from "react";
import { useOutletContext } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Comparatore = () => {
  const { compareList, removeFromCompare } = useOutletContext();

  console.log("CompareList completo:", compareList);
  console.log("CompareList length:", compareList.length);

  if (compareList.length < 2) {
    return (
      <Container className="my-4">
        <h3>Seleziona 2 giochi per confrontarli</h3>
        {compareList.length === 1 && (
          <p>
            Hai selezionato: {compareList[0].title}. Aggiungi un altro gioco!
          </p>
        )}
      </Container>
    );
  }

  const [gameA, gameB] = compareList;

  console.log("GameA:", gameA);
  console.log("GameB:", gameB);
  console.log("GameA.platform:", gameA.platform);
  console.log("GameB.platform:", gameB.platform);

  return (
    <Container className="my-4">
      <h2 className="mb-4">Confronto Giochi</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{gameA.title}</h4>
              <p>
                <strong>Piattaforma:</strong> {gameA.platform}
              </p>
              <p>
                <strong>Genere:</strong> {gameA.genre}
              </p>
              <p>
                <strong>Categoria:</strong> {gameA.category}
              </p>
              <p>
                <strong>Anno:</strong> {gameA.releaseYear}
              </p>
              <p>
                <strong>Prezzo:</strong> €{gameA.price}
              </p>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCompare(gameA.id)}
              >
                Rimuovi
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{gameB.title}</h4>
              <p>
                <strong>Piattaforma:</strong> {gameB.platform}
              </p>
              <p>
                <strong>Genere:</strong> {gameB.genre}
              </p>
              <p>
                <strong>Categoria:</strong> {gameB.category}
              </p>
              <p>
                <strong>Anno:</strong> {gameB.releaseYear}
              </p>
              <p>
                <strong>Prezzo:</strong> €{gameB.price}
              </p>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCompare(gameB.id)}
              >
                Rimuovi
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Comparatore;

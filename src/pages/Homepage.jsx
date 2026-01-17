import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { searchTerm, category, sortOrder } = useOutletContext();
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
    <Container className="my-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredGames.map((game) => (
          <Col key={game.id}>
            <Card>
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.category}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button as={Link} to={`/games/${game.id}`}>
                  Vai al dettaglio
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homepage;

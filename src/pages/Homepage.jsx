import { Card, Container, Row, Col, Button } from "react-bootstrap";

const Homepage = () => {
  return (
    <Container className="my-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {[...Array(15)].map((_, i) => (
          <Col key={i}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title {i + 1}</Card.Title>
                <Card.Text>
                  This is card number {i + 1} with some supporting text below as
                  a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button href="game/:id">Link</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homepage;

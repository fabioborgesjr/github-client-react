import { Card, Container } from "react-bootstrap";

function CardHeaderAndFooter({ header, footer, children, style }: any) {
  return (
    <Container style={style}>
      <Card
        className="text-center"
        style={{ backgroundColor: "inherit", width: "100%" }}
      >
        {header && <Card.Header>{header}</Card.Header>}
        <Card.Body style={{ width: "100%", color: "#fff" }}>
          {children || <></>}
        </Card.Body>
        {footer && <Card.Footer className="text-muted">{footer}</Card.Footer>}
      </Card>
    </Container>
  );
}

export default CardHeaderAndFooter;

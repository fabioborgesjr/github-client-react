import { Card, Container } from "react-bootstrap";

interface IProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

function CardHeaderAndFooter({
  header,
  footer,
  children,
  style,
  className,
}: IProps) {
  return (
    <Container style={style}>
      <Card className={className}>
        {header && <Card.Header>{header}</Card.Header>}
        <Card.Body>{children || <></>}</Card.Body>
        {footer && <Card.Footer className="text-muted">{footer}</Card.Footer>}
      </Card>
    </Container>
  );
}

export default CardHeaderAndFooter;

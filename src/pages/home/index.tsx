import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardHeaderAndFooter from "components/card";
import gitPocketLogo from "assets/gitpocket-logo.png";
import SearchUser from "./frames/searchUser";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import SearchRepositories from "./frames/searchRepositories";
import "./styles.scss";

const Home: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/user/${username}`);
    }
  };

  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row style={{ marginBottom: "2rem" }}>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={gitPocketLogo}
            alt="gitPocketLogo"
            style={{ maxWidth: 250 }}
          />
        </Col>
      </Row>

      <CardHeaderAndFooter
        className="container card"
        style={{
          maxWidth: "50vw",
          backgroundColor: "rgb(142,162,64,0.5)",
          border: "none",
          padding: 0,
          minHeight: "calc(50vh + 16px)",
        }}
      >
        <Carousel
          style={{
            width: "100%",
          }}
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
        >
          <Carousel.Item id="search-user-frame">
            <SearchUser />
          </Carousel.Item>
          <Carousel.Item id="search-repo-frame">
            <SearchRepositories />
          </Carousel.Item>
        </Carousel>
      </CardHeaderAndFooter>
    </Container>
  );
};

export { Home };

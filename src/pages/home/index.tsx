import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardHeaderAndFooter from "@/components/card";
import gitPocketLogo from "@/assets/gitpocket-logo.png";
import SearchUser from "./frames/searchUser";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import SearchRepositories from "./frames/searchRepositories";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.scss";

const Home: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const navigate = useNavigate();

  const handleSearch = useCallback((category: string, search: string) => {
    navigate(`/${category}?q=${encodeURIComponent(search)}`);
  }, []);

  const handleSelect = useCallback((selectedIndex: number) => {
    setIndex(selectedIndex);
  }, []);

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

      <CardHeaderAndFooter className="container card home-card">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
          prevIcon={<BsArrowLeftCircleFill size={"3rem"} fill="#000" />}
          nextIcon={<BsArrowRightCircleFill size={"3rem"} fill="#000" />}
        >
          <Carousel.Item id="search-user-frame">
            <SearchUser onSearch={handleSearch} />
          </Carousel.Item>
          <Carousel.Item id="search-repo-frame">
            <SearchRepositories onSearch={handleSearch} />
          </Carousel.Item>
        </Carousel>
      </CardHeaderAndFooter>
    </Container>
  );
};

export { Home };

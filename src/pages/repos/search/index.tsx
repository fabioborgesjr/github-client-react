import React, { ChangeEvent, useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardHeaderAndFooter from "@/components/card";
import gitPocketLogo from "@/assets/gitpocket-logo.png";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import Input from "@/components/input";
import { useRepositories } from "@/hooks/useRepositories";
import { sortByStars } from "@/utils/sortUtils";

import "./styles.scss";

const RepoSearch: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("q");
  const [value, setValue] = useState(decodeURI(initialSearch || "") || "");
  const { repositories, loading: repoLoading } = useRepositories("", value);
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    const formattedSearch = value?.trim() || "";

    if (formattedSearch.length) {
      navigate(`/repos/${encodeURIComponent(formattedSearch)}`);
    }
  }, [value]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <CardHeaderAndFooter
      className="container card search-card"
      header={
        <>
          <img
            src={gitPocketLogo}
            alt="gitPocketLogo"
            style={{ maxWidth: "8em" }}
          />
          <Input
            id="repos-search"
            value={value}
            onChange={handleChange}
            placeholder="Busque pelo seu repositório favorito..."
          />
          <Button id="repo-search-button" onClick={handleSearch}>
            Buscar agora!
          </Button>
        </>
      }
    >
      {!repoLoading && repositories ? (
        <Container>
          {sortByStars(repositories).map((repo, index) => (
            <Row key={`${repo.id}-${index}`} className="repo-item">
              <Col xs={12} md={8} id="repo-data">
                <h2>{repo.name || repo.full_name}</h2>
                <ListGroup>
                  <ListGroup.Item>
                    <strong>Descrição:</strong> {repo.description}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Estrelas:</strong> {repo.stargazers_count}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Linguagem:</strong> {repo.language}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Link do Repositório:</strong>{" "}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.html_url}
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          ))}
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </CardHeaderAndFooter>
  );
};

export { RepoSearch };

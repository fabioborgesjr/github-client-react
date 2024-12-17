import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardHeaderAndFooter from "@/components/card";
import gitPocketLogo from "@/assets/gitpocket-logo.png";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useRepositories } from "@/hooks/useRepositories";

import "./styles.scss";
import { sortByStars } from "@/utils/sortUtils";

const ReposList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username") || "";
  const {
    repositories,
    loading: reposLoading,
    error: reposError,
  } = useRepositories(username);
  const navigate = useNavigate();

  return (
    <CardHeaderAndFooter
      className="container card repos-list"
      header={
        <>
          <img
            src={gitPocketLogo}
            alt="gitPocketLogo"
            style={{ maxWidth: "8em" }}
          />
          <h3>Lista de repositórios de {username}</h3>
        </>
      }
    >
      {!reposLoading && repositories ? (
        <Container>
          {sortByStars(repositories).map((repo, index) => (
            <Row key={`${repo.id}-${index}`} className="repo-item">
              <Col xs={12} md={8} id="repo-data">
                <h2>{repo.name || repo.full_name}</h2>
                <ListGroup>
                  <ListGroup.Item>
                    <strong>Proprietário:</strong> {repo.owner.login}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Descrição:</strong> {repo.description}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Estrelas:</strong> {repo.stargazers_count}
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

export { ReposList };

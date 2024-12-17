import React, { ChangeEvent, useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardHeaderAndFooter from "@/components/card";
import gitPocketLogo from "@/assets/gitpocket-logo.png";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import "./styles.scss";
import Input from "@/components/input";
import { useGithub } from "@/hooks/useGithub";

const UserSearchList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("q");
  const [value, setValue] = useState(initialSearch || "");
  const {
    user,
    loading: userLoading,
    error: userError,
  } = useGithub(value, 300);
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    const formattedSearch = value?.trim() || "";

    if (formattedSearch.length) {
      navigate(`/users?search=${encodeURIComponent(formattedSearch)}`);
    }
  }, [value]);

  const handleSeeRepos = useCallback(() => {
    if (user?.login)
      navigate(`/repos?username=${encodeURIComponent(user.login)}`);
  }, [user?.login]);

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
            id="users-search"
            value={value}
            onChange={handleChange}
            placeholder="Busque pelo seu usuário favorito..."
          />
          <Button id="user-search-button" onClick={handleSearch}>
            Buscar agora!
          </Button>
        </>
      }
    >
      {!userLoading && user ? (
        <Container className="mt-4">
          <Row className="align-items-center">
            <Col xs={12} md={4} className="text-center">
              <Image
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                roundedCircle
                fluid
              />
            </Col>

            <Col xs={12} md={8} id="user-data">
              <h2>{user.name || user.login}</h2>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Seguidores:</strong> {user.followers}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Seguindo:</strong> {user.following}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> {user.email || "Não encontrado"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Bio:</strong> {user.bio || "Não encontrado"}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col xs={12} md={4} className="text-center">
              <Button id="see-user-repos" onClick={handleSeeRepos}>
                Ver Repositórios
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </CardHeaderAndFooter>
  );
};

export { UserSearchList };

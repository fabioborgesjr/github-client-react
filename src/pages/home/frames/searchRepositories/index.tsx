import React, { ChangeEvent, useCallback, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import BuscaBackground from "assets/busca-background.png";
import "./styles.scss";
import Input from "components/input";

const SearchRepositories = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <>
      <img src={BuscaBackground} alt="Background" />
      <Carousel.Caption>
        <h3>Busque por um repositório no GitHub</h3>
        <Input
          value={value}
          onChange={handleChange}
          id="repo-home-search"
          placeholder="Digite o nome do repositório..."
        />
        <Button id="repo-home-search-button">Buscar agora!</Button>
      </Carousel.Caption>
    </>
  );
};

export default SearchRepositories;

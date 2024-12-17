import React, { ChangeEvent, useCallback, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import BuscaBackground from "assets/busca-repo-background.png";
import "./styles.scss";
import Input from "components/input";

const SearchUser = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <>
      <img src={BuscaBackground} alt="Background" />
      <Carousel.Caption>
        <h3>Busque pelo seu usuário favorito</h3>
        <Input
          value={value}
          onChange={handleChange}
          id="user-home-search"
          placeholder="Digite o nome do usuário..."
        />
        <Button id="user-home-search-button">Buscar agora!</Button>
      </Carousel.Caption>
    </>
  );
};

export default SearchUser;

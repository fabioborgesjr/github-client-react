import React, { ChangeEvent, useCallback, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import BuscaBackground from "@/assets/busca-repo-background.png";
import Input from "@/components/input";
import "./styles.scss";

interface IProps {
  onSearch: (category: string, search: string) => void;
}

const SearchUser = ({ onSearch }: IProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    const formattedSearch = value?.trim() || "";

    if (formattedSearch.length) {
      onSearch("users", formattedSearch);
    }
  }, [value]);

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
        <Button id="user-home-search-button" onClick={handleSearch}>
          Buscar agora!
        </Button>
      </Carousel.Caption>
    </>
  );
};

export default SearchUser;

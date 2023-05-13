import React from 'react';
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchData } from "../../data/Data";
import styleCharacters from '../Characters/Characters.module.css'

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  

    useEffect(() => {
    const fetchCharacters = async () => {
      const results = await fetchData();
      setCharacters(results);
    };
    fetchCharacters();
  }, []);  

  return (
    <>
    <div className={styleCharacters.container}>
      <h1>Characters</h1>
      <SearchBar onSearch={() => window.alert()} />
      <Cards characters={characters} />
      </div>
    </>
  );
}
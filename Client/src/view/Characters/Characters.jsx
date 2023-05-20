import React, { useEffect, useState } from 'react';
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchData } from "../../data/Data";
import styleCharacters from '../Characters/Characters.module.css'

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const results = await fetchData();
      setCharacters(results);
    };
    fetchCharacters();
  }, []);

  const handleSearch = async () => {
   
    if (searchName) {
      const url = `https://ryokumaxell-symmetrical-winner-r79gpxvqj64hxrwg-3001.preview.app.github.dev/api/character/`;
      // const url = `https://rickandmortyapi.com/api/character/?name=${searchName}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results)
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className={styleCharacters.container}>
        <h1>Characters</h1>
        <SearchBar
          onSearch={handleSearch}
          setSearchName={setSearchName}
        />
        <Cards characters={characters} />
      </div>
    </>
  );
}

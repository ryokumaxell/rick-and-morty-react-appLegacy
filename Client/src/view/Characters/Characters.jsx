//data character
import { fetchData,fetchDataId } from "../../data/Data";

//Common use
import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import styleCharacters from "../Characters/Characters.module.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");

  
  useEffect(() => {
    
      fetchData()
        .then(data => {
          setCharacters(data.results);
        })
        .catch(error => {
          console.log(error);
        });
   
  
        fetchData();
  }, []);
  

  // call of character by name
  const handleSearch = () => {
    
   

    fetchDataId(searchName)
    .then(data => {
      setCharacters(data); // Imprime el resultado dentro de then()
    })
    .catch(error => {
      console.log(error); // Maneja el error si ocurre
    });
  
    
  };
  

  return (
    <>
      <div className={styleCharacters.container}>
        <h1>Characters</h1>
        <SearchBar onSearch={handleSearch} setSearchName={setSearchName} />
        <Cards chars={characters} />
      </div>
    </>
  );
}

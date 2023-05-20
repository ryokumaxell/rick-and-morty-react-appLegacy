import styleSearch from '../SearchBar/SearchBar.module.css';

export default function SearchBar(props) {
  const { onSearch, setSearchName } = props;

  const handleInputChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div className={styleSearch.container}>
      <input type="search" onChange={handleInputChange} placeholder='Ingrese un nombre' />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
}

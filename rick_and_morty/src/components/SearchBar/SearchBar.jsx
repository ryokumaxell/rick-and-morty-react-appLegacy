import styleSearch from '../SearchBar/SearchBar.module.css';
export default function SearchBar(props) {
  const { onSearch } = props;

  return (
    <div className={styleSearch.container}>
      <input type="search" />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
}
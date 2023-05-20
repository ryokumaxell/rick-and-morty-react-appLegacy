import axios from 'axios';

export const fetchData = async () => {
  try {
   // const response = await axios.get("https://rickandmortyapi.com/api/character");
    const response = await axios.get("https://ryokumaxell-symmetrical-winner-r79gpxvqj64hxrwg-3001.preview.app.github.dev/api/character/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
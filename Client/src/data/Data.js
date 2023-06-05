import axios from "axios";

//Peticion hecha con async y await.
export const fetchData = async () => {
  try {
    const response = await axios.get("https://ryokumaxell-symmetrical-winner-r79gpxvqj64hxrwg-3001.preview.app.github.dev/rickandmorty/api/character");
    return response.data;
  } catch (error) {
    throw error;
  }
};


//Peticion hecha con promesas .then y .catch 
export const fetchDataId = (name) => {
  return axios
    .get(
      `https://ryokumaxell-symmetrical-winner-r79gpxvqj64hxrwg-3001.preview.app.github.dev/rickandmorty/api/character/${name}`
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};





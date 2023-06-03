import axios from "axios";

export const fetchData = () => {
  return axios
    .get(
      "https://ryokumaxell-symmetrical-winner-r79gpxvqj64hxrwg-3001.preview.app.github.dev/rickandmorty/api/character"
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

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





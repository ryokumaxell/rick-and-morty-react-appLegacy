export const addToFav = (item) => {
  
  return {
    type: 'ADD_TO_FAV',
    payload: item
  };
};

export const removeFromFav = (item) => {
  return {
    type: 'REMOVE_FROM_FAV',
    payload: item
  };
};


export const loginSuccess = (userData) => ({
  type: 'LOGIN_SUCCESS',
  payload: userData,
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});



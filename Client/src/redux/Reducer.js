const initialState = {
  fav:[],
  isLoggedIn: false,
  userData: null,
};

function rootReducer(state = initialState, { type, payload }) {
  
  switch (type) {
    case 'LOGIN_SUCCESS':
  return {
    ...state,
    isLoggedIn: true,
    userData: payload
  };
  
  case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
      };
      
    case 'ADD_TO_FAV':
      return {
        ...state,
        fav: [...state.fav, payload]
      };
    case 'REMOVE_FROM_FAV':
      const index = state.fav.findIndex(item => item.id === payload.id);
      return {
        ...state,
        fav: [
          ...state.fav.slice(0, index),
          ...state.fav.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}

export default rootReducer;

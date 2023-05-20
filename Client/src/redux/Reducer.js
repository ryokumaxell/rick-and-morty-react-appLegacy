
const initialState = {
  cards: [],
  total: 0
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (!Array.isArray(state.cards)) {
        state.cards = [];
      }
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    case 'REMOVE_FROM_CART':
      const index = state.cards.findIndex(item => item.id === action.payload.id);
      return {
        ...state,
        cards: [
          ...state.cards.slice(0, index),
          ...state.cards.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}

export default Reducer;

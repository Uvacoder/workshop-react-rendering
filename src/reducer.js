export function listReducer(state = [], action) {
  switch (action.type) {
    case "increment":
      const index = state.findIndex(item => item.id === action.id);
      const item = state[index];
      return [
        ...state.slice(0, index),
        { ...item, quantity: item.quantity + 1 },
        ...state.slice(index + 1)
      ];

    default:
      throw new Error(`No action type "${action.type}"`);
  }
}

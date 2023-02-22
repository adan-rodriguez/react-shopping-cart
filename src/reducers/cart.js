import { CART_ACTION_TYPES } from "../constants/CART_ACTION_TYPES";

export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      );

      if (productInCartIndex >= 0) {
        // const newState = structuredClone(state);
        const newState = [...state];
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [...state, { ...actionPayload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      const newState = state.filter((item) => item.id !== actionPayload.id);
      updateLocalStorage(newState);
      return newState;

    case CART_ACTION_TYPES.CLEAR_CART:
      updateLocalStorage([]);
      return [];
  }

  return state;
};

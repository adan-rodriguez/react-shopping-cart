import { useReducer } from "react";
import { CART_ACTION_TYPES } from "../constants/CART_ACTION_TYPES";
import { cartInitialState, cartReducer } from "../reducers/cart";

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product });

  const increaseQuantity = (id) =>
    dispatch({ type: CART_ACTION_TYPES.INCREASE_QUANTITY, payload: id });

  const decreaseQuantity = (id) =>
    dispatch({ type: CART_ACTION_TYPES.DECREASE_QUANTITY, payload: id });

  const removeFromCart = (id) =>
    dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: id });

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

  return {
    state,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };
}

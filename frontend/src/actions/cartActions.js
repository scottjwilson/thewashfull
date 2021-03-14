import { CART_ADD_ITEM } from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/services/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      service: data._id,
      title: data.title,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match }) => {
  //grab ID from url
  const serviceId = match.params.id;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    //if ID exists, add it to the cart
    if (serviceId) {
      dispatch(addToCart(serviceId));
    }
  }, [dispatch, serviceId]);

  return (
    <div className="container mx-auto">
      <h1 className="my-6 text-4xl">Your Order</h1>
      {JSON.stringify(cartItems)}
    </div>
  );
};

export default CartScreen;

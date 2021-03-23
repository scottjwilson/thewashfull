import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");

  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);

      dispatch(updateUserProfile(name, email, password));
    }
  };

  return (
    <div className="bg-white lg:w-8/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Your Profile</h1>
        {message && <Message>{message}</Message>}

        {error && <Message>{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler} className="mt-6">
          <div className="my-5 text-sm">
            <label for="email" className="block text-black">
              Name
            </label>
            <input
              type="text"
              autofocus
              id="name"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-5 text-sm">
            <label for="email" className="block text-black">
              Email
            </label>
            <input
              type="email"
              autofocus
              id="email"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-5 text-sm">
            <label for="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              autofocus
              id="password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-5 text-sm">
            <label for="password" className="block text-black">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Confirm password"
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileScreen;

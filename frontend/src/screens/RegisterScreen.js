import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  // FORM STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  // MESSAGE STATE
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="bg-primary lg:w-6/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="uppercase font-black text-2xl mt-3 text-center">
          Sign Up
        </h1>
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
              placeholder="Name"
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
              placeholder="Email"
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
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <a href="../../pages/auth/forget_password.html hover:text-black">
                Forget Password?
              </a>
            </div>
          </div>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
            Register
          </button>
        </form>

        <p className="mt-12 text-xs text-center font-light text-gray-400">
          {" "}
          Already have an account?{" "}
          <Link to="/login" className="text-black font-medium">
            {" "}
            Sign In{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;

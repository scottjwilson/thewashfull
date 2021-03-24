import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageHero from "../";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="bg-primary lg:w-6/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="uppercase font-black text-2xl mt-3 text-center">
          Login
        </h1>
        {error && <Message>{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler} className="mt-6">
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
              id="password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <a href="../../pages/auth/forget_password.html hover:text-black">
                Forget Password?
              </a>
            </div>
          </div>

          <button className="uppercase font-black block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
            Login
          </button>
        </form>
        {/* <div className="flex md:justify-between justify-center items-center mt-10">
          <div className="bg-gray-300 md:block hidden w-4/12"></div>
          <p className="md:mx-2 text-sm font-light text-gray-400">
            {" "}
            Login With Social{" "}
          </p>
          <div className="bg-gray-300 md:block hidden w-4/12"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-2 mt-7">
          <div>
            <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">
              Facebook
            </button>
          </div>
          <div>
            <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">
              Twitter
            </button>
          </div>
        </div> */}
        <p className="mt-12 text-xs text-center font-light text-gray-400">
          {" "}
          Don't have an account?{" "}
          <Link to="/register" className="text-black font-medium">
            {" "}
            Create One{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
    // <FormContainer>
    //   <h1 className="text-2xl font-bold mb-4">Sign In</h1>
    //   {error && <Message>{error}</Message>}
    //   {loading && <Loader />}
    //   <form className="space-y-6" onSubmit={submitHandler}>
    //     <div>
    //       <label className="block mb-1 text-sm">Email</label>
    //       <input
    //         type="text"
    //         className="w-full bg-gray-100 rounded p-2 text-sm"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label className="block mb-1 text-sm">Password</label>
    //       <input
    //         type="text"
    //         className="w-full bg-gray-100 rounded p-2 text-sm"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     Need an account?{" "}
    //     <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
    //       Register
    //     </Link>
    //     <button
    //       cla
    //       ssName="w-32 bg-blue-500 p-2 rounded text-white font-bold transition duration-500 ease-in-out hover:bg-blue-800 transform"
    //     >
    //       Submit
    //     </button>
    //     {email}
    //     {password}
    //   </form>
    // </FormContainer>
  );
};

export default LoginScreen;

import axiosInstance from "../utils/axios";
import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {LoginData} from '../context/LoginContext';

const Login = () => {
  const userRef = useRef();
  const navigate = useNavigate();
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const { setLoginData } = useContext(LoginData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setEmpId("");
    setPassword("");
    try {
      const loginRes = await axiosInstance.post("/account/weblogin", {
        empId,
        password,
      });
      if (loginRes.status === 200) {
        localStorage.setItem("token", loginRes.data.token);
        setLoginData(loginRes.data);
        navigate("/home");
        setSuccess(true);
      }
      toast.error("Login Successfully");
    } catch (error) {
      console.log("login Error: ", error);
      if (error.response.status === 403) {
        setErrMsg(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [empId, password]);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {errMsg ? (
                <p className="bg-rose-600 text-center p-1 rounded text-white">
                  {errMsg}
                </p>
              ) : (
                <></>
              )}
              {success ? (
                <p className="bg-green-600 text-center p-1 rounded text-white">
                  Login Successfully
                </p>
              ) : (
                <></>
              )}
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login - Daily Sales Report
              </h1>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="empid"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Emp Id
                  </label>
                  <input
                    ref={userRef}
                    onChange={(e) => {
                      setEmpId(e.target.value);
                    }}
                    value={empId}
                    type="text"
                    name="empid"
                    id="empid"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="eg : SS1233"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="eg : ••••••••"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  LogIn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster position="top-center" />
    </>
  );
};

export default Login;

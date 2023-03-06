import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, ToastContentProps } from "react-toastify";
import axios from "axios";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const generateError = (err: string) =>
    toast.error(err, {
      position: "bottom-right",
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/login", {
        ...values,
      });

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else if (data.userType === 'user'){
            localStorage.setItem('token', data.token);
            setShowModal(false);            
            navigate('/')
            window.location.reload();
            } else if (data.userType === 'admin') {
              localStorage.setItem('token', data.token);
              navigate('/admin');
              window.location.reload();
            }
            
        }
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed -inset-x-6 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white px-6 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex">
                  <button
                    className="float-right ml-auto  border-0 p-1  text-xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                    <h6 className="text-xl font-semibold text-blue-100">
                      Please Login to Continue
                    </h6>
                  </div>
                </div>

                <div>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
                  >
                    <div className="mb-4">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="email"
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="mb-6">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******************"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></input>
                      <p className="text-xs italic text-red-500">
                        Please Enter your password.
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="focus:shadow-outline  w-full rounded bg-blue-100 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <ToastContainer />
                  <div className="text-center text-xl font-bold text-blue-100">
                    <h1>OR</h1>
                    <div>
                      <div className="m-3">
                        <button
                          className="focus:shadow-outline w-full rounded border-4 py-2 px-4 font-bold text-black focus:outline-none"
                          type="button"
                        >
                          <i className="fa-brands fa-google"></i>
                          -Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Login;

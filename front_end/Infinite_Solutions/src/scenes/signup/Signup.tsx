import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, ToastContentProps } from "react-toastify";
import axios from "axios";

type Props = {};

const Signup = (props: Props) => {
  const navigate = useNavigate();
  let [showModal, setShowModal] = useState(true);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const generateError = (err: string) =>
    toast.error(err, {
      position: "bottom-right",
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("h  /signup", {
        ...values,
      });
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          alert("success");
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
          <div className="fixed inset-0 -inset-x-6 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none transition delay-500 ease-in focus:outline-none">
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
                  <div className="flex w-full items-center justify-between rounded-t border-b border-solid border-slate-200 p-5">
                    <h6 className="text-xl font-semibold text-blue-100">
                      Register Here
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
                        htmlFor="name"
                      >
                        Your Name
                      </label>
                      <input
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="email"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
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
                        name="email"
                        type="text"
                        placeholder="email"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="******************"
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
                        Confirm Password
                      </label>
                      <input
                        className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        name="confirmPassword"
                        type="password"
                        placeholder="******************"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="focus:shadow-outline  w-full rounded bg-blue-100 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        type="submit"
                      >
                        Signup
                      </button>
                    </div>
                  </form>
                  <ToastContainer />
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

export default Signup;

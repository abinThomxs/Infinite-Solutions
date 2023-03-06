import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, ToastContentProps } from "react-toastify";
import axios from "axios";

type Props = {};

const AddService = (props: Props) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [values, setValues] = useState({
    name: '',
    subName: '',
    description: '',
    rate: '',
    image: '',
    consultants: [],
  });

  const generateError = (err: string) =>
    toast.error(err, {
      position: "bottom-right",
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/admin/addService", {
        ...values,
      });

      if (data) {
        if (data.errors) {
          const { name, subName, description, } = data.errors;
          if (name) generateError(name);
          else if (subName) generateError(subName);
          else if (description) generateError(description);
          setShowModal(false);
        }
      } 
    }catch (err) {
        console.error(err);
    }
  return (
    <div>
      {showModal ? (
        
          <><div className="fixed -inset-x-6 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
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
                                      Add New Service
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
                                          Service Name
                                      </label>
                                      <input
                                          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                                          id="email"
                                          type="text"
                                          name="name"
                                          placeholder="Service Name"
                                          onChange={(e) => setValues({
                                              ...values,
                                              [e.target.name]: e.target.value,
                                          })}
                                      ></input>
                                  </div>
                                  <div className="mb-6">
                                      <label
                                          className="mb-2 block text-sm font-bold text-gray-700"
                                          htmlFor="subName"
                                      >
                                          Service Level
                                      </label>
                                      <input
                                          className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                                          id="email"
                                          type="text"
                                          name="subName"
                                          placeholder="Service Level"
                                          onChange={(e) => setValues({
                                              ...values,
                                              [e.target.name]: e.target.value,
                                          })}
                                      ></input>
                                      <input
                                          className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                                          id="email"
                                          type="text"
                                          name="description"
                                          placeholder="Description"
                                          onChange={(e) => setValues({
                                              ...values,
                                              [e.target.name]: e.target.value,
                                          })}
                                      ></input>
                                      <input
                                          className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                                          id="email"
                                          type="number"
                                          name="rate"
                                          placeholder="Rate"
                                          onChange={(e) => setValues({
                                              ...values,
                                              [e.target.name]: e.target.value,
                                          })}
                                      ></input>

                                  </div>
                                  <div className="flex items-center justify-between">
                                      <button
                                          type="submit"
                                          className="focus:shadow-outline  w-full rounded bg-blue-100 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                      >
                                          Submit
                                      </button>
                                  </div>
                              </form>
                              <ToastContainer />

                          </div>
                      </div>
                  </div>
              </div><div className="fixed inset-0 z-40 bg-black opacity-25"></div></>
        
      ) : ''}
    </div>
  );
};
};

export default AddService;

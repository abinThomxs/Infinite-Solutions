import React, { useState } from "react";

type Props = {};

const Signup = (props: Props) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className="relative inset-0 z-50 flex items-center -inset-x-6 justify-center overflow-y-auto overflow-x-hidden outline-none transition delay-500 ease-in focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col px-6 rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
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
                      Please Login Continue
                    </h6>
                  </div>
                </div>

                <div>
                  <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
                    <div className="mb-4">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        for="name"
                      >
                        Your Name
                      </label>
                      <input
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="email"
                        type="text"
                        placeholder="Your Name"
                      ></input>
                    </div>
                    <div className="mb-4">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        for="email"
                      >
                        Email Address
                      </label>
                      <input
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="email"
                        type="text"
                        placeholder="email"
                      ></input>
                    </div>
                    <div className="">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        type="password"
                        placeholder="******************"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        for="password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        type="password"
                        placeholder="******************"
                      ></input>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="focus:shadow-outline  w-full rounded bg-blue-100 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        type="button"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : (
        null
      )}
    </>
  );
};

export default Signup
import React, { useState } from 'react'

type Props = {}

const Login = (props: Props) => {
    const [showModal, setShowModal] = useState(true);
  return (
    <>
    {showModal ? (
        <><div className="justify-center items-center flex overflow-x-hidden overflow-y-auto relative -inset-x-6 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg px-6 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className='flex'>
                              <button
                                  className="p-1 ml-auto  border-0 text-black  float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                              >
                                  <i className="fa-solid fa-xmark"></i>
                              </button>
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h6 className="text-xl font-semibold text-blue-100">
                                      Please Login to Continue
                                  </h6>
                              </div>

                          </div>

                         
                          <div>
                              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                          Email Address
                                      </label>
                                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"></input>
                                  </div>
                                  <div className="mb-6">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                          Password
                                      </label>
                                      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                                      <p className="text-red-500 text-xs italic">Please Enter your password.</p>
                                  </div>
                                  <div className="flex items-center justify-between">
                                      <button className="bg-blue-100  hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                          Continue
                                      </button>
                                  </div>
                              </form>
                              <div className='text-xl text-center font-bold text-blue-100'>
                                  <h1>OR</h1>
                                  <div>
                                      <div className="m-3">
                                          <button className="border-4 w-full text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                              <i className="fa-brands fa-google"></i>
                                              -Continue
                                          </button>
                                      </div>
                                  </div>
                              </div>

                          </div>

                      </div>
                  </div>
              </div><div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>
    ): ''}
  </>
  )
}

export default Login;
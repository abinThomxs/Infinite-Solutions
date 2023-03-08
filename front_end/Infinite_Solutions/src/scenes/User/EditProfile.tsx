import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

interface User {
  _id: string;
  name: string;
  email: string;
  serviceNo: number;
  reviewNo: number;
  location: string;
  isBlocked: boolean;
  password: string;
}

const EditProfile = (props: Props) => {
  const [user,setUser] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios.post("http://localhost:4000/profile", { userId }).then((response) => {
      const userData = response.data;
      setUser(userData);  
      console.log(user);
      
    });
  }, []);

  const handleSubmit = async (e: User) => {
    try{
      const { data } = await axios.post('http://localhost:4000/editProfile', {user});
      if (data.errors) {
        console.log(data.errors)
      } else {
        alert('success');
        navigate('/profile')
      }
    } catch(err) {
      console.log(err);
  } 
    
  }
  return (
    <>
    {user && 
      <><div className="flex w-full justify-center border-2 px-4 py-6 text-white bg-gradient-to-r from-blue-100 to-slate-900 shadow-xl">
        <div
                    
                    className="mb-4 rounded w-4/5 bg-white px-6 pt-6 pb-8 shadow-md"
                  >
                    <div className='text-blue-100 flex justify-center text-3xl mb-6'>
                      Edit Profile
                    </div>
                    <div className="mb-4">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="name"
                      >
                        Your Name
                      </label>
                      <input
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="name"
                        name="name"
                        type="text"
                        value={user.name}
                        placeholder="Your Name"
                        onChange={(e: any) =>
                          setUser({
                            ...user,
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
                        value={user.email}
                        placeholder="email"
                        onChange={(e) =>
                          setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="mb-4">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Location
                      </label>
                      <input
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="location"
                        name="location"
                        type="text"
                        value={user.location}
                        placeholder="Location"
                        onChange={(e) =>
                          setUser({
                            ...user,
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
                        New Password
                      </label>
                      <input
                        className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        name="newPassword"
                        type="password"
                        placeholder="******************"
                        onChange={(e) =>
                          setUser({
                            ...user,
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
                          setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="focus:shadow-outline  w-full rounded bg-blue-100 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        type="submit"
                        onClick={(e: any) => handleSubmit(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
        </div></>
}
    </>
  )
}

export default EditProfile;
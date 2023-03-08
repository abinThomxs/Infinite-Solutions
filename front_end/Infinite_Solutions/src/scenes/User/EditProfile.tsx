import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

type Props = {};

interface User {
  _id: string;
  name: string;
  email: string;
  serviceNo: number;
  reviewNo: number;
  location: string;
  isBlocked: boolean;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

const EditProfile = (props: Props) => {
  const [user, setUser] = useState<User>();
  const [errorAlert, seterrorAlert] = useState(false);
  const [successAlert, setsuccessAlert] = useState(false);
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
    try {
      if (user?.newPassword === user?.confirmPassword) {
        const { data } = await axios.post("http://localhost:4000/editProfile", {
          user,
        });
        if (data) {
          setsuccessAlert(!successAlert);
          window.location.reload();
        }
      } else {
        seterrorAlert(!errorAlert);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {user && (
        <>
          {errorAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Passwords do not match!
              </Alert>
            </Stack>
          )}
          {successAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
            </Stack>
          )}
          <div className="flex w-full justify-center border-2 bg-gradient-to-r from-blue-100 to-slate-900 px-4 py-6 text-white shadow-xl">
            <div className="mb-4 w-4/5 rounded bg-white px-6 pt-6 pb-8 shadow-md">
              <div className="mb-6 flex justify-center text-3xl text-blue-100">
                Edit Profile
              </div>
              <div className="md:flex md:justify-around">
                <div className="mb-4">
                  <TextField
                    id="outlined-basic"
                    label="User Name"
                    variant="outlined"
                    name="name"
                    value={user.name}
                    onChange={(e: any) =>
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    name="location"
                    value={user.location}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="md:flex md:justify-around">
                <div className="mb-4">
                  <TextField
                    id="outlined-password-input"
                    label="New Password"
                    type="password"
                    name="newPassword"
                    autoComplete="current-password"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-6">
                  <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    autoComplete="current-password"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
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
          </div>
        </>
      )}
    </>
  );
};

export default EditProfile;

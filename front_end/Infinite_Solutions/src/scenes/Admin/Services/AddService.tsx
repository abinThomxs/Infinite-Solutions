import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

type Props = {}

const AddService = (props: Props) => {
  const [service, setservice] = useState({
    serviceName: '',
    subName: '',
    description: '',
    image: '',
    rate: '',
    active: true,
  });
  const [successAlert, setsuccessAlert] = useState(false);
  const [showModal, setshowModal] = useState(true)

  const handleSubmit = async (e: any) => {
    try{
      const { data } = await axios.post('http://localhost:4000/admin/addService', {
        ...service,
      });
      if (data) {
        setsuccessAlert(!successAlert);
      }
    } catch(err) {
      console.error(err)
    }
  }
  return (
    <>
      {showModal && 
        <>
         
          {successAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Successfully added this Service
              </Alert>
            </Stack>
          )}
          <div className="fixed h-fit  inset-0 -inset-x-6 z-10 flex justify-center   px-4 py-6 text-white ">
            <div className="mb-4  rounded bg-white px-6 pt-6 mt-32 border-8 border-blue-100 shadow-2xl">
              <div className="mb-6 flex justify-center text-3xl text-blue-100">
                Add Service
                <button
                    className="float-right ml-auto  border-0 p-1  text-xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={() => setshowModal(false)}
                  >x
                    <i className="fa-solid fa-xmark"></i>
                  </button>
              </div>
              <div className="md:flex md:justify-around">
                <div className="mb-4">
                  <TextField
                    id="outlined-basic"
                    label="Service Name"
                    variant="outlined"
                    name="serviceName"
                    value={service.serviceName}
                    onChange={(e: any) =>
                      setservice({
                        ...service,
                        [e.target.name]: e.target.value})
                    }
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    id="outlined-basic"
                    label="Service Level"
                    variant="outlined"
                    name="subName"
                    value={service.subName}
                    onChange={(e) =>
                      setservice({
                        ...service,
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
                    label="Description"
                    variant="outlined"
                    name="description"
                    value={service.description}
                    onChange={(e) =>
                      setservice({
                        ...service,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    id="outlined-password-input"
                    label="rate"
                    variant="outlined"
                    name="rate"
                    value={service.rate}
                    onChange={(e) =>
                      setservice({
                        ...service,
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
                    label="Image"
                    variant="outlined"
                    name="image"
                    value={service.image}
                    onChange={(e) =>
                      setservice({
                        ...service,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                
                
              </div>

              <div className="flex items-center justify-between mb-6">
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
        }
    </>
  )
}

export default AddService;
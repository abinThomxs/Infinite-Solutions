import axios from "axios";
import React, { useEffect, useState } from "react";
import AddService from "./AddService";

type Props = {};

interface Service {
  _id: string;
  serviceName: string;
  subName: string;
  description: string;
  image: string;
  rate: number;
  active: boolean;
}

const Services = (props: Props) => {
    const [services,setServics] = useState<Service[]>([]);
    const [showAddService, setshowAddService] = useState(false)

    useEffect(()=>{      
      axios.get('http://localhost:4000/admin/services').then((response)=>{
        const serviceData = response.data.serviceData;        
        setServics(serviceData)
      })
    },[services]);

    

  return (
    <div className="px-10">
      <div >
        <h2 className="mb-10 text-center text-2xl font-bold">Service Management</h2>
        <div className="p-6">
          <button className="rounded py-0 bg-blue-100 px-4 font-bold text-white hover:bg-blue-200"
          onClick={() => setshowAddService(!showAddService)}> Add Service</button>
        </div>
        
      </div>

      <div className='absolute inset-y-0 right-0 mt-0'>
          {showAddService ? <AddService /> : ""}
        </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gradient-to-r from-blue-100 to-slate-900  text-xs uppercase text-white ">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sub Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Rate
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <tr className="bg-grey border-b text-blue-100  dark:border-gray-700">
                <td className="whitespace-nowrap px-6 py-4">{service.serviceName}</td>
                <td className="whitespace-nowrap px-6 py-4">{service.subName}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {service.description}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{service.rate}</td>
                <td className="whitespace-nowrap px-6 py-4">{service.image}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {service.active ? (
                    <button className="rounded bg-red-700 px-4 font-bold text-white hover:bg-red-900">
                      de-activate
                    </button>
                  ) : (
                    <button className="rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700">
                      activate
                    </button>
                  )}
                  {/* onClick={()=>userController(user._id)} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}

interface Consultant {
    _id: string;
    name: string;
    email: string;
    serviceNo: number;
    location: string;
    isBlocked: boolean;
    consultant: boolean;
  }

const Consultants = (props: Props) => {
    const [consultants, setconsultants] = useState<Consultant[]>([]);
    
    useEffect(()=>{
        axios.get('http://localhost:4000/admin/consultants').then((response)=>{
          const consultantData = response.data;

          
          setconsultants(consultantData);
        })
      },[consultants]);

      const handleBlock = async (userId: string) => {
        try{
          const { data } = await axios.post('http://localhost:4000/admin/blockConsultant', {userId});        
           localStorage.removeItem('userToken');
           localStorage.removeItem('userId');          
        } catch(err) {
          console.error(err);
        }     
      }
    
  return (
    <div className='px-10'>
    <div className='text-center font-bold text-2xl mb-10'><h2>Consultants Management</h2></div>    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase  bg-gradient-to-r from-blue-100 to-slate-900 ">
            <tr className=''>                
                <th scope="col" className="px-6 py-3">
                    Name
                </th>                
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    No of Services
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Options
                </th>
                
            </tr>
        </thead>
        <tbody>
            {consultants.map((consultant,i)=>(
                <tr className="bg-grey text-blue-100 border-b  dark:border-gray-700">
                
                <td className="px-6 py-4 whitespace-nowrap">
                {consultant.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {consultant.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {consultant.serviceNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {consultant.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {!consultant.isBlocked ? <button  className='bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded'
                onClick={()=>handleBlock(consultant._id)}
                >Block</button> : 
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold  px-4 rounded'
                onClick={()=>handleBlock(consultant._id)}
                >UnBlock</button>}
                
                </td>
                
            </tr>

            ))}
        </tbody>
    </table>
  </div>
</div>
  )
}

export default Consultants;
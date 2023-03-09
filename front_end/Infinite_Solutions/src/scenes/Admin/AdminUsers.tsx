import { Alert, AlertTitle, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
type Props = {}

interface User {
    _id: string;
    name: string;
    email: string;
    serviceNo: number;
    location: string;
    isBlocked: boolean;
    consultant: boolean;
  }

const AdminUsers = (props: Props) => {
    const [users,setUsers] = useState<User[]>([]);
    const [successAlert, setsuccessAlert] = useState(false);

    useEffect(()=>{
      axios.get('http://localhost:4000/admin/users').then((response)=>{
        const userData = response.data;
        setUsers(userData)
      })
    },[users]);

    const handleBlock = async (userId: string) => {
      try{
        const { data } = await axios.post('http://localhost:4000/admin/blockUser', {userId});        
         localStorage.removeItem('userToken');
         localStorage.removeItem('userId');          
      } catch(err) {
        console.error(err);
      }     
    }

    const handleConsultantStatus = async (userId: string) => {
      try{
        const { data } = await axios.post('http://localhost:4000/admin/activateConsultant', {userId});        
                   
      } catch(err) {
        console.error(err);
      }
     
    }
    
  return (
    <div className='px-10'>
    <div className='text-center font-bold text-2xl mb-10'><h2>Users Management</h2></div>    
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
                <th scope="col" className="px-6 py-3">
                    Consultant-Status
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,i)=>(
                <tr className="bg-grey text-blue-100 border-b  dark:border-gray-700">
                
                <td className="px-6 py-4 whitespace-nowrap">
                {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {user.serviceNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {user.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {!user.isBlocked ? <button  className='bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded'
                onClick={()=>handleBlock(user._id)}
                >Block</button> : 
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold  px-4 rounded'
                onClick={()=>handleBlock(user._id)}
                >UnBlock</button>}
                
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {!user.consultant ? <button  className='bg-green-500 hover:bg-green-700  text-white font-bold px-4 rounded'
                onClick={()=>handleConsultantStatus(user._id)}
                >Activate</button> : 
                <button className='bg-red-700 hover:bg-red-900 text-white font-bold  px-4 rounded'
                onClick={()=>handleConsultantStatus(user._id)}
                >De-Activate</button>}
                
                </td>
            </tr>

            ))}
        </tbody>
    </table>
  </div>
</div>
  )
}

export default AdminUsers;
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
  }

const AdminUsers = (props: Props) => {
    const [users,setUsers] = useState<User[]>([]);

    useEffect(()=>{
      axios.get('http://localhost:4000/admin/users').then((response)=>{
        const userData = response.data;
        console.log(response.data)
        setUsers(userData)
      })
    },[]);
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
                {!user.isBlocked ? <button  className='bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded'>Block</button> : <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>UnBlock</button>}
                {/* onClick={()=>userController(user._id)} */}
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
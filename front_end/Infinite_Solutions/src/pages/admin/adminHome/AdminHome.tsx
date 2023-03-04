import AdminSideBar from '@/scenes/Admin/AdminSideBar'
import React from 'react'

type Props = {}

const AdminHome = (props: Props) => {
  return (
    <>
    <div className='z-20'>
       <AdminSideBar></AdminSideBar>
    </div>
    
    </>
  )
}

export default AdminHome;
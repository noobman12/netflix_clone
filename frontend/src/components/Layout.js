import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx"

export const Layout = () => {
  return (
    <div className='bg-black text-white'>
        <div className='navbar flex justify-between items-center h-[50px] mx-[50px]'>
            <div className='menu flex gap-4'>
                <Link to="/">Logo</Link>
                <Link to="/">Home</Link>
                <Link to="/TV_series">TV series</Link>
                <Link to="/movies">Movies</Link>
            </div>
            <div className='flex gap-5'>
                <HiMiniMagnifyingGlass color='white'size="24px"/>
                <FaRegBell color='white' size="24px"/>
                <RxAvatar color='white' size="24px"/>
            </div>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

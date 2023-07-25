import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="h-20 w-full flex flex-row justify-around items-center border-b-[1px] border-gray-200 bg-white">
        <div><IoReorderThreeOutline className='text-2xl text-gray-600'/></div>
        <div className='text-xl font-thin'>Blog</div>
        <div className='flex items-center space-x-4'>
          <div><BsBell className='text-2xl text-gray-600'/></div>
          <div className='h-5 w-5 rounded-full bg-gray-600'></div>
          <div>
            <button className="flex rounded items-center px-4 py-2 border-gray-200 space-x-3 transition hover:border-gray-800 hover:text-gray-800 border">
              <div>Write</div>
              <div>
                <FiEdit/>
              </div>
            </button>
          </div>
        </div>
      </header>
        <div className="grid grid-cols-12"></div>
    </div>
  )

}

export default HomePage

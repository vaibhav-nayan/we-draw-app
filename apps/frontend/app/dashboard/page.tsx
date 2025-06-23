"use client"
import { Rooms } from '@/components/Rooms';
import { BACKEND_URL } from '@repo/common/config';
import axios from 'axios'
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard () {
    const [roomName, setRoomName] = useState('');

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token) redirect('/signin');
        
        // validate token
    })

    const clickHandler = async () =>{
        const response = await axios.post(`${BACKEND_URL}/room/create-room`,{
            name: roomName
        },{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
        console.log(response.data)
    }
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
            <div className="w-lg p-8 bg-gray-50 rounded-2xl flex flex-col gap-4">
                <div className="text-3xl font-bold text-gray-700 text-shadow-xs">
                    Create New Room
                </div>
                <div className="flex flex-col gap-0">
                    <p className="text-gray-600 text-sm text-shadow-xs">Room Name</p>
                    <div className="flex gap-4">
                        <input className="p-2 w-full border text-gray-500 border-gray-300 rounded-md shadow" type="text" placeholder="Enter your room name" onChange={(e)=> setRoomName(e.target.value)} />
                        <button onClick={clickHandler} className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-light px-4 py-2 rounded shadow-md">Create</button>
                    </div>
                </div>
            </div>
            <Rooms/>
        </div>
    )
}


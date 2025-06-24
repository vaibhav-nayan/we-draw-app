"use client"
import { BACKEND_URL } from '@repo/common/config';
import axios from 'axios'
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

async function existingRooms () {
    try {
        const rooms = await axios.get(`${BACKEND_URL}/room/get-rooms`,{
            headers: {
                "Authorization" : localStorage.getItem('token')
            }
        });
        return rooms.data.rooms
    }
    catch (e) {
        console.log(e)
    }
}

async function deleteRoom ({roomId}: {roomId : number}) {
    try {
        console.log(roomId);
        console.log(localStorage.getItem('token'));
        await axios.delete(`${BACKEND_URL}/room/delete-room/${roomId}`,{
            headers: {
                "Authorization" : localStorage.getItem('token')
            }
        });
    }
    catch (e) {
        console.log(e)
    }
}

async function createRoom ({roomName} : {roomName: string}){
    const response = await axios.post(`${BACKEND_URL}/room/create-room`,{
        name: roomName
    },{
        headers : {
            'Authorization' : localStorage.getItem('token')
        }
    })
    return response.data
}

export default function Dashboard () {
    const [roomName, setRoomName] = useState('');
    const [rooms, setRooms] = useState<Array<any>>([]);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token) redirect('/signin');
        
        // validate token
        const fetchRooms = async () => {
            const rooms = await existingRooms();
            setRooms(rooms);
        }
        fetchRooms();
        
    },[])

    
    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-12 px-4 py-12">
            <div className="mt-70 w-full max-w-lg p-8 bg-gray-50 rounded-2xl flex flex-col gap-4">
                <div className="text-3xl font-bold text-gray-700 text-shadow-xs">
                    Create New Room
                </div>
                <div className="flex flex-col gap-0">
                    <p className="text-gray-600 text-sm text-shadow-xs">Room Name</p>
                    <div className="flex gap-4">
                        <input className="p-2 w-full border text-gray-500 border-gray-300 rounded-md shadow" type="text" placeholder="Enter your room name" onChange={(e)=> setRoomName(e.target.value)} />
                        <button onClick={async () => {
                                const newRoom = await createRoom({roomName})
                                setRooms(prev => [...prev, newRoom.room])
                            }} className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-light px-4 py-2 rounded shadow-md hover:cursor-pointer duration-300">Create</button>
                    </div>
                </div>
            </div>
            <div className="mt-70 w-full max-w-6xl p-8 bg-gray-50 rounded-2xl flex flex-col gap-4">
                <div className="text-3xl font-bold text-gray-700 text-shadow-xs">
                    Your Rooms
                </div>
                <div className="flex flex-col gap-0">
                    <div className='grid grid-cols-3'>
                        {
                            rooms.map((room : any) => (
                                <div className='grid-span-1 px-8 mx-2 py-6 border border-gray-200 rounded-xl group hover:bg-gray-200 duration-300 relative shadow-lg drop-shadow-xl' key={room.id} >
                                    <div className="flex gap-1 justify-between">
                                        <div>
                                            <p className="text-gray-700 text-lg group-hover:text-xl duration-300 text-shadow-2xs">{room.slug}</p>
                                            <p className="text-gray-400 text-xs transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95">created: {room.createdAt.split("T")[0]}</p>
                                        </div>
                                        <button 
                                        onClick={() => redirect(`/canvas/${room.id}`)}
                                        className="bg-blue-500 duration-300 hover:bg-blue-600 text-white text-sm font-light 
                                        px-6 py-2 rounded shadow-md hover:cursor-pointer">Join</button>
                                    </div>
                                    <div className='absolute flex flex-col justify-center items-center duration-300 transition-opacity opacity-0 
                                    group-hover:opacity-100 text-xs top-1 left-1 bg-red-400 hover:bg-red-600 text-white rounded-full w-6 h-6
                                    hover:cursor-pointer'
                                    onClick={async() =>{
                                            await deleteRoom({roomId : room.id});
                                            setRooms(prev => prev.filter(x => x.id !== room.id))
                                        }}>
                                        x
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


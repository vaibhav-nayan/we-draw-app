"use client"
import { BACKEND_URL } from '../config';
import axios from 'axios'
import { useEffect, useState } from 'react';

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

export function Rooms () {
    const [rooms, setRooms] = useState<Array<any>>([]);

    function joinRoom () {

    }
    useEffect(() => {
        const fetchRooms = async () => {
            const rooms = await existingRooms();
            setRooms(rooms);
        }
        fetchRooms();
    },[])
    console.log(rooms)
    return (
        <div className="w-5xl h-5xl p-8 bg-gray-50 rounded-2xl flex flex-col gap-4">
            <div className="text-3xl font-bold text-gray-700 text-shadow-xs">
                Your Rooms
            </div>
            <div className="flex flex-col gap-0">
                <div className='grid grid-cols-3'>
                    {
                        rooms.map((room : any) => (
                            <div className='grid-span-1 px-8 mx-2 py-6 border rounded-xl group hover:bg-gray-200 duration-300 relative' key={room.id} >
                                <div className="flex gap-1 justify-between">
                                    <div>
                                        <p className="text-gray-700 text-xl group-hover:text-2xl duration-300 text-shadow-2xs">{room.slug}</p>
                                        <p className="text-gray-400 text-xs transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95">created: {room.createdAt.split("T")[0]}</p>
                                    </div>
                                    <button className="bg-blue-500 duration-300 hover:bg-blue-600 text-white text-sm font-light px-6 py-2 rounded shadow-md hover:cursor-pointer">Join</button>
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
    )
}
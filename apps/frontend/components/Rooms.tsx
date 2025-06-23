"use client"
import { BACKEND_URL } from '@repo/common/config';
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
export function Rooms () {
    const [rooms, setRooms] = useState<Array<any>>([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const rooms = await existingRooms();
            setRooms(rooms);
        }
        fetchRooms();
    },[])
    console.log(rooms)
    return (
        <div className="w-5xl p-8 bg-gray-50 rounded-2xl flex flex-col gap-4">
            <div className="text-3xl font-bold text-gray-700 text-shadow-xs">
                Your Rooms
            </div>
            <div className="flex flex-col gap-0">
                <div className='grid grid-cols-3'>
                    {
                        rooms.map((room : any) => (
                            <div className='grid-span-1 px-4 mx-2 py-2 border rounded-xl' key={room.id} >
                                <div className="flex flex-col gap-1">
                                    <p className="text-gray-700 text-xl text-shadow-2xs">{room.slug}</p>
                                    <p className="text-gray-500 text-xs">{room.createdAt.split("T")[0]}</p>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-light px-4 py-2 rounded shadow-md">Join</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
"use client"

import { useEffect, useState } from "react";
import {WS_URL} from '@repo/common/config'
import { Canvas } from "./Canvas";

export function RoomCanvas ({roomId} : {roomId : string}) {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(()=>{
        const token = localStorage.getItem('token')?.split(" ")[1];
        const ws = new WebSocket(`${WS_URL}?token=${token}`)

        ws.onopen = () =>{
            setSocket(ws);
            ws.send(JSON.stringify({
                type: "join_room",
                roomId: roomId
            }))
        }
    },[])
    
    if(!socket){
        return (
            <div className="flex flex-col justify-center items-center">
                Connecting to server...
            </div>
        )
    }

    return (
        <Canvas roomId={roomId} socket={socket}/>
    )
}
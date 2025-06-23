"use client"
import { use, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState('');

  return (
    <div style={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      height : "100vh",
      width : "100vw",
      gap : "10px"
    }}>
      <input style={{
        padding : '5px'
      }} value={roomId} onChange={(e) =>{
        setRoomId(e.target.value)
      }} type="text" placeholder="Room Name" />

      <button style={{
        padding : '5px'
      }} onClick={() =>{
        router.push(`/room/${roomId}`);
      }}>
        Join Room
      </button>
    </div>
  );
}

"use client"
import { drawInit } from "@/draw";
import { useEffect } from "react";
import { useRef } from "react";

export default function Canvas () {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() =>{
        if(canvasRef.current){
            drawInit(canvasRef.current);
        }
        
    }, [canvasRef])

    return (
        <div className="h-screen bg-neutral-950">
            <canvas ref={canvasRef} width={1920} height={1080}></canvas>
        </div>
    )
}
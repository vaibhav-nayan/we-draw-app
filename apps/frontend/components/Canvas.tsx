"use client"
import { drawInit } from "@/draw";
import useSize from "@/hooks/useSize";
import { useEffect, useRef, useState } from "react";
import { Square, Circle, Minus, MousePointer2 } from "lucide-react";
import { IconWrap } from "./IconWrap";


export function Canvas ({roomId, socket} : {
    roomId : string,
    socket: WebSocket
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const windowSize = useSize();
    const [tool, setTool] = useState('');

    const toolRef = useRef(tool);
    useEffect(() => {
        toolRef.current = tool;
    }, [tool]);

    const getTool = () => toolRef.current;
    useEffect(() =>{
        if(!canvasRef.current) return;
        const canvas = canvasRef.current;

        let cleanup : () => void;
        const setup = async () =>{
            await drawInit(canvas, roomId, socket, getTool).then(fn => {
                cleanup = fn;
            });
        }
        setup();
        
        // better way is to make a class of this, and expose a select Shape function
        return () =>{
            if(cleanup) cleanup();
        }
    }, [canvasRef, windowSize, tool])

    return (
    <div className="relative h-screen bg-neutral-900 overflow-hidden">
        <ToolBar>
            <IconWrap icon={<MousePointer2 size={20}/>} active={tool === 'PTR'} onClick={() => setTool('PTR')}/>
            <IconWrap icon={<Square size={20}/>} active={tool === 'RECT'} onClick={() => setTool('RECT')}/>
            <IconWrap icon={<Circle size={20}/>} active={tool === 'CIRCLE'} onClick={() => setTool('CIRCLE')}/>
            <IconWrap icon={<Minus size={20}/>} active={tool === 'LINE'} onClick={() => setTool('LINE')}/>
        </ToolBar>
        <canvas className="" ref={canvasRef} width={windowSize[0]} height={windowSize[1]}></canvas>
    </div>
    )
}

function ToolBar ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`z-50 absolute top-2 left-1/2 transform -translate-x-1/2 flex 
        justify-center items-center gap-4 bg-neutral-800 rounded-2xl text-md py-2 px-8 text-white
        shadow-2xl shadow-neutral-950 ${className}`}>
            {children}
        </div>
    )
}
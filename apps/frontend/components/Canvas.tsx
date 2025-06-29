"use client"
import { drawInit } from "@/draw";
import useSize from "@/hooks/useSize";
import { useEffect, useRef, useState } from "react";
import { Square, Circle, Minus, MousePointer2, Hand, Pencil, Eraser, Type } from "lucide-react";
import { IconWrap } from "./IconWrap";
import { Game } from "@/draw/Game";

export type ToolType = "PTR" | "RECT" | "CIRCLE" | "LINE" | "SELECT" | "PENCIL" | "ERASE" | "TEXT";

export function Canvas ({roomId, socket} : {
    roomId : string,
    socket: WebSocket
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const windowSize = useSize();
    const [game, setGame] = useState<Game | null>(null);
    const [tool, setTool] = useState<ToolType>('PTR');

    // OLD METHOD
    // const toolRef = useRef(tool);
    // useEffect(() => {
    //     toolRef.current = tool;
    // }, [tool]);

    // const getTool = () => toolRef.current;

    useEffect(() => {
        game?.setTool(tool);
    }, [tool, game])

    useEffect(() =>{
        if(!canvasRef.current) return;
        const canvas = canvasRef.current;

        // OLD METHOD
        // let cleanup : () => void;
        // const setup = async () =>{
        //     await drawInit(canvas, roomId, socket, getTool).then(fn => {
        //         cleanup = fn;
        //     });
        // }
        // setup();
        // return () =>{
        //     if (cleanup) cleanup();
        // }

        const g = new Game(canvas, roomId, socket);
        setGame(g);
        return () =>{
            g.destroy();
        }
    }, [canvasRef, windowSize])

    return (
    <div className="relative h-screen bg-neutral-900 overflow-hidden">
        <ToolBar>
            <IconWrap icon={<MousePointer2 size={20}/>} active={tool === 'SELECT'} onClick={() => setTool('SELECT')}/>
            <IconWrap icon={<Hand size={20}/>} active={tool === 'PTR'} onClick={() => setTool('PTR')}/>
            <IconWrap icon={<Square size={20}/>} active={tool === 'RECT'} onClick={() => setTool('RECT')}/>
            <IconWrap icon={<Circle size={20}/>} active={tool === 'CIRCLE'} onClick={() => setTool('CIRCLE')}/>
            <IconWrap icon={<Minus size={20}/>} active={tool === 'LINE'} onClick={() => setTool('LINE')}/>
            <IconWrap icon={<Type size={20}/>} active={tool === 'TEXT'} onClick={() => setTool('TEXT')}/>
            <IconWrap icon={<Pencil size={20}/>} active={tool === 'PENCIL'} onClick={() => setTool('PENCIL')}/>
            <IconWrap icon={<Eraser size={20}/>} active={tool === 'ERASE'} onClick={() => setTool('ERASE')}/>
        </ToolBar>
        <canvas className={`relative`} ref={canvasRef} width={windowSize[0]} height={windowSize[1]}></canvas>
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
        justify-center items-center gap-4 bg-neutral-800 rounded-2xl text-md py-2 px-8 text-white ${className}`}>
            {children}
        </div>
    )
}
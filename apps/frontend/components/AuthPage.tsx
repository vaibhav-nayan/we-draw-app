"use client"
import { Input } from "@repo/ui/Input";
import { useState } from "react";
import axios from 'axios'
import { BACKEND_URL } from "@repo/common/config";
import {SigninSchema, CreateUserSchema} from '@repo/common/types'
import {redirect} from 'next/navigation'

export const AuthPage = ({isSignIn} : {isSignIn : boolean}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const clickHandler = async () =>{
        if (isSignIn){
            const parsedData = SigninSchema.safeParse({
                email,
                password
            })
            if(!parsedData.success){
                console.log("Validation Error : ", parsedData.error);
                return;
            }
            const response = await axios.post(`${BACKEND_URL}/auth/signin`, {
                email,
                password
            })
            console.log(response.data)
            localStorage.setItem("token" , response.data.jwtToken)
            redirect("/dashboard")
        }
        else {
            const parsedData = CreateUserSchema.safeParse({
                email,
                password,
                name
            })
            if(!parsedData.success){
                console.log("Validation Error : ", parsedData.error);
                return;
            }
            const response = await axios.post(`${BACKEND_URL}/auth/signup`, {
                email,
                password,
                name
            })
            console.log(response)
            redirect('/signin')
        }
    }
            
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex flex-col gap-8 bg-gray-100 p-4 shadow rounded-2xl w-lg h-3xl">
                <div className="flex flex-col gap-1 pt-4">
                    <div className="text-3xl text-gray-900 font-bold text-center text-shadow-xs">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </div>
                    <div className="text-gray-600 text-center text-md font-extralight text-shadow-2xs">
                    {isSignIn ? "Log into your account" : "Create a new account"}
                    </div>
                </div>
                <div className="w-full justify-items-center gap-8">
                    <div className="flex flex-col justify-center gap-2 w-sm">
                        <Input onChange={(e) => setEmail(e.target.value)} label="Email" type="text" placeholder="JohnDoe@email.com" />
                        <Input onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="Enter your password" />
                        {isSignIn ? "" : <Input onChange={(e) => setName(e.target.value)} label="Name" type="text" placeholder="Enter your name" />}
                    </div>
                    <div className="flex flex-col w-sm mt-4 py-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-light px-4 py-2 rounded shadow-md"
                            onClick={clickHandler}
                            >
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
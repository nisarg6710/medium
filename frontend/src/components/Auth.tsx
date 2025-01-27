import { SignupInput } from "@nisarg0176/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"}) => {

    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });
    
   async function sendRequest() {
       try{
        const response = await  axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
       } catch(e) {
        console.log(e);
        alert("Error while signing up");
       }
    }

   
   return <div className="h-screen flex justify-center flex-col">
    {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center">
        <div>
        <div className="px-10">
        <div className="text-3xl font-extrabold ">
            Create an account
        </div>
        <div className="max-w-md text-md text-slate-400 font-normal flex mt-2 pl-2">
            {type === "signin" ? "Don't have an account?" :  "Already have an account?"}
            
            <Link className="pl-1 underline" to={type === "signin" ? "/signup" : "/signin"}>
            {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
           
        </div>
        </div>
        <div className="pt-4">
       

    { type === "signup" ?<LabelledInput label="Name" placeholder="John Wick" onChange={(e) => {
        setPostInputs(c => ({
            ...c,
            name: e.target.value
        }))
    }} /> : null}
    <LabelledInput label="Username" placeholder="random@example.com" onChange={(e) => {
        setPostInputs(c => ({
            ...c,
            username: e.target.value
        }))
    }} />

    <LabelledInput label="Password" type={"password"} placeholder="eXaMpLe123@_#$" onChange={(e) => {
        setPostInputs(c => ({
            ...c,
            password: e.target.value
        }))
    }} />
 
<button onClick={sendRequest} type="button" className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>



                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type? : string;
}

function LabelledInput({ label, placeholder, onChange,type }: LabelledInputType) {
    return <div>
        <div>
            <label className="block mb-2 text-sm text-black text-semibold">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder={placeholder} required />
        </div>
    </div>
}
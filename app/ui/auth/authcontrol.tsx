'use client';

import SignUp from "./signUp";
import { useState } from "react";


export default function Auth() {
    let loggedIN = false;
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignIn = () => {
        setOpen(true);
    };


    const signin = <button className="inline pr-3 mt-10 bg-[#1D5F1B] h-10 w-24 p-1 mr-5 rounded-sm border-[#5BE94F] border hover:bg-[#5BE94F] hover:text-black"
        onClick={handleSignIn}>Signin</button>;
    const logout = <button className="inline pr-3 mt-10 bg-[#78242e] h-10 w-24 p-1 mr-5 rounded-sm border-[#d73c3c] border hover:bg-[#e04848] hover:text-black">Logout</button>;

    
    const [button, setButton] = useState(signin);

    return (
        <>
            {button}
            <SignUp open={open} handleClose={handleClose} />
        </>
    );
}
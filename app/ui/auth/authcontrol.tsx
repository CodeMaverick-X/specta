'use client';

import SignUp from "./sign-up-form";
import LogIN from "./login-form";
import { useState } from "react";
import { Logout } from "@/app/lib/auth-actions";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

export type AuthFormType = 'signup' | 'login'

export default function Auth({ session }: { session: Session | null; }) {

    const [loggedIn, setLoggedIn] = useState(!!session);
    const [open, setOpen] = useState(false);

    console.log(loggedIn, session);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignIn = () => {
        setOpen(true);
    };
    const handleLogOut = () => {
        setLoggedIn(false);
    };



    const signin = <button className="inline pr-3 mt-10 bg-[#1D5F1B] h-10 w-24 p-1 mr-5 rounded-sm border-[#5BE94F] border hover:bg-[#5BE94F] hover:text-black"
        onClick={handleSignIn}>Signin</button>;
    const logout = <form action={Logout}> <button className="inline pr-3 mt-10 bg-[#78242e] h-10 w-24 p-1 mr-5 rounded-sm border-[#d73c3c] border hover:bg-[#e04848] hover:text-black"
        onClick={handleLogOut}>Logout</button> </form>;


    const button = loggedIn ? logout : signin;

    const authFormCheck = useState<AuthFormType>('signup')
    return (
        <>
            {button}
            {/* <SignUp open={open} handleClose={handleClose} /> */}
            {/* {authForm} */}
            <SignUp open={open} handleClose={handleClose} authFormCheck={authFormCheck} />
            <LogIN open={open} handleClose={handleClose} authFormCheck={authFormCheck}/>
        </>
    );
}
'use client';
import Modal from "../modal";
import { Kalam } from "next/font/google";
import { ReactNode, MouseEvent, useState, SetStateAction, Dispatch } from 'react';
import { signUp } from "@/app/lib/auth-actions";
import { useFormState } from "react-dom";
import FormInpute from "./inpute-field";
import { useRef } from "react";
import { AuthFormType } from "./authcontrol";
// import { useSession } from "next-auth/react";
import { date } from "zod";

const kalam = Kalam({
    weight: "300",
    subsets: ['latin'],
    display: 'swap', adjustFontFallback: false
});

// mmebuka means open in harry potter :)
export default function SignUp({ open, handleClose, authFormCheck }: { open: boolean, handleClose: () => void, authFormCheck: [AuthFormType, Dispatch<SetStateAction<AuthFormType>>] }) {
    const [authForm, setAuthForm] = authFormCheck
    if (authForm === 'login') return

    const handleFormChange = () => {
        setAuthForm('login')
    }

    const initialState = { message: '', errors: {} };
    const [state, dispatch] = useFormState(signUp, initialState);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const handleInnerClick = (e: MouseEvent<HTMLFormElement>) => {
        // Prevent the click event from reaching the outer div
        e.stopPropagation();
    };


    return (
        <Modal onClose={handleClose} isOpen={open}>
            <form className="flex flex-row bg-[#0D1533] w-9/12 h-5/6 p-16 rounded-md shadow-black shadow-md justify-between pt-20"
                onClick={handleInnerClick}
                action={dispatch}
            >
                <div>
                    <div className=" text-3xl text-[#5BE94F]">SignUp Lets enlighten the world together!</div>
                    <ul className=" list-disc px-5 pt-16 text-gray-500 text-lg">
                        <li>You'll be able to add devices</li>
                        <li>You'll be able to make expert reviews</li>
                        <li>You'll be able to satisfy your inner geek</li>
                        <li>You'll be a part of the specta comunity</li>
                    </ul>
                </div>
                <div className=" flex flex-col  pr-16  w-2/5 space-y-0">
                    <div className={` text-lg ${kalam.className} text-6xl text-[#5BE94F] self-center pb-14`}>SPECTA</div>

                    <FormInpute name="username" state={state} id={'signup-username'} passRef={null} slug="username"/>
                    <FormInpute name="password" state={state}  id="signup-password" passRef={passwordRef} slug="password"/>
                    <FormInpute name="confirm password" state={state} id="signup-confirm" passRef={passwordRef} slug="confirmPassword"/>
                        {/* TODO: find a way around the usage of ref here */}
                    <div className="flex flex-row justify-between pt-5">

                        <div className=" text-gray-500">aready a part of us? <span onClick={handleFormChange} className="text-[#5BE94F] hover:underline hover:cursor-pointer">login</span> </div>
                        <button className="inline text-gray-300 my-3 bg-[#1D5F1B] h-10 w-24 p-1 rounded-sm border-[#5BE94F] border hover:bg-[#5BE94F] hover:text-black" type="submit">Sign Up</button>
                    </div>

                </div>
            </form>
        </Modal>
    );
}
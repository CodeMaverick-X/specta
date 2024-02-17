'use client';
import { State } from "@/app/lib/auth";
import { MutableRefObject } from "react";
import clsx from "clsx";
import { stat } from "fs";
import { useState } from "react";


export default function FormInpute({ name, state, id, passRef, slug }: {
    name: string, state: State, id: string, passRef: MutableRefObject<HTMLInputElement | null> | null, slug: string;
}) {
    let type = name.endsWith('password') ? 'password' : 'text';
    const [confirmPassNotMatchStyle, setConfirmPassNotMatchStyle] = useState('');

    const handleInputeChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (name === 'confirm password' && e.target.value !== passRef?.current?.value) {
            setConfirmPassNotMatchStyle('Passwords do not match');

        } else {
            setConfirmPassNotMatchStyle('');
        }
    };

    return (
        <>
            <label htmlFor={name} className="text-gray-500 pt-5">{name}</label>
            <div className="relative mb-5">
                <input
                    type={type}
                    name={name}
                    className="block w-full px-4 py-2 bg-transparent border-b focus:outline-none border-[#57EF0F]"
                    aria-describedby={name}
                    ref={name === 'password' ? passRef : null} // Conditionally attach passRef
                    onChange={name === 'confirm password' ? handleInputeChange : undefined}
                />
            </div>
            <div id={name} aria-live="polite" aria-atomic="true">
                {state?.errors?.[slug] && state.errors[slug].map((error: string) => (
                    <p className=" text-sm text-red-500 pt-1" key={error}>
                        {error}
                    </p>
                ))}
            </div>
            <div>
                {confirmPassNotMatchStyle && <p className=" text-sm text-red-500 pt-1">
                    {confirmPassNotMatchStyle}
                </p>}
            </div>
        </>
    );
}
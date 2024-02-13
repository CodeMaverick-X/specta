'use client';
import Modal from "./modal";
import { Kalam } from "next/font/google";
import { ReactNode, MouseEvent, useState } from 'react';

const kalam = Kalam({
    weight: "400",
    subsets: ['latin'],
});

// mmebuka means open in harry potter :)
export default function SignUp({ membuka }: { membuka: boolean; }) {
    const [open, setOpen] = useState(membuka);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleInnerClick = (e: MouseEvent<HTMLDivElement>) => {
        // Prevent the click event from reaching the outer div
        e.stopPropagation();
    };

    return (
        <Modal onClose={handleClose} isOpen={open}>
            <div className="flex flex-row bg-[#0D1533] w-9/12 h-5/6 p-16 rounded-md shadow-black shadow-md justify-between pt-20"
                onClick={handleInnerClick}
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
                <div className=" flex flex-col  pr-16  w-2/5">
                    <div className={` text-lg ${kalam.className} text-5xl text-[#5BE94F] self-center `}>SPECTA</div>

                    <label htmlFor="username" className=" text-gray-500 pt-20" >username</label>
                    <div className="relative mb-5">
                        <input
                            type="text"
                            // value={'enter username'}
                            // onChange={onChange}
                            className="block w-full px-4 py-2  bg-transparent border-b focus:outline-none border-[#57EF0F]"
                        // placeholder="Username"
                        />
                    </div>

                    <label htmlFor="password" className=" text-gray-500">password</label>
                    <div className="relative mb-5">
                        <input
                            type="password"
                            // value={'enter username'}
                            // onChange={onChange}
                            className="block w-full px-4 py-2  bg-transparent border-b focus:outline-none border-[#57EF0F]"
                        />
                    </div>

                    <label htmlFor="comfirm-password" className=" text-gray-500">confirm password</label>
                    <div className="relative mb-5">
                        <input
                            type="password"
                            // value={'enter username'}
                            // onChange={onChange}
                            className="block w-full px-4 py-2  bg-transparent border-b focus:outline-none border-[#57EF0F]"
                        />
                    </div>
                    <div className="flex flex-row justify-between">

                        <div className=" text-gray-500">aready a part of us? <span className="text-[#5BE94F]">login</span> </div>
                        <button className="inline my-3 bg-[#1D5F1B] h-10 w-24 p-1 rounded-sm border-[#5BE94F] border hover:bg-[#5BE94F] hover:text-black">Sign Up</button>
                    </div>

                </div>
            </div>
        </Modal>
    );
}
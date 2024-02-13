'use client';
import Modal from "./modal";
import { ReactNode, MouseEvent, useState } from 'react';

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
            <div className="flex flex-row bg-[#0D1533] w-9/12 h-5/6 p-16 justify-between rounded-md shadow-black shadow-md"
                onClick={handleInnerClick}
            >
                <div>
                    <div>SignUp Lets enlighten the world together</div>
                    <ul>
                        <li>You'll be able to add devices</li>
                        <li>You'll be able to make expert reviews</li>
                        <li>You'll be able to satisfy your inner geek</li>
                        <li>You'll be a part of the specta comunity</li>
                    </ul>
                </div>
                <div className=" flex flex-col">
                    <div className=" text-lg">Specta</div>

                    <label htmlFor="username" >username</label>
                    <div className="relative">
                        <input
                            type="text"
                            // value={'enter username'}
                            // onChange={onChange}
                            className="block w-full px-4 py-2  bg-transparent border-b focus:outline-none border-green-500"
                            placeholder="Username"
                        />
                    </div>

                    <label htmlFor="password">password</label>
                    <div className="relative">
                        <input
                            type="password"
                            // value={'enter username'}
                            // onChange={onChange}
                            className="block w-full px-4 py-2  bg-transparent border-b focus:outline-none border-green-500"
                        />
                    </div>

                    <label htmlFor="comfirm-password">confirm password</label>
                    <div className="relative">
                        <input
                            type="password"
                            // value={'enter username'}
                            // onChange={onChange}
                            className="block w-full px-4 py-2  bg-transparent border-b focus:outline-none border-green-500"
                        />
                    </div>

                    <div>aready a part of us? login </div>
                </div>
            </div>
        </Modal>
    );
}
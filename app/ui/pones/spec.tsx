'use client';
import { useState } from "react";
import clsx from "clsx";
import { capitalize } from "@/app/lib/utils";
import { fetchPhoneWithSpec } from "@/app/lib/data";
import { Phone, Spec } from "@prisma/client";
import Price from "./spec-price";

export default function SpecTab(
    { spec, price }: {
        spec: Spec & { [key: string]: any; },
        price: number;
    }) {

    const [currentSpec, setCurrentSpec] = useState<any>({ detail: {}, cat: '' });
    const navlinks = ['camera', 'battery', 'screen', 'platform', 'sensor', 'build'];


    const handleClick = (cat: string) => {
        if (cat === 'price') {
            setCurrentSpec({ detail: { ReleasePrice: price }, cat });
        }
        if (cat in spec) {
            setCurrentSpec({ detail: spec[cat], cat }); // Use square brackets to access object properties dynamically
        }
    };

    // Set initial spec
    useState(() => setCurrentSpec({ detail: spec.camera, cat: 'camera' }));

    return (
        <div className="mt-5">
            <nav className=" flex flex-row gap-4 border-b border-[#227D20]">
                {navlinks.map((cat) => {
                    return (
                        <div key={cat} className={clsx(" hover:cursor-pointer", { 'text-[#70E46D]': currentSpec.cat === cat })} onClick={() => handleClick(cat)} >{capitalize(cat)}</div>
                    );
                })}

                <div className={clsx(" hover:cursor-pointer", { 'text-[#70E46D]': currentSpec.cat === 'price' })} onClick={() => handleClick('price')} >{capitalize('price')}</div>
            </nav>

            <div className="mt-3 max-w-md">
                {/* Render current spec properties */}

                {currentSpec.detail && Object.entries(currentSpec.detail).map(([key, value]) => {
                    if (typeof value === 'boolean') {
                        if (value === false) value = 'No'; else { value = 'yes'; }
                    }
                    if (currentSpec.cat === 'price') {
                        return (
                            <div key={key}><Price basePrice={value as number}/></div>
                )};
                    return (<div key={key}>
                        <strong>{capitalize(key)}:</strong> {value as string | boolean}
                    </div>);
                })}
            </div>


        </div>
    );
}
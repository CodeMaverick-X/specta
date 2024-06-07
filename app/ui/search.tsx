'use client';
import { ReactNode } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";
import { useRef } from "react";



export function SearchBar() {
    const pathname = usePathname();
    let Search: ReactNode;
    switch (pathname) {
        case '/phones':
            Search = <PhoneSearch />;
            break;
        case '/home':
            Search = <HomeSearch />;
            break;
        case '/laptops':
            Search = <LaptopSearch />;
            break;
        case '/compare':
            Search = <CompareSearch />;
            break;
        default:
            Search = <HomeSearch />; // hopefully you won't ever run
            break;
    }

    return (
        <>
            {Search}
        </>
    );
}


function HomeSearch() {
    return (
        <form className="inline pt-10">
            <input
                type="text"
                placeholder="search"
                className="block w-full rounded-sm border-0 py-1.5 pb-2 pl-5 pr-20 text-white placeholder:text-gray-400 focus:ring-0 bg-[#0D1533] shadow-xl">

            </input>
        </form>
    );
}

function CompareSearch() {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    const phoneDropDown = useRef<HTMLSelectElement | null>(null)

    const handleSearch = useDebouncedCallback(
        (term: string) => {
            const params = new URLSearchParams(searchParams);
            const phoneNum = phoneDropDown.current?.value
            // params.set('page', '1');
            if (term && phoneNum) {
                params.set('phone', term);
                params.set('pnoneNum', phoneNum)
            } else {
                params.delete('phone');
                params.delete('phoneNum');
            }
            replace(`${pathName}?${params.toString()}`);
        }, 300);

    return (
        <form className=" mt-10 flex flex-row mb-5 rounded-sm bg-[#0D1533] pr-3">
            <input
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
                placeholder="search to compare"
                className="block w-full rounded-sm border-0 py-1.5 pb-2 pl-5 pr-20 text-white placeholder:text-gray-400 focus:ring-0 bg-[#0D1533] shadow-xl">

            </input>

            <div className="">
                <select ref={phoneDropDown} className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-400 placeholder:text-gray-400 sm:text-sm">
                    <option className="bg-white hover:bg-blue-700 hover:text-white">1</option>
                    <option className="bg-white hover:bg-blue-700 hover:text-black">2</option>
                </select>
            </div>
        </form>
    );
}

// TODO: DRY-- create a base search that the other search will build upon:
function PhoneSearch() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback(
        (term: string) => {
            const params = new URLSearchParams(searchParams);
            params.set('page', '1');
            if (term) {
                params.set('query', term);
            } else {
                params.delete('query');
            }
            replace(`${pathName}?${params.toString()}`);
        }, 300);


    return (
        <form className="inline pt-10">
            <input
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
                placeholder="search phone"
                className="block w-full rounded-sm border-0 py-1.5 pb-2 pl-5 pr-20 text-white placeholder:text-gray-400 focus:ring-0 bg-[#0D1533] shadow-xl ">

            </input>
        </form>
    );
}
function LaptopSearch() {
    return (
        <form className="inline pt-10">
            <input
                type="text"
                placeholder="search laptop"
                className="block w-full rounded-sm border-0 py-1.5 pb-2 pl-5 pr-20 text-white placeholder:text-gray-400 focus:ring-0 bg-[#0D1533] shadow-xl">

            </input>
        </form>
    );
}


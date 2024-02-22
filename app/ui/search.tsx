'use client';
import { ReactNode } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";



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
        }, 300)


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


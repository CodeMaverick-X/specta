'use client'
import clsx from 'clsx';
import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function SideNav() {

    const links = [
        { name: 'phones', href: '/phones', parent: 'gadgets' },
        { name: 'laptops', href: '/laptops', parent: 'gadgets' },
        { name: 'new releases', href: '/new_releases', parent: 'news' },
        { name: 'coming soon', href: '/coming_soon', parent: 'news' }
    ];

    const pathName = usePathname();

    return (
        <nav className="bg-[#0D1533] max-w-96 m-0 py-5  w-48 flex flex-col">
            <div className=" px-5 text-lg text-[#70E46D] py-4">Gadgets</div>
            {links.filter((lObj) => lObj.parent === 'gadgets').map((linkObject) => {
                return (
                    <Link
                        href={linkObject.href}
                        key={linkObject.name}
                        className={clsx("px-5 text-sm pl-7 py-2 hover:bg-[#555755] hover:bg-opacity-40 hover:text-white", {'bg-[#31BE1A] bg-opacity-40': pathName.startsWith(linkObject.href)})}>
                        {linkObject.name}
                    </Link>);
            })}
            <div className="px-5 text-lg text-[#70E46D] py-4">News</div>
            {links.filter((lObj) => lObj.parent === 'news').map((linkObject) => {
                return (
                    <Link
                        href={linkObject.href}
                        key={linkObject.name}
                        className={clsx("px-5 text-sm pl-7 py-2 hover:bg-[#555755] hover:bg-opacity-40 hover:text-white", {'bg-[#31BE1A]': pathName.startsWith(linkObject.href)})}>
                        {linkObject.name}
                    </Link>);
            })}
            <Link href={'/compare'} className="px-5 text-lg text-[#70E46D] pt-4">Compare</Link>
            <Link href={'/stat'} className="px-5 text-lg text-[#70E46D] pt-4">Stat</Link>
        </nav>
    );
}
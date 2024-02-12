import SideNav from "../ui/sidenav";
import { SearchBar } from "../ui/search";

export default function Layout({ children }: { children: React.ReactNode; }) {

    return (
        <main className="bg-[#060B1A] h-screen ">
            <section className="h-28 border-b border-y-indigo-950 flex flex-row justify-between">
                <div className="logo-place-holder text-lg inline pl-5 pt-10">LOGO</div>

                <SearchBar />

                <button className="inline pr-3 mt-10 bg-[#1D5F1B] h-10 w-24 p-1 mr-5 rounded-sm border-[#5BE94F] border hover:bg-[#5BE94F] hover:text-black">Signin</button>
            </section>
            <section className="flex flex-row h-[calc(100%-7rem)]">
                <SideNav />
                <div className=" w-full h-full max-w-[calc(100%-10rem)] overflow-scroll">
                    {children}
                </div>
            </section>

        </main>
    );
}
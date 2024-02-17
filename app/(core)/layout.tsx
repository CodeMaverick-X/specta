import SideNav from "../ui/sidenav";
import { SearchBar } from "../ui/search";
import SignUp from "../ui/auth/sign-up-form";
import Auth from "../ui/auth/authcontrol";
import middleware from "@/middleware";

export default async function Layout({ children }: { children: React.ReactNode; }) {

    const session = await middleware()
    let open = false;

    const handleSignupClick = () => {
        open = true;
    };


    return (
        <main className="bg-[#060B1A] h-screen ">
            <section className="h-28 border-b border-y-indigo-950 flex flex-row justify-between">
                <div className="logo-place-holder text-lg inline pl-5 pt-10">LOGO</div>

                <SearchBar />

                {/* <button className="inline pr-3 mt-10 bg-[#1D5F1B] h-10 w-24 p-1 mr-5 rounded-sm border-[#5BE94F] border hover:bg-[#5BE94F] hover:text-black">Signin</button>
                <SignUp membuka={true} /> */}
                <Auth session={session}/>
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
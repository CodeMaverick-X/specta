import Table from "@/app/ui/pones/table";
import Pagination from "@/app/ui/pones/pagination";
import { fetchPhonePages } from "@/app/lib/data";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string,
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchPhonePages(query)


    return (
        <main className="pt-10 px-11">
            <Table query={query} currentPage={currentPage} />
            <Pagination totalPages={totalPages}/>
        </main>
    );
}
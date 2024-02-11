import Image from "next/image";
import { fetchFilteredPhone } from "@/app/lib/data";
import { capitalize } from "@/app/lib/utils";
import Link from "next/link";

export default async function Table(
    { query, currentPage }: { query: string, currentPage: number; }
) {
    const phones = await fetchFilteredPhone(query, currentPage);


    return (
        <>
            {phones.map((phone) => {
                return (
                    <Link href={`/phones/${phone.id}`} key={phone.id}>
                        <div  className="bg-[#0D1533] flex flex-row p-4 rounded-sm mr-36 mb-5 hover:shadow-lg hover:border border-[#419c41] ">
                            <Image
                                src={'/gsmarena_002.jpg'}
                                alt="pic of phone"
                                width={120}
                                height={160}
                                className="rounded-sm "
                            />
                            <div className="pl-5">
                                <div className="text-2xl">{capitalize(phone.name)}</div>
                                <div className=" text-gray-400 italic pt-2">{capitalize(phone.brand)} / {phone.releaseDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            </div>
                            <div className=" ml-auto text-lg px-16">${phone.price}</div>
                        </div>
                    </Link>
                );
            })}

        </>
    );

}
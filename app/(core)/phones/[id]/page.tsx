import { fetchPhoneWithSpec } from "@/app/lib/data";
import Image from "next/image";
import SpecTab from "@/app/ui/pones/spec";
import { capitalize } from "@/app/lib/utils";
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string; }; }) {
    const id = params.id;
    // const phone = {name: 'Samsung S24 Ultra', id: 'tshsyshs'};
    const phone = await fetchPhoneWithSpec(id);

    if (!phone) notFound();




    return (
        <main className=" mx-20 mt-10 ">
            <div className="flex flex-row">
                <Image
                    src={'/gsmarena_002.jpg'}
                    alt="pic of phone"
                    width={420}
                    height={560}
                    className="rounded-sm "
                />
                <div className="mx-10">
                    <div className=" text-4xl">{phone?.name && capitalize(phone?.name)}</div>
                    {(phone?.spec && phone.price) && <SpecTab spec={phone?.spec} price={phone.price} />}

                </div>
            </div>
        </main>
    );
}
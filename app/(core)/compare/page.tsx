import { fetchPhoneWithSpec } from "@/app/lib/data";
import { capitalize } from "@/app/lib/utils";
import Image from "next/image";

export default async function Page() {

    const firstPhone = await fetchPhoneWithSpec('65c0c4b3c0141768708a3f92');
    const secondPhone = await fetchPhoneWithSpec('65c0c4b7c0141768708a3f98');

    return (
        <main className="py-10 px-11">

            <div className=" phones-overview grid grid-cols-2 gap-6 pb-5">
                <div className="flex flex-col">
                    <div className=" text-3xl pb-5">{firstPhone?.name && capitalize(firstPhone?.name)}</div>
                    <Image
                        src={'/gsmarena_002.jpg'}
                        alt="pic of phone"
                        width={240}
                        height={320}
                        className="rounded-sm "
                    />
                </div>
                <div className="flex flex-col">
                    <div className=" text-3xl pb-5">{secondPhone?.name && capitalize(secondPhone?.name)}</div>
                    <Image
                        src={'/gsmarena_002.jpg'}
                        alt="pic of phone"
                        width={240}
                        height={320}
                        className="rounded-sm "
                    />
                </div>
            </div>


            {firstPhone?.spec && Object.entries(firstPhone?.spec)
                .filter(([cat, _]) => !cat.toUpperCase().endsWith('ID'))
                .map(([cat, value]) => {
                    return (
                        <div key={cat} className="border-b border-[#989797]">
                            <div className=" grid grid-cols-2 gap-6">

                                <div className=" font-bold text-lg">{capitalize(cat)}</div>
                                <div className=" font-bold text-lg text-left">{capitalize(cat)}</div>

                            </div>
                            {Object.entries(value).map(([field, fieldVal]) => {

                                return (
                                    <div className=" grid grid-cols-2 gap-6" key={field}>
                                        <div className=" max-w-96"><span>{capitalize(field)}: </span> {fieldVal}</div>
                                        <div className=" max-w-96"><span>{capitalize(field)}: </span> {secondPhone?.spec && (secondPhone?.spec as any)[cat][field]}</div>
                                    </div>
                                );
                            })}

                        </div>
                    );
                })}
        </main>
    );
}
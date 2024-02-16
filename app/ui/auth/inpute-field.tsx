import { State } from "@/app/lib/auth";



export default function FormInpute({ name, state, id }: {name: string, state: State, id: string}) {
    let type = name.endsWith('password')? 'password': 'text'
    return (
        <>
            <label htmlFor={name} className="text-gray-500 pt-5">{name}</label>
            <div className="relative mb-5">
                <input
                    type={type}
                    name={name}
                    className="block w-full px-4 py-2 bg-transparent border-b focus:outline-none border-[#57EF0F]"
                    aria-describedby={name}
                />
            </div>
            <div id={name} aria-live="polite" aria-atomic="true">
                {state?.errors?.[name] && state.errors[name].map((error: string) => (
                    <p className=" text-sm text-red-500 pt-1" key={error}>
                        {error}
                    </p>
                ))}
            </div>
        </>
    );
}

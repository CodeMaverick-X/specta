import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested phone.</p>
      <Link
        href="/phones"
        className="mt-4  px-4 py-2 text-sm  transition-colors text-gray-300 my-3 bg-[#1D5F1B] h-10 w-24 p-1 rounded-sm border-[#5BE94F] border hover:bg-[#5BE94F] hover:text-black"
      >
        Go Back
      </Link>
    </main>
  );
}
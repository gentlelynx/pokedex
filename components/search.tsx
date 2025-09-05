"use client"

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const [query, setQuery] = useState("");
    const searchParameters = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const searchClick = () => {
        const params = new URLSearchParams(searchParameters);
        if (query) {
            params.set("query", query);
        }
        else {
            params.delete("query");
        }
        replace(`${pathname}?${params}`);
    }

    return (
        <div className="flex justify-center">
            <div className="flex justify-center p-4">
                <label htmlFor="search" className="sr-only">Search</label>
                <input className="block w-full rounded-sm border border-gray-200 py-[9px] pl-4 text-md placeholder:text-gray-500" id="search" placeholder="Search for pokemon" onChange={(e) => setQuery(e.target.value)} value={query} />
                <button className="flex items-center justify-end p-3" type="button" onClick={searchClick}>
                    <SearchIcon size={20} />
                    <p className="sr-only">Search</p>
                </button>
            </div>
        </div>
    );
}
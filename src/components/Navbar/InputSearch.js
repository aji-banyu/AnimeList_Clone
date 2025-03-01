"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`)
    }
    
    return (
        <div className="relative">
            <form action="" onSubmit={handleSearch}>
                <input type="text" 
                placeholder="Cari anime..." 
                className="p-1 rounded w-full"
                ref={searchRef}
                />
                <button type="submit" className="absolute top-1 end-1">
                    <MagnifyingGlass size={24} />
                </button>
            </form>
        </div>
    )
}

export default InputSearch
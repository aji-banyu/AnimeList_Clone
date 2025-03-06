"use client";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center bg-gray-100">
            <div className="flex flex-col justify-center items-center bg-color-secondary p-8 rounded-lg shadow-lg">
                <FileSearch size={60} className="text-color-accent mb-4"/>
                <h1 className="text-color-accent text-4xl font-bold mb-2">Page Not Found</h1>
                <p className="text-color-primary mb-4">Sorry, the page you are looking for does not exist.</p>
                <Link href="/" className="text-color-accent font-semibold hover:underline">Go back to Home</Link>
            </div>
        </div>
    )
}

export default NotFound;
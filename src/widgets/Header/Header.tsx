import { Button } from "@/shared/ui/Button/Button";
import Link from "next/link";
import React from "react";

export const Header:React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-100">
                <Link href="/" className="text-xl font-bold text-black">Task Manager</Link>
            <nav className="space-x-4 flex items-center gap-10 text-black">
                <Link href='/'>Home</Link>
                <Link href='#'>Tasks</Link>
                <Link href='/about'>About</Link>
            </nav>
            <Button>Logout</Button>
        </header>
    );
};

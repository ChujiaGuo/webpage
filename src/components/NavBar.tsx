"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, CodeXml, Mail, Folder, House } from "lucide-react";

const buttonInactive = `rounded p-2 group hover:bg-pink-200`
const iconInactive = `group-hover:text-black`
const buttonActive = `rounded p-2 bg-pink-300`
const iconActive = `text-black`

export default function Navbar() {
    const pathname = usePathname()
    const isActive = (href: string) => pathname === href
    return (
        <nav className="h-7[vh] sticky top-0 z-50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex-1 flex ">
                    <Link href='/' className={isActive('/') ? buttonActive : buttonInactive}>
                        <House className={isActive('/') ? iconActive : iconInactive} />
                    </Link>
                </div>

                <div className="flex-1 flex justify-center gap-4">
                    <Link href='/resume' className={isActive('/resume') ? buttonActive : buttonInactive}>
                        <FileText className={isActive('/resume') ? iconActive : iconInactive}  />
                    </Link>
                    <Link href='/skills' className={isActive('/skills') ? buttonActive : buttonInactive}>
                        <CodeXml className={isActive('/skills') ? iconActive : iconInactive} />
                    </Link>
                    <Link href='/projects' className={isActive('/projects') ? buttonActive : buttonInactive}>
                        <Folder className={isActive('/projects') ? iconActive : iconInactive} />
                    </Link>
                </div>

                <div className="flex-1 flex justify-end">
                    <Link href='/contact' className={isActive('/contact') ? buttonActive : buttonInactive}>
                        <Mail className={isActive('/contact') ? iconActive : iconInactive} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

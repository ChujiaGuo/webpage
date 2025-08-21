"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, CodeXml, Mail, Folder, House } from "lucide-react";
import { useState } from "react";
import { nunito } from "@/lib/fonts";

const buttonInactive = `rounded p-2 group hover:bg-pink-200`
const iconInactive = `group-hover:text-black`
const buttonActive = `rounded p-2 bg-pink-300`
const iconActive = `text-black`

const center_links = [
    { href: '/resume', label: 'resume', icon: FileText },
    { href: '/skills', label: 'skills', icon: CodeXml },
    { href: '/projects', label: 'projects', icon: Folder },
];

const right_links = [
    { href: '/contact', label: 'contact', icon: Mail },
];

export default function Navbar() {
    const pathname = usePathname()
    const isActive = (href: string) => pathname === href
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="h-10[vh]" >
            <nav className="sticky top-0 z-50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 pt-3">
                    <div className="flex-1 flex">
                        <Link href='/' className={isActive('/') ? buttonActive : buttonInactive}>
                            <House className={isActive('/') ? iconActive : iconInactive} />
                        </Link>
                    </div>

                    <div className="flex-1 flex justify-center gap-4">
                        {center_links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={isActive(link.href) ? buttonActive : buttonInactive}
                                onMouseEnter={() => setHovered(link.href)}
                                onMouseLeave={() => setHovered(null)}>
                                <link.icon className={isActive(link.href) ? iconActive : iconInactive} />
                            </Link>
                        ))}
                    </div>

                    <div className="flex-1 flex justify-end">
                        {right_links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={isActive(link.href) ? buttonActive : buttonInactive}
                                onMouseEnter={() => setHovered(link.href)}
                                onMouseLeave={() => setHovered(null)}>
                                <link.icon className={isActive(link.href) ? iconActive : iconInactive} />
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            <div className="max-w-7xl h-8 mx-auto">
                <div className={`flex flex-1 justify-center ${nunito.className} text-lg text-gray-400`}>
                    {hovered && center_links.find(l => l.href === hovered)?.label}
                </div>

                <div className={`flex flex-1 justify-end px-2 ${nunito.className} text-lg text-gray-400`}>
                    {hovered && right_links.find(l => l.href === hovered)?.label}
                </div>
            </div>
        </div>
    );
}

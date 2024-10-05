'use client';
import { useState, useEffect } from "react";
import { PiBookOpenText } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { TbUserHexagon, TbMessage2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

interface SideNavProps {
    children: ReactNode;
}

interface SideNavMenuItem {
    name: string;
    icon: ReactNode;
    to: string;
}

const SideNav = ({ children }: SideNavProps) => {
    const pathname = usePathname(); 

    const SideNavMenu: SideNavMenuItem[] = [
        { name: "Overview", icon: <RxDashboard size={24} />, to: "/dashboard" },
        { name: "Task", icon: <PiBookOpenText size={24} />, to: "/dashboard/tasks" },
        { name: "Mentor", icon: <TbUserHexagon size={24} />, to: "/dashboard/mentor" },
        { name: "Message", icon: <TbMessage2 size={24} />, to: "/dashboard/messages" },
        { name: "Settings", icon: <IoSettingsOutline size={24} />, to: "/dashboard/settings" }
    ];

    
    const getActiveTab = () => {
        const activeMenu = SideNavMenu.find(menu => menu.to === pathname);
        return activeMenu ? activeMenu.name : "Overview"; 
    };

    
    const [activeTab, setActiveTab] = useState<string>(getActiveTab());

    useEffect(() => {
        const activeMenu = SideNavMenu.find(menu => menu.to === pathname);
        if (activeMenu) setActiveTab(activeMenu.name);
    }, [pathname]); 

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    const getLinkClasses = (menuName: string) =>
        `flex gap-2 items-center mx-4 my-2 p-4 rounded-[10px] cursor-pointer ${activeTab === menuName ? "bg-white text-black" : "text-gray-400 hover:bg-gray-200 hover:text-black"
        }`;

    return (
        <section className="flex">
            <main className="w-[15%] bg-black h-screen shadow-lg px-2 fixed">
                <h2 className="font-medium text-white text-[30px] p-4 py-3">Taskify</h2>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col relative">
                        {SideNavMenu.map((menu) => (
                            <Link href={menu.to} key={menu.name} className={getLinkClasses(menu.name)} onClick={() => handleTabClick(menu.name)} aria-label={menu.name}>
                                <div>{menu.icon}</div>
                                <div>{menu.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <div className="flex-grow ml-[15%]">{children}</div>
        </section>
    );
};

export default SideNav;

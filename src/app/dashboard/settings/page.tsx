'use client'
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VscBell } from "react-icons/vsc";
import Toggle from "@/components/toggle/toggle";
import { EditProfileForm } from "@/components/form/editprofileform";



export default function Home() {
    const [activeTab, setActiveTab] = useState('General');

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <main className="bg-gray-50 p-4 h-screen">
            <section className={`flex justify-between shadow-sm fixed top-0 left-[15%] right-0 z-10 p-4 transition-all duration-300  bg-white backdrop-blur-md  `}>
                <div>
                    <h3 className="font-semibold text-[24px]">Settings</h3>
                </div>
                <div className="flex gap-5 items-center">
                    <VscBell size={30} />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </section>
            <div className="bg-white rounded-xl mt-[8%] p-10 min-h-[400px]">
                <div className="flex gap-4 justify-between px-4   ">
                    <div className="w-[100%] ">
                        <div className="flex gap-4">
                            <div onClick={() => handleTabChange('General')} className={`cursor-pointer px-3  text-[20px] ${activeTab === 'General' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'font-normal'}`}>General</div>
                            <div onClick={() => handleTabChange('Notification')} className={`cursor-pointer px-3  text-[20px] ${activeTab === 'Notification' ? 'text-blue-400 border-b-2 border-blue-600 font-medium' : 'font-normal'}`}>Notification</div>
                        </div>
                    </div>
                </div>
                {activeTab === 'General' && <div>
                    <EditProfileForm />
                </div>}
                {activeTab === 'Notification' && <div className="flex flex-col gap-4 mt-10">
                    <div className="flex gap-3 items-center">
                        <Toggle onToggleChange={() => console.log('ho')} />
                        <p className="font-semibold text-[20px]">Message</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Toggle onToggleChange={() => console.log('ho')} />
                        <p className="font-semibold text-[20px]">Task Update</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Toggle onToggleChange={() => console.log('ho')} />
                        <p className="font-semibold text-[20px]">Task Deadline</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Toggle onToggleChange={() => console.log('ho')} />
                        <p className="font-semibold text-[20px]">Mentor Help</p>
                    </div>


                    <div className="mt-10">
                        <button className="bg-black py-3 px-9 text-white rounded">
                            Save Changes
                        </button>
                    </div>
                </div>}

            </div>

        </main>

    );
}


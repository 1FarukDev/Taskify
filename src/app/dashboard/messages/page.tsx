'use client'
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VscBell } from "react-icons/vsc";
import { SearchInputField } from "@/components/atoms/searchbox";
import { ChatCardProps } from "@/components/Types/types";
import ChatCard from "@/components/card/chat";
import { truncateString } from "@/lib/helpers/texttruncate";
import MessageTab from "@/components/card/message-tab";


export default function Home() {
    const chatData: ChatCardProps[] = [
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Alice Smith',
            message: 'Hey! How are you?',
            time: '10:00 AM',
            isUnread: true,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Bob Johnson',
            message: 'Looking forward to our meeting!',
            time: '10:05 AM',
            isUnread: false,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Catherine Brooks',
            message: 'The project is almost done!',
            time: '10:10 AM',
            isUnread: true,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Daniel Evans',
            message: 'Can you send the files over?',
            time: '10:20 AM',
            isUnread: false,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Eva Green',
            message: 'Let’s catch up soon.',
            time: '10:30 AM',
            isUnread: true,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Frank Harris',
            message: 'I’ll review the document.',
            time: '10:35 AM',
            isUnread: false,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Grace Lewis',
            message: 'Do you need help with the report?',
            time: '10:40 AM',
            isUnread: true,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Harry Moore',
            message: 'Let’s grab coffee later.',
            time: '10:50 AM',
            isUnread: false,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Isabella Reed',
            message: 'I’ll send the invite now.',
            time: '11:00 AM',
            isUnread: true,
        },
        {
            avatarUrl: 'https://via.placeholder.com/48',
            name: 'Jack White',
            message: 'Great job on the presentation!',
            time: '11:15 AM',
            isUnread: false,
        },
    ];
    const messages = [
        { message: "Hello!", isSender: true },
        { message: "Hi there!", isSender: false },
        { message: "How are you?", isSender: true },
        { message: "I'm good, thanks!", isSender: false },
    ];
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="bg-gray-50 p-4 min-h-screen">
            <section className={`flex justify-between shadow-sm fixed top-0 left-[15%] right-0 z-10 p-4 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md bg-opacity-80' : 'bg-transparent'}`}>
                <div>
                    <h3 className="font-semibold text-[24px]">Message</h3>
                </div>
                <div className="flex gap-5 items-center">
                    <VscBell size={30} />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </section>

            <section className=" pt-[55px]">
                <div className="flex ">
                    <div className="w-[30%]">
                        <SearchInputField />
                        <div className=" flex flex-col gap-3 mt-4 h-[calc(100vh-200px)] overflow-y-auto no-scrollbar">
                            {chatData.map((chat: ChatCardProps, index: number) => (
                                <div key={index} className="">
                                    <ChatCard
                                        key={index}
                                        avatarUrl={chat.avatarUrl}
                                        name={chat.name}
                                        message={truncateString(chat.message, 25)}
                                        time={chat.time}
                                        isUnread={chat.isUnread}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[70%] ">
                        <MessageTab
                            avatarUrl="https://example.com/avatar.jpg" 
                            avatarFallback="AB" 
                            name="John Doe"
                            status="online"
                            messages={messages}
                        />
                    </div>
                </div>
            </section>

        </main>

    );
}


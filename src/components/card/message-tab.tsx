import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Online from '@/assets/icons/online.svg';
import Offline from '@/assets/icons/red-dot.png';
import { MessageTabProps } from "../Types/types";
import { Input } from "../ui/input";
import Send from '@/assets/icons/send.svg'



const MessageTab: React.FC<MessageTabProps> = ({
    avatarUrl,
    avatarFallback,
    name,
    status,
    messages,
}) => {
    return (
        <main className="bg-gray-100 h-screen">
            <Card className="border-0 bg-white w-full rounded-none shadow-sm">
                <CardHeader>
                    <section className="flex items-center justify-between">
                        <div className="flex gap-3 items-center w-full">
                            <Avatar className="border border-black w-[48px] h-[48px]">
                                <AvatarImage src={avatarUrl} alt={name} className="border" />
                                <AvatarFallback>{avatarFallback}</AvatarFallback>
                            </Avatar>
                            <main className="flex items-center justify-between w-[70%]">
                                <div>
                                    <p className="font-medium text-[20px]">{name}</p>
                                    <div className="flex gap-2 items-center">
                                        <Image src={status === "online" ? Online : Offline} alt={status} />
                                        <p className="font-thin text-[20px]">{status}</p>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </section>
                </CardHeader>
            </Card>

            <section className="p-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`${msg.isSender ? "bg-black text-white ml-auto" : "bg-white text-black"
                            } max-w-[30%] w-max shadow-sm p-4 mb-4 rounded-[10px] text-[20px] ${msg.isSender ? "rounded-tr-none" : "rounded-tl-none"
                            }`}
                    >
                        {msg.message}
                    </div>
                ))}
            </section>
            <section className="absolute bottom-0 w-[85%] bg-white h-[80px]">
                <div className="flex">
                    <Input  
                        type="text"
                        placeholder="Send your message"
                        className="w-full pr-10 border-none shadow-none h-[52px] rounded px-4 mt-3 text-[20px]  text-black"
                    />
                    <div className="bg-black h-[60px] px-4 rounded m-4 cursor-pointer">
                    <Image src={Send} alt="send Icon" width={40} height={40} className="mt-4"/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MessageTab;

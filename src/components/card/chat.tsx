import React from "react";
import {
    Card,
    CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Reddot from '@/assets/icons/red-dot.png';
import Check from '@/assets/icons/check.svg'
import { ChatCardProps } from "../Types/types";




const ChatCard: React.FC<ChatCardProps> = ({
    avatarUrl,
    name,
    message,
    time,
    isUnread
}) => {

    return (
        <Card className="border-0 bg-white w-full shadow-none hover:bg-gray-100 cursor-pointer">
            <CardHeader>
                <section className="flex items-center justify-between">
                    <div className="flex gap-3 items-center w-full">
                        <Avatar className="border border-black w-[48px] h-[48px]">
                            <AvatarImage src={avatarUrl} alt={name} className="border" />
                            <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <main className="flex items-center justify-between w-full">
                            <div>
                                <p className="font-medium text-[20px]">{name}</p>
                                <p className="font-normal text-[15px]">{message}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <p className="font-thin">{time}</p>
                                {isUnread ? (
                                    <p>
                                        <Image src={Reddot} alt="Unread notification indicator" />
                                    </p>
                                ) : (
                                    <Image src={Check} alt="Read notification indicator" />
                                )}
                            </div>
                        </main>
                    </div>
                </section>
            </CardHeader>
        </Card>
    );
};

export default ChatCard;

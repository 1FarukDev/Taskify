import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosAdd } from "react-icons/io";
import Image from "next/image";
import { MentorsCardProps } from "../Types/types";
import Star from '@/assets/icons/Star 1.png'
import Task from '@/assets/icons/task.png'
import { truncateString } from "@/lib/helpers/texttruncate";


const MentorsCard: React.FC<MentorsCardProps> = ({
    name,
    title,
    avatarUrl,
    taskCount,
    rating,
    reviewCount,
}) => {


    return (

        <Card className="border-0 shadow-sm bg-white w-full">
            <CardHeader>
                <section className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                        <Avatar className="border border-black">
                            <AvatarImage src={avatarUrl} className="border" />
                            <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardDescription className="font-semibold text-[20px]">
                                {name}
                            </CardDescription>
                            <CardDescription className="font-medium text-[15px] text-gray-400">
                                {title}
                            </CardDescription>
                        </div>
                    </div>

                    <div className="flex cursor-pointer items-center text-blue-400">
                        <IoIosAdd />
                        <p>Follow</p>
                    </div>
                </section>
            </CardHeader>
            <CardDescription className="font-normal text-[15px] text-gray-400 px-6 pb-6">
                {truncateString(" Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web Development and Digital Media Studies. My research focuses on the intersection of technology, user experience, and online platforms, specifically how web design and development can shape user engagement and accessibility. I am passionate about creating innovative and inclusive digital experiences that bridge gaps in communication and information access.", 150)}
            </CardDescription>
            <CardContent className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Image src={Task} alt="Task" width={20} height={20} />
                    <h3 className="font-normal text-[18px]">{taskCount} Tasks</h3>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src={Star} alt="Star" width={20} height={20} />
                    <h3 className="font-normal text-[18px]">
                        {rating?.toFixed(1)} ({reviewCount} Reviews)
                    </h3>
                </div>
            </CardContent>
        </Card>
    );
};

export default MentorsCard;

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { TaskProps } from "../Types/types"; 

const TaskCard: React.FC<{ task: TaskProps }> = ({ task }) => {
    return (
        <Card className="border-0 shadow-md w-full bg-white">
            <CardHeader>
                <CardTitle className="relative h-[150px]">
                    <Image
                        src={task.imageUrl}
                        alt={task.title}
                        fill
                        className="object-cover rounded"
                    />
                </CardTitle>
                <CardDescription className="font-semibold text-[20px] leading-none">{task.title}</CardDescription>
                <CardDescription className="font-medium text-[15px] text-gray-400 leading-none">{task.category}</CardDescription>
            </CardHeader>
            <CardContent className="leading-none">
                <ProgressBar progress={task.progress} />
            </CardContent>
            <CardContent className="leading-none flex gap-2 items-center">
                <CiClock2 size={25} />
                <p>{task.daysLeft} days left</p>
            </CardContent>
        </Card>
    );
};

export default TaskCard;


import React from "react";
import { ProgressBarProps } from "../Types/types"

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="w-full">
            <div className="flex justify-between">
                <span className="font-medium">Progress</span>
                <span className="text-black font-medium">{progress}%</span>
            </div>
            <div className="relative h-2 rounded-full bg-gray-200 mt-2">
                <div
                    className="absolute h-2 rounded-full bg-black"
                    style={{ width: `${progress}%` }}
                />
                <div
                    className="absolute w-4 h-4 bg-black rounded-full top-[-4px]"
                    style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
                />
            </div>
        </div>
    );
};

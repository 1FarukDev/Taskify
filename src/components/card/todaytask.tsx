import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { CiClock2 } from "react-icons/ci";
import { TodayTaskProps } from "../Types/types";

const TodayTask = () => {
    const Task: TodayTaskProps[] = [
        { id: 1, task: 'Understanding the tools in Figma' },
        { id: 2, task: 'Understand the basics of making designs' },
        { id: 3, task: 'Design a mobile application with figma' },
    ]
    return (
        <main>
            <Card className="border-0 shadow-md w-mx bg-white">
                <h4 className="px-3 pt-3 font-semibold text-[20px]">Today Task</h4>
                <CardHeader>
                    <CardTitle className=" relative h-[150px]">
                        <Image
                            src="https://images.pexels.com/photos/27700804/pexels-photo-27700804/free-photo-of-a-man-is-riding-a-boat-through-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Man riding a boat"
                            fill
                            className="object-cover rounded"
                        />
                    </CardTitle>

                    <CardDescription className="font-semibold text-[20px] leading-none">Creating Mobile App Design</CardDescription>
                    <CardDescription className="font-medium text-[15px] text-gray-400 leading-none">UI/UX Design</CardDescription>
                </CardHeader>
                <CardContent className="leading-none">
                    <ProgressBar progress={33} />
                </CardContent>
                <CardContent className="leading-none flex gap-2 items-center ">
                    <CiClock2 size={25} />
                    <p>3 days left</p>
                </CardContent>

                <hr className="border-t-1 border-[#F5F5F7] bg-[#F5F5F7] mx-4" />

                <CardContent className="leading-none flex gap-2 items-center w-full mt-5 justify-between">
                    <p className="font-semibold text-[20px]">Detail Task</p>
                    <p className="font-medium text-gray-500 text-[15px]">UI/UX Design</p>
                </CardContent>
                <CardContent className="leading-none flex flex-col  gap-3  w-full mt-5 justify-between">
                    {Task.map((task) => {
                        return (
                            <main key={task.id} className="flex gap-2 items-center">
                                <p className="bg-gray-100 p-3 rounded font-semibold px-4">{task.id}</p>
                                <p className="font-semibold">{task.task}</p>

                            </main>
                        )
                    })}

                </CardContent>
                <div className="pb-3 w-full px-4">

                    <button type="submit" className="bg-black py-3 rounded-[10px] text-white font-semibold w-full">Go To Detail</button>
                </div>
            </Card>

        </main>
    )
}

export default TodayTask

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

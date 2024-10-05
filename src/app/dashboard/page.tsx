'use client'
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VscBell } from "react-icons/vsc";
import Graph from "@/components/homepage/Graph";
import MentorsCard from "@/components/card/mentors";
import TaskCard from "@/components/card/task";
import Arrowright from '@/assets/icons/arrow-right.png'
import Arrowleft from '@/assets/icons/arrow-left.png'


export default function Home() {
    const mentorsData = [
        {
            name: "Curious George",
            title: "UI/UX Design",
            avatarUrl: "https://github.com/shadcn.png",
            taskCount: 40,
            rating: 4.7,
            reviewCount: 750,
        },
        {
            name: "John Doe",
            title: "Software Engineer",
            avatarUrl: "https://example.com/john.png",
            taskCount: 25,
            rating: 4.9,
            reviewCount: 320,
        },
        {
            name: "Jane Smith",
            title: "Project Manager",
            avatarUrl: "https://example.com/jane.png",
            taskCount: 32,
            rating: 4.5,
            reviewCount: 600,
        },

    ];
    const tasks: TaskProps[] = [
        {
            id: 1,
            title: "Creating Mobile App Design",
            description: "UI/UX Design",
            category: "UI/UX Design",
            progress: 33,
            daysLeft: 3,
            imageUrl: "https://images.pexels.com/photos/27700804/pexels-photo-27700804/free-photo-of-a-man-is-riding-a-boat-through-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 1,
            title: "Creating Mobile App Desgn",
            description: "UI/UX Design",
            category: "UI/UX Design",
            progress: 33,
            daysLeft: 3,
            imageUrl: "https://images.pexels.com/photos/27700804/pexels-photo-27700804/free-photo-of-a-man-is-riding-a-boat-through-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 1,
            title: "Creating Mobile App Design",
            description: "UI/UX Design",
            category: "UI/UX Design",
            progress: 33,
            daysLeft: 3,
            imageUrl: "https://images.pexels.com/photos/27700804/pexels-photo-27700804/free-photo-of-a-man-is-riding-a-boat-through-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0)


    const getVisibleMentors = () => {
        const remainingMentors = mentorsData.length - currentIndex;
        if (remainingMentors === 1 && currentIndex > 0) {
            return mentorsData.slice(currentIndex - 1, currentIndex + 1);
        }
        return mentorsData.slice(currentIndex, currentIndex + 2);
    };

    const visibleMentors = getVisibleMentors();

    const handleNextMentor = () => {
        if (currentIndex + 2 < mentorsData.length) {
            setCurrentIndex(currentIndex + 2);
        } else if (currentIndex + 1 < mentorsData.length) {

            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevMentor = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 2);
        }
    };


    const handleNextTask = () => {
        setCurrentTaskIndex((prevIndex) => {
            const nextIndex = prevIndex + 2;
            return nextIndex < tasks.length ? nextIndex : prevIndex
        });
    };

    const handlePrevTask = () => {
        setCurrentTaskIndex((prevIndex) => Math.max(prevIndex - 2, 0));
    };


    const getCurrentTasks = () => {
        const remainingTasks = tasks.length - currentTaskIndex;

        if (remainingTasks === 1 && currentTaskIndex > 0) {
            return tasks.slice(currentTaskIndex - 1, currentTaskIndex + 1);
        }
        return tasks.slice(currentTaskIndex, currentTaskIndex + 2);
    };
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

    const currentTasks = getCurrentTasks();
    return (
        <main className="bg-gray-50">
            <section className={`flex justify-between shadow-sm fixed top-0 left-[15%] right-0 z-10 p-4 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md bg-opacity-80' : 'bg-transparent'}`}>
                <div>
                    <h3 className="font-semibold text-[24px]">Hi, FarukDev</h3>
                    <p className="font-normal text-gray-500 leading-tight">Let's finish your task today!</p>
                </div>
                <div className="flex gap-5 items-center">
                    <VscBell size={30} />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </section>

            <div className="flex gap-4 justify-between px-4 pt-20">
                <div className="w-[70%]">
                    <section className="mt-10">
                        <Graph />
                    </section>

                    <section className="mt-10">
                        <div className="flex justify-between items-center mb-5">
                            <p className="font-semibold text-[20px]">Monthly Mentor</p>
                            <div className="flex gap-3 items-center">
                                <button
                                    onClick={handlePrevMentor}
                                    disabled={currentIndex === 0}
                                    className={`${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <Image src={Arrowleft} alt="Arrow left" width={10} height={10} />
                                </button>
                                <button
                                    onClick={handleNextMentor}
                                    disabled={currentIndex + 2 >= mentorsData.length}
                                    className={`${currentIndex + 2 >= mentorsData.length ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <Image src={Arrowright} alt="Arrow right" width={10} height={10} />
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {visibleMentors.map((mentor, index) => (
                                <MentorsCard
                                    key={index}
                                    name={mentor.name}
                                    title={mentor.title}
                                    avatarUrl={mentor.avatarUrl}
                                    taskCount={mentor.taskCount}
                                    rating={mentor.rating}
                                    reviewCount={mentor.reviewCount}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="py-10">
                        <div className="flex justify-between items-center mb-5">
                            <p className="font-semibold text-[20px]">Upcoming Tasks</p>
                            <div className="flex gap-3 items-center">
                                <button onClick={handlePrevTask} disabled={currentTaskIndex === 0}>
                                    <Image src={Arrowleft} alt="Arrow left" width={10} height={10} />
                                </button>
                                <button onClick={handleNextTask} disabled={currentTaskIndex + 2 >= tasks.length}>
                                    <Image src={Arrowright} alt="Arrow right" width={10} height={10} />
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {currentTasks.map(task => (
                                <TaskCard key={task.id} task={task} />
                            ))}
                        </div>
                    </section>
                </div>

                <section className="mt-10 w-[30%]">
                    {/* <WeekCalendar /> */}
                    <TodayTask />
                </section>
            </div>
        </main>

    );
}


import { format, addDays, subDays, startOfWeek } from "date-fns";
import TodayTask from "@/components/card/todaytask";
import Image from "next/image";
import { TaskProps } from "@/components/Types/types";
const WeekCalendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 0 });

    const getWeekDays = (startOfWeekDate: Date) => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            days.push(addDays(startOfWeekDate, i));
        }
        return days;
    };

    const handlePrevWeek = () => {
        setCurrentDate(subDays(currentDate, 7));
    };

    const handleNextWeek = () => {
        setCurrentDate(addDays(currentDate, 7));
    };

    const weekDays = getWeekDays(startOfCurrentWeek);
    const currentMonthYear = format(startOfCurrentWeek, "MMMM yyyy");
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-full max-w-sm">
            <div className="text-lg font-semibold mb-4">
                {currentMonthYear}
            </div>

            <div className="flex items- justify-center">

                <button
                    onClick={handlePrevWeek}
                    className="text-xl font-bold p-2 bg-white rounded-full hover:bg-gray-200"
                >
                    &lt;
                </button>


                <div className="flex items-center justify-center space-x-2">
                    {weekDays.map((day) => {
                        const isToday = format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
                        return (
                            <div key={day.toString()} className="flex flex-col items-center">
                                <div className="text-xs text-gray-500">{format(day, "EEEE").charAt(0)}</div>
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full ${isToday
                                        ? "bg-black text-white border-4 border-blue-500"
                                        : "bg-gray-100 text-black"
                                        }`}
                                >
                                    {format(day, "d")}
                                </div>
                            </div>
                        );
                    })}
                </div>


                <button
                    onClick={handleNextWeek}
                    className="text-xl font-bold p-2 bg-white rounded-full hover:bg-gray-200"
                >
                    &gt;
                </button>
            </div>
        </div>
    );

};


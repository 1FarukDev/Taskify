'use client'
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VscBell } from "react-icons/vsc";
import Graph from "@/components/homepage/Graph";
import MentorsCard from "@/components/card/mentors";
import Image from "next/image";
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
        {
            name: "Jane Smith",
            title: "Project Manager",
            avatarUrl: "https://example.com/jane.png",
            taskCount: 32,
            rating: 4.5,
            reviewCount: 600,
        },
        {
            name: "Jane Smith",
            title: "Project Manager",
            avatarUrl: "https://example.com/jane.png",
            taskCount: 32,
            rating: 4.5,
            reviewCount: 600,
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
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0)


    const getVisibleMentors = () => {
        const remainingMentors = mentorsData.length - currentIndex;
        if (remainingMentors === 1 && currentIndex > 0) {
            // When there's only 1 mentor left, show the last 3 cards
            return mentorsData.slice(currentIndex - 2, currentIndex + 1);
        } else if (remainingMentors === 2 && currentIndex > 0) {
            // When there are only 2 mentors left, show the last 3 cards
            return mentorsData.slice(currentIndex - 1, currentIndex + 2);
        }
        // Otherwise, show 3 cards starting from the current index
        return mentorsData.slice(currentIndex, currentIndex + 3);
    };
    
    const visibleMentors = getVisibleMentors();
    
    const handleNextMentor = () => {
        // If there are enough mentors left to show another full set of 3
        if (currentIndex + 3 < mentorsData.length) {
            setCurrentIndex(currentIndex + 3);
        } else if (currentIndex + 2 < mentorsData.length) {
            // If only 2 mentors are left
            setCurrentIndex(currentIndex + 2);
        } else if (currentIndex + 1 < mentorsData.length) {
            // If only 1 mentor is left
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    const handlePrevMentor = () => {
        // Go back by 3 mentors, but don't go below 0
        if (currentIndex > 2) {
            setCurrentIndex(currentIndex - 3);
        } else if (currentIndex > 0) {
            setCurrentIndex(0);
        }
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

    return (
        <main className="bg-gray-50 p-4">
            <section className={`flex justify-between shadow-sm fixed top-0 left-[15%] right-0 z-10 p-4 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md bg-opacity-80' : 'bg-transparent'}`}>
                <div>
                    <h3 className="font-semibold text-[24px]">Explore Mentors</h3>
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
                <div className="w-[100%]">


                    <section className="mt-10">
                        <div className="flex justify-between items-center mb-5">
                            <p className="font-semibold text-[20px]">Recent Mentor</p>
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

                </div>


            </div>
            <section className="mt-10 px-4">
                <div className="flex justify-between items-center mb-5">
                    <p className="font-semibold text-[20px]">Mentor</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {mentorsData.map((mentor, index) => (
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
        </main>

    );
}


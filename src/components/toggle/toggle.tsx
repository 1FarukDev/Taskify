"use client"
import React, { useState, useEffect } from "react"
import { ToggleProps } from "../Types/types";


const Toggle: React.FC<ToggleProps> = ({ toggleValue, onToggleChange }) => {
    const [toggle, setToggle] = useState(toggleValue);

    useEffect(() => {
        setToggle(toggleValue);  
    }, [toggleValue]);

    const handleChangeToggle = () => {
        const newToggleValue = !toggle;
        setToggle(newToggleValue);
        onToggleChange(newToggleValue);
    };

    return (
        <main>
            <div className="border w-[60px] border-[#F5F5F7] rounded-full cursor-pointer" onClick={handleChangeToggle}>
                <div className="flex h-full justify-between">
                    {!toggle && <div className="w-1/2">
                        <div className="bg-[#F5F5F7] m-1  rounded-full w-full  h-[20px]"></div>
                    </div>}
                    {toggle && <div className="w-full float-right">
                        <div className="bg-blue-500 m-1 h-[20px] rounded-full float-right w-1/2"></div>
                    </div>}
                </div>
            </div>
        </main>
    );
};

export default Toggle;

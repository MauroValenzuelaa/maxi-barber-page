import React from "react";
import { Icon } from "lucide-react";
export const Card = ({
    icon: Icon,
    title,
    description,
    price,
    onClick,
    isSelected,
}) => {
    return (
        <>
            <div
                onClick={onClick}
                className={`relative group border w-80 h-70 bg-black rounded-lg flex flex-col justify-center gap-3 p-8 cursor-pointer transition duration-300
                ${
                    isSelected
                        ? "border-amber-500"
                        : "border-neutral-800 hover:border-amber-500"
                }
            `}
            >
                <div className="bg-neutral-800 rounded-full w-10 h-10 flex items-center justify-center">
                    <Icon className="text-white" size={30} color="white"></Icon>
                </div>
                <h3 className="text-2xl font-[Montserrat] font-extrabold text-white">
                    {title}
                </h3>
                <p className="text-[#ffffff8e]">{description}</p>
                <p className="text-[#fda918] font-[Montserrat] font-extrabold text-2xl">
                    {price}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-300 group-hover:w-full"></div>
            </div>
        </>
    );
};

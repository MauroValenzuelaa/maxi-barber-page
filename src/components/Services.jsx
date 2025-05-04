import React from "react";
import { Card } from "./Ui/Card";
import { Scissors } from "lucide-react";
export const Services = () => {
    return (
        <>
            <section className="w-full h-135 flex flex-col justify-center items-center gap-5 mt-10">
                <div className="flex flex-col w-full justify-center items-center gap-3">
                    <div className="flex gap-2 mr-2">
                        <div className="bg-blue-500 px-4 py-0.5"></div>
                        <div className="bg-red-500 px-4 py-0.5"></div>
                    </div>
                    <h1 className="text-white text-4xl font-extrabold font-[Montserrat]">
                        NUESTROS SERVICIOS
                    </h1>
                    <p className="text-[#ffffff8e] text-center w-[40%] text-balance">
                        Ofrecemos una amplia gama de servicios de barbería para
                        satisfacer todas tus necesidades. Nuestros barberos
                        expertos están capacitados para brindarte la mejor
                        experiencia.
                    </p>
                </div>
                <div className="w-full flex justify-center gap-10">
                    <Card
                        icon={Scissors}
                        title="CORTE CLÁSICO"
                        description="Corte tradicional con tijera y máquina, incluye lavado y peinado."
                        price="$ 1500"
                        isHighlighted
                    ></Card>
                    <Card
                        icon={Scissors}
                        title="Corte Clásico"
                        description="Corte tradicional con tijera y máquina, incluye lavado y peinado."
                        price="$ 1500"
                        isHighlighted
                    ></Card>
                    <Card
                        icon={Scissors}
                        title="Corte Clásico"
                        description="Corte tradicional con tijera y máquina, incluye lavado y peinado."
                        price="$ 1500"
                        isHighlighted
                    ></Card>
                    <Card
                        icon={Scissors}
                        title="Corte Clásico"
                        description="Corte tradicional con tijera y máquina, incluye lavado y peinado."
                        price="$ 1500"
                        isHighlighted
                    ></Card>
                </div>
                <button className="bg-white text-black mt-5 px-7 py-2 rounded-md border border-[#ffffff30] font-semibold cursor-pointer hover:bg-[#ffffffb5] transition duration-200">
                    RESERVAR AHORA
                </button>
            </section>
        </>
    );
};

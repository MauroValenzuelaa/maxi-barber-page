import React from "react";
import { Card } from "./Ui/Card";
import { Scissors, Beaker, SprayCan } from "lucide-react";
import { useState } from "react";
import { enviarWhatsApp } from "../helpers/whatsappMsj";
export const Services = () => {
    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

    const handleSeleccionarServicio = (titulo) => {
        setServicioSeleccionado(titulo);
    };

    const handleReservar = () => {
        if (!servicioSeleccionado) {
            alert("Por favor, seleccioná un servicio antes de reservar.");
            return;
        }

        const mensaje = `Hola, quiero reservar un turno para el servicio: ${servicioSeleccionado}.
¿Qué horario tenés disponible?`;

        enviarWhatsApp(mensaje);
    };
    return (
        <>
            <section
                id="services"
                className="scroll-mt-16 w-full h-135 flex flex-col justify-center items-center gap-5 mt-10"
            >
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
                        price="$ 7000"
                        onClick={() =>
                            handleSeleccionarServicio("CORTE CLÁSICO")
                        }
                        isSelected={servicioSeleccionado === "CORTE CLÁSICO"}
                    ></Card>
                    <Card
                        icon={Beaker}
                        title="CORTE Y BARBA"
                        description="Corte con tijera y máquina, incluye perfilado de barba."
                        price="$ 8000"
                        onClick={() =>
                            handleSeleccionarServicio("CORTE Y BARBA")
                        }
                        isSelected={servicioSeleccionado === "CORTE Y BARBA"}
                    ></Card>
                    <Card
                        icon={Scissors}
                        title="CORTE Y CEJAS"
                        description="Corte con tijera y máquina, incluye perfilado de cejas."
                        price="$ 8000"
                        onClick={() =>
                            handleSeleccionarServicio("CORTE Y CEJAS")
                        }
                        isSelected={servicioSeleccionado === "CORTE Y CEJAS"}
                    ></Card>
                    <Card
                        icon={SprayCan}
                        title="CORTE COMPLETO"
                        description="Corte con tijera y maquina, incluye perfilado de barba y cejas."
                        price="$ 9000"
                        onClick={() =>
                            handleSeleccionarServicio("CORTE COMPLETO")
                        }
                        isSelected={servicioSeleccionado === "CORTE COMPLETO"}
                    ></Card>
                </div>
                <button
                    onClick={handleReservar}
                    className="bg-white mb-10 text-black mt-5 px-7 py-2 rounded-md border border-[#ffffff30] font-semibold cursor-pointer hover:bg-[#ffffffb5] transition duration-200"
                >
                    RESERVAR CITA
                </button>
            </section>
        </>
    );
};

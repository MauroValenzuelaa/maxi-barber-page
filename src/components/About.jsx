import React from "react";
import { Check } from "lucide-react";

export const About = () => {
    return (
        <>
            <section
                id="about"
                className="relative w-full h-135 grid grid-cols-2 items-center text-white bg-[#2E2E2E]"
            >
                <div className="flex justify-center items-center">
                    <div className="bg-white w-[80%] h-100 flex items-center text-black justify-center rounded-xl">
                        hola
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 mr-2">
                        <div className="bg-blue-500 px-4 py-0.5"></div>
                        <div className="bg-red-500 px-4 py-0.5"></div>
                    </div>
                    <h2 className="text-4xl font-extrabold font-[Montserrat]">
                        SOBRE MAXI BARBER
                    </h2>
                    <p className="text-balance text-lg text-[#ffffff8e] pt-4 pb-6 font-[Montserrat]">
                        Fundada con la pasión por el arte de la barbería, Maxi
                        Barber se ha convertido <br />
                        en un referente del estilo masculino. Combina técnicas
                        tradicionales con tendencias <br />
                        modernas para ofrecer el mejor servicio a nuestros
                        clientes.
                    </p>
                    <div className="flex gap-20 pb-10 font-[Montserrat]">
                        <div>
                            <div className="pb-4 flex items-center gap-2">
                                <div className="rounded-full bg-[#3e3e3e] w-6 h-6 flex justify-center items-center">
                                    <Check size={20} color="#fda918" />
                                </div>
                                <p>Barbero profesional certificado</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-[#3e3e3e] w-6 h-6 flex justify-center items-center">
                                    <Check size={18} color="#fda918" />
                                </div>
                                <p>Ambiente exclusivo y confortable</p>
                            </div>
                        </div>
                        <div>
                            <div className="pb-4 flex items-center gap-2">
                                <div className="rounded-full bg-[#3e3e3e] w-6 h-6 flex justify-center items-center">
                                    <Check size={20} color="#fda918" />
                                </div>
                                <p>
                                    Productos premium para el cuidado del
                                    cabello
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-[#3e3e3e] w-6 h-6 flex justify-center items-center">
                                    <Check size={20} color="#fda918" />
                                </div>
                                <p>Atención personalizada</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div>
                            <p className="text-[#fda918] font-extrabold text-3xl text-center font-[Montserrat]">
                                5+
                            </p>
                            <p className="text-[#ffffff8e] text-sm font-[Montserrat]">
                                Años de experiencia
                            </p>
                        </div>
                        <div>
                            <p className="text-[#fda918] font-extrabold text-3xl text-center font-[Montserrat]">
                                1000+
                            </p>
                            <p className="text-[#ffffff8e] text-sm font-[Montserrat]">
                                Clientes satisfechos
                            </p>
                        </div>
                        <div>
                            <p className="text-[#fda918] font-extrabold text-3xl text-center font-[Montserrat]">
                                1
                            </p>
                            <p className="text-[#ffffff8e] text-sm font-[Montserrat]">
                                Barbero experto
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

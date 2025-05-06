import React from "react";
import { Phone, Clock, MapPin, Mail, Instagram } from "lucide-react";
import { enviarWhatsApp } from "../helpers/whatsappMsj";

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const nombre = e.target[0].value;
        const telefono = e.target[1].value;
        const email = e.target[2].value;
        const mensaje = e.target[3].value;

        const texto = `Hola, soy
Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}
Mensaje: ${mensaje}`;

        enviarWhatsApp(texto);
    };

    return (
        <>
            <section
                id="contact"
                className="bg-[#2E2E2E] w-full h-145 text-white flex justify-center items-center"
            >
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex gap-2 mr-2 mb-1">
                                <div className="bg-blue-500 px-4 py-0.5"></div>
                                <div className="bg-red-500 px-4 py-0.5"></div>
                            </div>
                            <h2 className="text-4xl font-bold font-[Montserrat]">
                                CONTACTO
                            </h2>
                        </div>
                        <p className="w-2xl font-[Montserrat] text-[#ffffff8e]">
                            ¿Tienes alguna pregunta o quieres reservar una cita?
                            Contáctanos y te responderemos a la brevedad.
                        </p>
                    </div>
                    <div className="flex gap-40 mt-5">
                        <div className="flex flex-col gap-5 mb-5">
                            <div>
                                <div className="flex gap-2">
                                    <Phone size={24} color="#fda918" />
                                    <p className="font-bold font-[Montserrat]">
                                        Teléfono
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#ffffff8e] font-[Montserrat] mt-3">
                                        11-3144-3759
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <Clock size={24} color="#fda918" />
                                    <p className="font-bold font-[Montserrat]">
                                        Horario
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#ffffff8e] font-[Montserrat] mt-3">
                                        Lun-Sab: 9:00-20:00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col">
                            <div>
                                <div className="flex gap-2">
                                    <MapPin size={24} color="#fda918" />
                                    <p className="font-bold font-[Montserrat]">
                                        Dirección
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#ffffff8e] font-[Montserrat] mt-3">
                                        165 6368, Guillermo E. Hudson
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <Mail size={24} color="#fda918" />
                                    <p className="font-bold font-[Montserrat]">
                                        Email
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#ffffff8e] font-[Montserrat] mt-3">
                                        info@maxibarber.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold font-[Montserrat]">
                            Seguinos en redes sociales!
                        </h3>
                        <div className="bg-black p-2 rounded-full w-9 mt-3">
                            <a
                                href="https://www.instagram.com/maxi.barber.okk/"
                                target="_blank"
                            >
                                <Instagram color="#fda918" size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    action=""
                    className="bg-black rounded-lg p-5 w-2xl"
                >
                    <h2 className="text-2xl font-bold font-[Montserrat]">
                        ENVIAME UN MENSAJE
                    </h2>
                    <div className="flex gap-2 mb-5 mt-5 w-full justify-center">
                        <input
                            type="text"
                            required
                            name=""
                            id=""
                            className="border p-2 w-full rounded-md border-neutral-800 font-[Montserrat]"
                            placeholder="Nombre"
                        />
                        <input
                            type="tel"
                            required
                            name=""
                            id=""
                            className="border p-2 w-full rounded-md border-neutral-800 font-[Montserrat]"
                            placeholder="Telefono"
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <input
                            type="email"
                            required
                            name=""
                            id=""
                            className="border p-2 rounded-md border-neutral-800 font-[Montserrat]"
                            placeholder="Email"
                        />
                        <textarea
                            required
                            name=""
                            id=""
                            className="border rounded-md border-neutral-800 font-[Montserrat] resize-none h-40 p-2"
                            placeholder="Mensaje"
                        ></textarea>
                        <button className="bg-white text-black px-4 py-2 rounded-md cursor-pointer font-[Montserrat] hover:bg-[#ffffffd5] transition duration-200">
                            ENVIAR MENSAJE
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

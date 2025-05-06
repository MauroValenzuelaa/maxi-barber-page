import React from "react";
import { Phone } from "lucide-react";
import { enviarWhatsApp } from "../helpers/whatsappMsj";
export const Navbar = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const texto = `Hola, quiero reservar un turno! Que horario tenes disponible?`;

        enviarWhatsApp(texto);
    };

    const navLinks = [
        { name: "Inicio", href: "#" },
        { name: "Sobre Nosotros", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <>
            <header
                id="home"
                className="sticky top-0 z-50 w-full border-b border-b-[#ffffff1e] bg-[#1313137e] backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
                <div className="flex h-16 items-center justify-around">
                    <div>
                        <a href="#" className="flex items-center gap-1">
                            <img
                                src="/src/img/Logomaxi.png"
                                alt="Maxi Barber logo"
                                className="rounded-full"
                                width={50}
                                height={50}
                            />
                            <p className="text-gray-50 font-bold text-2xl font-[Montserrat]">
                                MAXI BARBER
                            </p>
                        </a>
                    </div>

                    {/* Acá metemos los links */}
                    <nav className="hidden md:flex md:items-center md:gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-gray-50 cursor-pointer hover:text-[#ffffffd5] transition duration-200 font-[Montserrat]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <p className="text-[#fda918] font-semibold mr-2 flex gap-2 items-center font-[Montserrat]">
                            <Phone size={18} />
                            11-3144-3759
                        </p>
                        <button
                            onClick={handleSubmit}
                            className="bg-white text-black px-4 py-2 rounded-md cursor-pointer font-[Montserrat] hover:bg-[#ffffffd5] transition duration-200"
                        >
                            RESERVAR
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

import { Scissors } from "lucide-react";
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerLinks = [
        { name: "Inicio", href: "#" },
        { name: "Sobre Nosotros", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Contacto", href: "#contact" },
    ];

    const servicesLinks = [
        { name: "Corte de Cabello", href: "#services" },
        { name: "Cabello y Barba", href: "#services" },
        { name: "Cabello y Cejas", href: "#services" },
        { name: "Completo", href: "#services" },
    ];
    return (
        <>
            <section className="text-white w-full h-90 flex flex-col gap-10 items-center justify-center">
                <div className="flex w-full justify-around items-center">
                    <div>
                        <a href="#" className="flex items-center gap-2">
                            <img
                                src="/src/img/Logomaxi.png"
                                alt="logo-maxi"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-[Montserrat] font-bold">
                                MAXI BARBER
                            </h3>
                        </a>
                        <p className="text-[#ffffff8e]">
                            Barbería de estilo con los mejores cortes y
                            servicios para caballeros.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-[Montserrat] font-bold">
                            ENLACES RAPIDOS
                        </h3>
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-[#ffffff8e] cursor-pointer hover:text-[#ffffffd5] transition duration-200 font-[Montserrat]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-[Montserrat] font-bold">
                            SERVICIOS
                        </h3>
                        {servicesLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-[#ffffff8e] cursor-pointer hover:text-[#ffffffd5] transition duration-200 font-[Montserrat]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-[Montserrat] font-bold">
                            HORARIOS
                        </h3>
                        <div className="flex gap-10 text-[#ffffff8e]">
                            <p>Lunes - Viernes</p>
                            <p>9:00 - 20:00</p>
                        </div>
                        <div className="flex gap-10 text-[#ffffff8e]">
                            <p>Sábados</p>
                            <p className="ml-12">9:00 - 18:00</p>
                        </div>
                        <div className="flex gap-10 text-[#ffffff8e]">
                            <p>Domingos</p>
                            <p className="ml-12">Cerrado</p>
                        </div>
                        <div>
                            <p className="flex text-[#fda918] gap-2 items-center">
                                <Scissors size={19}></Scissors> 11-3144-3759
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t w-7xl h-10 text-center text-sm border-t-[#ffffff20] flex flex-col justify-end">
                    <p className="text-neutral-600">
                        © {currentYear} Maxi Barber. Todos los derechos
                        reservados.
                    </p>
                </div>
            </section>
        </>
    );
};

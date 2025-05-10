import { Scissors } from "lucide-react";
import { enviarWhatsApp } from "../helpers/whatsappMsj";
export const Hero = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const texto = `Hola, quiero reservar un turno! Que horario tenes disponible?`;

        enviarWhatsApp(texto);
    };
    return (
        <>
            <section
                id="hero"
                className="relative w-full flex items-center justify-center h-160 bg-[#0a0a0a] text-gray-100"
            >
                <div className="relative z-10 grid items-center gap-6 md:grid-cols-2 md:gap-12">
                    <div className="relative flex flex-col items-start ">
                        <div className="flex gap-2 ml-1">
                            <div className="bg-blue-500 px-5 py-0.5"></div>
                            <div className="bg-red-500 px-5 py-0.5"></div>
                        </div>
                        <h1 className="text-7xl font-bold font-[Montserrat]">
                            ESTILO Y{" "}
                            <span className="text-[#fda918]">PRECISIÓN</span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-xl text-[#ffffff8e] font-[Montserrat]">
                            Experto en cortes clásicos y modernos. Donde cada
                            cliente recibe un servicio personalizado de la más
                            alta calidad.
                        </p>
                        <div className="flex gap-2 mt-6">
                            <button
                                onClick={handleSubmit}
                                className="flex items-center gap-2 bg-white text-black px-7 py-2 rounded-md cursor-pointer hover:bg-[#ffffffe7] transition duration-200"
                            >
                                <Scissors size={20} />
                                RESERVAR AHORA
                            </button>
                            <a href="#services">
                                <button className="bg-black text-white px-7 py-2 rounded-md border border-[#ffffff30] font-semibold cursor-pointer hover:bg-[#ffffff25] transition duration-200">
                                    VER SERVICIOS
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="relative mx-auto aspect-square w-full max-w-md rounded-full border-4 border-muted p-4 md:ml-auto border-[#ffffff2d]">
                        <img
                            src="/src/img/Logomaxi.png"
                            alt="Logo Maxi Barber"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

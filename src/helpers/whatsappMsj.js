export const enviarWhatsApp = (texto) => {
    const url = `https://wa.me/541131443759?text=${encodeURIComponent(texto)}`;
    window.location.href = url;
};

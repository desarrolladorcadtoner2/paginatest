import React from "react";
const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold">CONTACTANOS</h1>
            <div className="mt-10 flex gap-6">
                <a href="#" className="hover:opacity-80">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8" />
                </a>

                <a href="#" className="hover:opacity-80">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-8 h-8" />
                </a>
            </div >

            <div className="flex flex-col items-center w-full mt-6">
                <p className="text-center font-sans">"Desarrollado con pasión y Creando soluciones digitales que mejoran la experiencia del usuario y facilitan la innovación."</p>
                <p>© 2025 Todos los derechos reservados. Prohibida la reproducción total o parcial sin autorización.</p>


            </div>


        </footer>
    );
}
export default Footer;
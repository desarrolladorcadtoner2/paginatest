import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contacto() {
    return (
        <>
            <Header />
            <div className="bg-white">
                <main className="py-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-bold text-left text-gray-800">CONTACTO</h1>
                        <p className="mt-4 text-lg text-black text-left">Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</p>
                    </div>
                </main>
            </div>
            <br />
            <br />
            <Footer />
        </>
    );
}
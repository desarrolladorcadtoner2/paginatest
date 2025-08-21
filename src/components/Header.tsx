import React from "react";
const Header =()=> {
    return (
        <header className=" py-6">
            <div className="max-w-screen-lg  mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 ml-6">
                    <h1>HOLA MUNDO</h1>
                </div>



                <nav>
                    <table className="w-xs flex-row-reverse border-separate border-spacing-4">
                        <tbody>
                            <tr>
                                <td><a href="/" className="text-black-800   ">INICIO</a></td>
                                <td><a href="/productos" className="text-black-800   ">PRODUCTOS</a></td>
                                <td><a href="/contacto" className="text-black-800   ">CONTACTO</a></td>
                                <td> <button className="bg-black text-white p-2 rounded-lg">Buscar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </nav>
            </div>
        </header>
    );

};
export default Header;

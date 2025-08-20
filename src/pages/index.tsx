import React from "react";

export default function Home() {
  return (
    <>
      <header className=" py-6">
        <div className="max-w-screen-lg  mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 ml-6">
            <h1>HOLA MUNDO</h1>
          </div>



          <nav>
            <table className="w-xs flex-row-reverse border-separate border-spacing-4">
              <tbody>
                <tr>
                  <td><a href="#" className="text-black-800   ">INICIO</a></td>
                  <td><a href="#" className="text-black-800   ">PRODUCTOS</a></td>
                  <td><a href="#" className="text-black-800   ">CONTACTO</a></td>
                  <td> <button className="bg-black text-white p-2 rounded-lg">Buscar</button></td>
                </tr>
              </tbody>
            </table>
          </nav>
        </div>
      </header>

      <div className="bg-gray-100">
        <main className="py-10 px-4  sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-left text-gray-800">BIENVENIDO A MI PROYECTO</h1>
            <p className="mt-4 text-lg  text-black text-left">Bienvenido a mi página web. Este es el primer paso en el mundo del desarrollo web, donde podrás aprender y explorar nuevas tecnologías. ¡Hoy comenzamos con un simple "Hola Mundo"! Estamos construyendo algo grande. Acompáñame en este viaje de aprendizaje y creación.</p>
            <button className="mt-6 bg-black  text-white p-2 rounded-lg">Entrar</button>
            <img src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg" alt="ejemplo"
            className="h-200 w-800" />

          </div>
        </main>
        <div><img src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg" alt="ejemplo"
          className="h-200 w-800" />
</div>




      </div>

      <footer className="bg-blue-600 text-white py-20 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 Equipos y Superficies de México</p>
          <div className="mt-4">
            <a href="https://wa.me/yourphonenumber" target="_blank" className="flex justify-center items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 mr-2 " />
              WhatsApp San Luis Potosí
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

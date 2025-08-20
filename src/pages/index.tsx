import React from "react";

export default function Home() {
  return (
    <>
      <header className=" py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
                  <button className="bg-black text-white p-2 rounded-lg">Buscar</button>
                </tr>
              </tbody>
            </table>
          </nav>



          

        </div>
      </header>

      <div className=" w-full h-auto grid grid-cols-2 bg-gray-100">
        <main className="py-10 px-4  sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-left text-gray-800">BIENVENIDO A MI PROYECTO</h1>
            <p className="mt-4 text-lg text-gray-600 text-left">Bienvenido a mi página web. Este es el primer paso en el mundo del desarrollo web, donde podrás aprender y explorar nuevas tecnologías. ¡Hoy comenzamos con un simple "Hola Mundo"! Estamos construyendo algo grande. Acompáñame en este viaje de aprendizaje y creación.</p>

            
          </div>
        </main>

        <section className="mt-10  text-center ml-4 mr-4">
          <p className="text-2xl text-gray-500">Contamos con Asesoría Técnica</p>
          <div className="w-full flex justify-center space-x-12">
            <div className="bg-white flex mr-xl justify-center w-1/4  p-2 border-2 border-blue-200 rounded-lg shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/02/09/41/talking-8734281_1280.png"

                alt="Producto 1"

                className="w-100 h-100 object-cover rounded-md"
              />
            </div>
            <div className="bg-white w-s p-2 rounded-lg shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2024/10/17/07/53/ai-generated-9126790_640.jpg"
                alt="Producto 2"
                className="w-100 h-100 object-cover rounded-md"
              />
            </div>
            <div className="bg-white w-s p-2 rounded-lg shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2025/04/29/14/43/therapy-9567309_1280.png"
                alt="Producto 3"
                className="w-100 h-100 object-cover rounded-md"



              />
            </div>

          </div>

          <div className="bg-white p-6 flex flex-col items-center rounded-lg shadow-lg mx-4 space-y-6">
            <h1 className="font-bold text-2xl mb-4 text-center">Beton Trowel </h1>
            <p className="text-gray-700 text-center mx-auto max-w-prose">Beton Trowel, fabricante en Bélgica de equipo para concreto incluyendo allanadoras para operador montado (Ride On) y manuales (Walk Behind) junto con herramientas de mano para el acabado de concreto como flotas, fresnos y reglas vibratorias.</p>"
            <iframe
              width="560"
              height="400"
              src="https://www.youtube.com/embed/Pwrjz7u_4y8?si=7if8dRDhvYjxZ4dB"

              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="rounded-lg mx-auto"
            />

          </div>

        </section>



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

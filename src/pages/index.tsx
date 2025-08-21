import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <><Header/>





      <div className="bg-white">
        <main className="py-10 px-4  sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-left text-gray-800">BIENVENIDO A MI PROYECTO</h1>
            <p className="mt-4 text-lg  text-black text-left">Bienvenido a mi página web. Este es el primer paso en el mundo del desarrollo web, donde podrás aprender y explorar nuevas tecnologías. ¡Hoy comenzamos con un simple "Hola Mundo"! Estamos construyendo algo grande. Acompáñame en este viaje de aprendizaje y creación.</p>
            <button className="mt-4 bg-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500  text-white p-2 rounded-lg">Entrar</button>


          </div>
        </main>
        <div className="flex justify-center items-center   p-10">
          <img src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg" alt="ejemplo"
            className="rounded-t-lg h-auto w-200 " />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-6 ">NUESTRO EQUIPO</h1>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-4">
            <div>
              <img className="w-100 h-80 rounded-lg object-cover" src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
                alt="pro" />
              <h2 className="font-bold text-xl mt-2 mb-2">ALPHA</h2>
              <p className="text-BLACK text-base  mb-4">
                Alpha es un desarrollador web apasionado por crear experiencias digitales únicas. Con un enfoque en la usabilidad y el diseño, siempre busca mejorar sus habilidades y aprender nuevas tecnologías.
              </p>
            </div>
            <div>
              <img className="w-100 h-80 rounded-lg object-cover" src="https://media.istockphoto.com/id/2114295998/photo/asian-and-indian-developer-devops-team-discussion-about-coding-promgram-with-software.jpg?s=1024x1024&w=is&k=20&c=IvznpwiBeWdS9SkwEu3HdfMECqHjXHOcw8wvUsOS1vw="
                alt="react" />
              <div className="font-bold text-xl mt-2 mb-2">PROXIMIDAD</div>
              <p className="text-BLACK text-base  mb-4">
                Alpha es un desarrollador web apasionado por crear experiencias digitales únicas. Con un enfoque en la usabilidad y el diseño, siempre busca mejorar sus habilidades y aprender nuevas tecnologías.
              </p>
            </div>
            <div>
              <img className="w-100 h-80 rounded-lg object-cover" src="https://media.istockphoto.com/id/1705600760/photo/group-of-asian-people-software-developers-using-computer-to-write-code-sitting-at-desk-with.jpg?s=1024x1024&w=is&k=20&c=4gc4wkj5UVYk8sCM6YG9-lqMsfjVKAbyIBsxBpa2EFQ="
                alt="promax" />
              <div className="font-bold text-xl mt-2 mb-2">BASE</div>
              <p className="text-BLACK text-base mb-4">
                Alpha es un desarrollador web apasionado por crear experiencias digitales únicas. Con un enfoque en la usabilidad y el diseño, siempre busca mejorar sus habilidades y aprender nuevas tecnologías.
              </p>
            </div>

          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="flex flex-row max-w-7xl mx-auto p-4">

        <div className="max-w-lg lg:flex-row justify-between gap-6">
          <h1 className="max-w-7xl mx-auto text-3xl font-semibold mb-6 ">CONOCIMIENTOS</h1>
          <h2 className="font-bold">JavaScript</h2>
          <p >JavaScript es uno de los lenguajes de programación más populares para el desarrollo web,
            principalmente usado para crear interactividad en las páginas. Se ejecuta en el navegador,
            lo que permite una experiencia de usuario dinámica. JavaScript es fundamental para el
            desarrollo de aplicaciones web modernas, en conjunto con HTML y CSS.</p>


          <h2 className="font-bold">Python</h2>
          <p>Python es un lenguaje de programación de alto nivel, conocido por su simplicidad
            y legibilidad. Es muy utilizado en análisis de datos, inteligencia artificial,
            automatización y desarrollo web. Python tiene una amplia comunidad y una vasta colección
            de bibliotecas que facilitan tareas complejas, como NumPy, TensorFlow y Django.</p>


          <h2 className="font-bold">Java</h2>
          <p>Java es un lenguaje de programación de propósito general,
            orientado a objetos, conocido por su portabilidad. Se usa ampliamente en el desarrollo de
            aplicaciones de gran escala, aplicaciones móviles (Android) y sistemas empresariales.
            Java es conocido por su principio de "escribir una vez, ejecutar en
            cualquier lugar",lo que significa  que el código Java puede ejecutarse en
            diferentes plataformas sin necesidad de modificaciones.</p>
          <div className="flex space-x-4 mt-6">
            <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">Informacion</button>
            <button className="bg-gray-300 text-black py-2 px-6 rounded hover:bg-gray-400">Acerca de...</button>
          </div>

        </div>

        <div  >
          <img className="rounded-lg ml-20 w-150 h-155 " src="https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_1280.jpg"
            alt="sf"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="max-w-7xl mx-auto  p-4">
        <h1 className="text-2xl font-semibold ">OTROS TEMAS</h1>
        <div className="flex flex-justify-between max-w-7xl mx-auto gap-8 mt-10">
          <img className="rounded-lg  w-200 h-85 " src="https://cdn.pixabay.com/photo/2025/08/03/15/10/cat-9752539_1280.jpg" alt="animales" />
          <img className="rounded-lg  w-200 h-85 " src="https://cdn.pixabay.com/photo/2022/10/23/13/43/lake-7541307_1280.jpg" alt="paisajes" />
        </div>
        <div className="flex flex-col-2 gap-4 mt-10">
          <div><h2 className="text-2xl font-bold">Animales</h2>
            <p>"Los animales nos enseñan a vivir en armonía con la naturaleza,
              cada uno con su propio rol en el ecosistema,
              desde el majestuoso león hasta la pequeña hormiga trabajando en equipo."</p></div>
          <div><h2 className="text-2xl  font-bold">Paisajes</h2>
            <p>""Un paisaje al atardecer nos regala la calma y la belleza de la tierra,
              con los colores del cielo reflejándose en las montañas y el agua,
              creando un cuadro natural lleno de paz.</p></div>
        </div>

      </div>
      <br />
      <br />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">COMENTARIOS</h1>
        <div className="flex max-w-7xl mx-auto gap-8 mt-10">
          <div className="max-w-sm mx-auto  bg-white shadow-xl rounded-lg overflow-hidde p-6">
            <p className="text-lg mt-6 font-semibold text-gray-800">"BUENA iNFORMACION"</p>
            <div className="flex items-center mt-4">
              <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="maria" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">Maria99</p>
                <p className="text-xs text-gray-500">Investiagdora</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto  bg-white shadow-xl rounded-lg overflow-hidde p-6">
            <p className="text-lg mt-6 font-semibold text-gray-800">"BUENA iNFORMACION"</p>
            <div className="flex items-center mt-4">
              <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="maria" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">Maria99</p>
                <p className="text-xs text-gray-500">Investiagdora</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidde p-6">
            <p className="text-lg mt-6 font-semibold text-gray-800">"BUENA iNFORMACION"</p>
            <div className="flex items-center mt-4">
              <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="maria" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">Maria99</p>
                <p className="text-xs text-gray-500">Investiagdora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-gray-200 flex justify-between items-center w-full max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">chatGPT</h1>
        <div className="flex gap-6">
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800">IR A CHAT</button>
          <button className="bg-gray-400 text-black py-2 px-6 rounded-full hover:bg-gray-600">INFORMACION</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}



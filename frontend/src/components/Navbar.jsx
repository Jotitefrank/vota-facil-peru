import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Vota Fácil Perú</h1>
        <ul className="flex space-x-4">
          <li><a href="#inicio" className="hover:underline">Inicio</a></li>
          <li><a href="#onpe" className="hover:underline">ONPE</a></li>
          <li><a href="#jne" className="hover:underline">JNE</a></li>
          <li><a href="#news" className="hover:underline">Noticias</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
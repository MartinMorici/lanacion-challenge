import React from 'react'
import MenuIcon from '../images/menu.svg'
import SearchIcon from '../images/search.svg'
import Logo from '../images/logo.svg'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='shadow-md z-50 px-3'>
        <div className='max-w-[1280px] mx-auto flex justify-between py-5 text-sm'>
            <div className='hidden md:flex justify-center items-center'>
                <div className=' gap-3 items-center flex'>
                    <Image src={MenuIcon} alt="Icono menu hamburguesa" width={35} />
                    <span>MENÚ</span>
                </div>
                <div className='relative flex items-center justify-center'>
                    <input className='ml-10 border h-10  border-gray-300 rounded-md px-3' type="text" placeholder='Buscar' />
                    <Image className='block absolute right-3' width={22} src={SearchIcon} alt="Icono busqueda"/>
                </div>
            </div>

            <Image className='w-[200px] sm:w-[300px]' src={Logo} width={300} alt='Logo La Nación'/>

            <div className='flex gap-6'>
                <button className='bg-yellow-300 border border-black px-4 text-black rounded-md'>SUSCRIBITE</button>
                <button className='border hidden md:block border-blue-700 px-4 text-blue-700 rounded-md'>INGRESAR</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
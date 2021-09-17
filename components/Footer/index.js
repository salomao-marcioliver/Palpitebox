import React from "react";

const Footer = () => {
    return (
        <div className='bg-gray-700 text-center'>
            <div className='container mx-auto py-4 text-white font-bold'>
                Projeto desenvolvido por: Salomão Marcioliver -  
                <a className='hover:text-blue-200' href='https://github.com/salomao-marcioliver'> Linkedin </a> | 
                <a className='hover:text-blue-200' href='https://www.linkedin.com/in/salom%C3%A3o-marcioliver/'> Github </a> | 
                <a className='hover:text-blue-200' href='https://www.instagram.com/mr__olliver/'> Instagram </a>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around p-4'>
                <img src='/logo_semana_fsm.png'/>
                <img src='/logo_devpleno.png' />
            </div>
        </div>
    )
}
export default Footer
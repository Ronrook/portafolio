


import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Modal from '../components/Modal';


function Contact() {
    const [isModal, setIsModal] = useState(false);

    const handleModal = () => setIsModal(!isModal);

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_kgm72s3', 'template_v9bsgti', event.target, 'D1EJjYyHTJ1e8Ccuu' )
        .then(response => console.log(response))
        .catch(error => console.log(error) )

    }

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST'  className='pt-32 flex flex-col max-w-[600px] w-full h-screen' onSubmit={sendEmail}>
                <div className='pb-8 flex flex-col items-center'>
                    <p className='text-4xl font-bold inline  text-gray-300'>Contáctame</p>
                    <p className='text-gray-300 py-4'>// Enviame un mensaje y ponte en contacto conmigo</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Correo' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mensaje'></textarea>
                <div className="absolute top-96 left-auto ">
                    <Modal handleModal= {handleModal} isModal={isModal}/>
                </div>
                <button className={isModal? 'hidden': 'text-white border-2 hover:bg-blue-500 px-4 py-3 my-8 mx-auto flex items-center'} onClick={handleModal}>Enviar</button>

            </form>
    </div>

    )
}

export default Contact;
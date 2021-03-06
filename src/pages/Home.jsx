


import React from 'react'
import Hello from '../components/Hello';
import CardHome from "../components/CardHome";
import ojitos from '../images/ojitos.png';
import Data from '../data'



function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='pt-4 lg:pt-48 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <Hello/>
                
            </div>
            <div className='flex justify-center bg-[#0a192f]'>
                <img className='w-2/5' src={ojitos} alt="" />
            </div>
            
            
            
            
            <div className='bg-[#0a192f] w-full max-h-md mx-auto lg:h-full'>
                <h2 
                className='text-white pt-32 text-center  text-2xl md:text-3xl lg:text-5xl'>Conoce sobre mí
                </h2>

                <div className='pt-20 flex justify-center'>

                

                    <div className='grid  lg:grid-cols-3 gap-10'>
                        
                        <CardHome title='Perfil' text= {Data[0]}/>
                        <CardHome title= 'Habilidades' text= {Data[1]}/>
                        <CardHome title= 'Otras Habilidades' text= {Data[2]}/>


                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
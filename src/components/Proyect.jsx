


import React from 'react'

function Proyect({img, name, demo, code}) {
    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                {name}
                </span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <a href={demo} target="_blank">Demo</a>
                    </button>
                    </a>
                    <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <a href={code} target="_blank">Code</a>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proyect;

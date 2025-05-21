import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Button from '@/components/Button/Button';
function Imagewithtext() {
  return (
    <div className='flex items-center justify-center'>
        <div className='w-1/2 order-2 md:order-1 px-3'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Code. Compile. Conquer.
            </h2>
            <p className="text-xl text-neutral-300 mb-8">Your ultimate playground for coding challenges and development. Write, test, and save your code all in one place.</p>
            <div className="space-y-4 mb-8">
                <div className="flex items-start">
                    <FontAwesomeIcon className='h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0' icon={faCheck}/>
                    <p className="text-neutral-300">Interactive code editor with syntax highlighting</p>
                </div>
                
                <div className="flex items-start">
                <FontAwesomeIcon className='h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0' icon={faCheck}/>
                    <p className="text-neutral-300">Real-time compilation and execution</p>
                </div>
                
                <div className="flex items-start">
                <FontAwesomeIcon className='h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0' icon={faCheck}/>
                    <p className="text-neutral-300">Library of coding challenges to master</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mx-4'>

                <Button text="Start Coding" style='btn btn-primary rounded-xl' link='/ide' />
                </div>
                <div className='mx-4'>
                    <Button text='Explore Challenges' style='btn btn-transparent rounded-xl' link='/problemset' />
                </div>
            </div>
        </div>
        <div className='w-1/2 order-1 md:order-2 px-3'>
        <figure className='imageFigure flex items-center justify-center'>
            <Image
            className='bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl boxShadow'
            
            src="/Homepage/img1.png" // relative to /public
            alt="My Photo"
            width={500}
            height={300}
        />
        </figure>
        </div>
    </div>
  )
}

export default Imagewithtext
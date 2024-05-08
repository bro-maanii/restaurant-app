import Image from 'next/image'
import React from 'react'
import heroImage from '@/public/hero-img.png'
import { Button } from '@/components/ui/button'

export default function Hero2() {
  return (
    <div className='flex justify-stretch align-middle items-center'>
        {/* left side */}
        <div className='w-1/2 '>
            <div>
            <h1 className='text-5xl sm:text-7xl md:text-8xl font-bold'>Food</h1>
            <h1 className='text-5xl sm:text-7xl md:text-8xl font-bold'>Is</h1>
            <h1 className='text-5xl sm:text-7xl md:text-8xl font-bold'>Life</h1>
            </div>
            <div>
                <Button className='mt-5' variant='outline'>Order Now</Button>
                <Button className='mt-2' variant='outline'>Book Now</Button>
            </div>
        </div>
        {/* right side */}
        <div className='w-1/2 '>
            <Image alt='hero' className="object-cover object-center h-full w-full "
            width={460}
            height={500}
            src={heroImage} />
        </div>
    </div>
  )
}

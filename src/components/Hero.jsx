import React from 'react'
import Logo from '../assets/Logo.svg'

const Hero = () => {
  return (
  <section>
    <div className='relative min-h-[calc(100vh-90px)] flex items-center overflow-hidden'>
      {/* watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <img
    src={Logo}
    alt="GoMart"
    className="w-[45vw] max-w-[600px] opacity-[0.08]"
  />
</div>
  {/* hero content */}
  
    </div>
  </section>
  )
}

export default Hero
import React from 'react'
import Logo from '../assets/Logo.svg'
// using array to store data it is more good than inserting one by one
const linkGroups = [
  { title: 'Shop', links: ['All Products', 'Categories', 'New Arrivals', 'Deals'] },
  { title: 'Support', links: ['Contact Us', 'Help Center', 'Shipping', 'Returns'] },
  { title: 'Company', links: ['About Us', 'Privacy Policy', 'Terms & Conditions'] },
]

const Footer = () => {
  return (
    <footer className="w-full bg-pink-950 px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12 xl:px-20">

      {/* Main footer: 2 cols on phones, 3 on tablets, 4 on desktop */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">

        {/* Brand: full width on phone/tablet, first column on desktop */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <img src={Logo} alt="GoMart" className="mb-4 h-auto w-24 sm:w-28" />
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Discover products you love with a smarter shopping experience
            powered by AI.
          </p>
        </div>

        {/* Link columns */}
        {linkGroups.map((group) => (
          <div key={group.title} className="min-w-0">
            <h3 className="mb-4 text-base font-semibold sm:text-lg">{group.title}</h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              {group.links.map((link) => (
                <a key={link} href="#" className="transition hover:text-yellow-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 sm:mt-12">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/50 sm:text-sm">© 2026 GoMart. All rights reserved.</p>
          <p className="text-xs text-white/50 sm:text-sm">AI Powered Shopping</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
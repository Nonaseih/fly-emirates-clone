import React from 'react'
import AlertBar from './AlertBar'

function MainNavbar() {
  return (
    <>
      <AlertBar />
      <header className="bg-[#2F2F2F]">
        <div className="flex h-[88px]">

        {/* RED LOGO STRIP */}
        <div className="w-[88px] bg-[#D71920] flex items-center justify-center">
          <img
            src="/emirates-logo-vertical-white.svg"
            alt="Emirates"
            className="h-[44px]"
          />
        </div>

        {/* NAV CONTENT */}
        <div className="flex-1 flex items-center justify-between px-10">

          {/* CENTER NAV */}
          <ul className="hidden lg:flex items-center gap-8 text-white uppercase text-[14px] font-semibold tracking-[0.04em]">
            <li className="cursor-pointer">Book</li>
            <li className="cursor-pointer">Manage</li>
            <li className="cursor-pointer">Experience</li>
            <li className="cursor-pointer">Where we fly</li>
            <li className="cursor-pointer">Loyalty</li>
            <li className="cursor-pointer">Help</li>
          </ul>

          {/* RIGHT UTILITIES */}
          <div className="hidden lg:flex items-center gap-6 text-white text-[13px] uppercase">

            {/* Globe + Country */}
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" strokeWidth="2"/>
              </svg>
              <span>NG</span>
            </div>

            {/* Search */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="7" strokeWidth="2"/>
              <line x1="16.65" y1="16.65" x2="21" y2="21" strokeWidth="2"/>
            </svg>

            {/* Divider */}
            <div className="h-[18px] w-px bg-white/40" />

            {/* Login */}
            <span className="cursor-pointer">Log in</span>
          </div>

        </div>
      </div>
    </header>
    </>
  )
}

  export default MainNavbar

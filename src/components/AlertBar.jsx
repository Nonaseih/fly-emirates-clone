import React from 'react'

export default function AlertBar() {
  return (
    <div className="bg-[#FFF4CC] text-[#111] text-[14px]">
      <div className="max-w-[1600px] mx-auto h-[44px] px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Important:</span>
          <span>Travel requirements for the United Kingdom</span>
        </div>

        <button className="flex items-center gap-1 text-sm">
          Show more <span className="text-xs">▾</span>
        </button>
      </div>
    </div>
  )
}

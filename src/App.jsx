import React from 'react'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      {/* Hero placeholder: replace background with real hero image later */}
      <section className="w-full bg-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 py-12">
          <div className="h-64 md:h-96 bg-[length:cover] bg-center rounded-md flex items-center justify-center" style={{backgroundColor:'#f3f4f6'}}>
            <span className="text-gray-500 hero-font">HERO BACKGROUND IMAGE PLACEHOLDER</span>
          </div>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold">Navbar (React + Tailwind)</h1>
        <p className="mt-4 text-gray-600">Responsive navbar component implemented in React.</p>
      </main>
    </div>
  )
}

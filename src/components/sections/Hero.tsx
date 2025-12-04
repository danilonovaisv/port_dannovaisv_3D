
'use client'

import HeroGlassCanvas from '../three/HeroGlassCanvas'
import { useScroll } from 'framer-motion'

export default function Hero() {
  const { scrollYProgress } = useScroll()

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white text-black">
      <HeroGlassCanvas scrollYProgress={scrollYProgress} />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full">
        <h1 className="text-5xl md:text-7xl font-bold">Design,<br />não é só estética.</h1>
        <p className="mt-4 text-xl text-blue-600">[ É intenção, é estratégia, é experiência. ]</p>
        <button className="mt-8 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:brightness-110 transition">
          get to know me better →
        </button>
      </div>
    </section>
  )
}

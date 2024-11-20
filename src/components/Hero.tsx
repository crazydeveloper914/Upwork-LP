import { FC } from 'react'
import '@/styles/hero.css'
import MaxWidthWrapper from './MaxWidthWrapper'
import { FaArrowRight, FaPhone } from 'react-icons/fa6'

interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {
  return <div className='w-full bg-gradient-to-r relative  max-[640px]:bg-black max-[640px]:from-cyan-50/10 from-cyan-50 via-cyan-500/20 to-cyan-600/40'>
        <div className="w-full block sm:hidden absolute h-full z-0">
          <img src="/drops.jpg" alt="drops image" className='w-full opacity-15 h-full object-cover' />
        </div>
    <MaxWidthWrapper className='pt-52 pb-32 relative z-10'>
      <div className="grid xl:grid-cols-2 gap-20  place-items-center">
        <div className="w-full flex flex-col">
          <h1 className='text-white sm:text-slate-900 text-3xl sm:text-5xl font-bold'>Empowering Heroes to Transform Virtual with<span className='block text-white underline sm:no-underline sm:text-primary mt-5'>AquaVive</span></h1>
          <p className='text-white sm:text-stone-700 mt-6'>In AquaVive, young adventurers improve virtual water systems, sanitation, and hygiene (vWASH) through immersive training and gamified missions. The "Generation Aqua Ambassadors" Program promotes sustainable solutions and advocates for clean water access within the game's ecosystems.</p>
          <button className="group w-fit mt-8 bg-cyan-950 relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full py-1 pl-6 pr-14 font-medium text-neutral-50"><span className="z-10 pr-2 px-5">Apply Now</span><div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-cyan-900 transition-[width] group-hover:w-[calc(100%-8px)]"><div className="mr-3.5 flex items-center justify-center"><FaArrowRight /></div></div></button>
        </div>
        <figure className="hero-banner hidden sm:grid relative md:scale-125 xl:scale-100 gap-5 sm:gap-10">
          <div className="img-holder one w-full md:w-60 h-[50vw] md:h-72">
            <img src={'/hero-banner-1.jpg'} alt="hero banner" className="img-cover" />
          </div>

          <div className="img-holder two w-full md:w-60 h-[60vw] md:h-96">
            <img src={'/hero-banner-2.jpg'} alt="hero banner" className="img-cover" />
          </div>
          <div className="h-20 md:h-28 text-cyan-950 gap-4 shadow-lg w-72 p-4 flex items-center justify-center absolute left-2 md:left-[10px] bottom-0 md:bottom-[40px] rounded-tr-[16px] rounded-bl-[16px] rounded-tl-[40px] rounded-br-[50px]  bg-white">
            <div className="rounded-full p-4 bg-cyan-950/50"><FaPhone size={20} color='#172554' /></div>
            <div className="flex flex-col">
              <h3 className='font-bold'>Online Support</h3>
              <p>+250 723 232 232</p>
            </div>
          </div>

          <img src={'/hero-shape-2.png'} width="622" height="551" alt="" className="shape hero-shape-2" />

        </figure>

      </div>
    </MaxWidthWrapper>
  </div>

}

export default Hero
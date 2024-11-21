import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import Motion from './Motion'

interface OurStoryProps {

}

const OurStory: FC<OurStoryProps> = ({ }) => {
    return <div id='about' className='w-full bg-gray-50 text-neutral-900'>
        <MaxWidthWrapper className='py-20 '>
            <Motion className="h-full border border-cyan-400 w-full sm:w-[50vw] xl:w-[35rem] mr-10 mb-7 float-left overflow-hidden rounded-lg">
                <img src="/4605298.jpg" alt="our story" className='h-full w-full object-contain' />
            </Motion>
            <Motion transition={{delay: 0.3}} className="space-y-3">
                <h1 className='text-3xl sm:text-5xl font-bold text-neutral-900 underline mb-5'>Our Story</h1>
                <p className='text-base sm:text-lg'><sup><FaQuoteLeft className='inline ' /></sup> AquaVive proudly introduces the "Generation Aqua Ambassadors Program", a fictional initiative aimed at empowering young virtual leaders aged 18-30 to tackle water, sanitation, and hygiene (WASH) challenges in the digital realm.</p>
                <p className='text-base sm:text-lg'>Launched in the vibrant virtual world of AquaVerse in 2022, the program recruits ambassadors from Motionerse regions of the game, training them on vWASH topics, advocacy, and project management. These ambassadors design and implement innovative in-game solutions tailored to their local virtual communities, such as hygiene awareness campaigns and repairing virtual water sources to enhance gameplay and promote health in the AquaVerse.

                    Together, we're making the digital world a cleaner and healthier place! 🌊✨<sup><FaQuoteRight className='inline ' /></sup></p>
            </Motion>
        </MaxWidthWrapper>
    </div>
}

export default OurStory
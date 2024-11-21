import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import { ArrowRight, StarIcon } from 'lucide-react'
import { cn } from '../lib/utils'
import ScaleInHeader from './ScaleInHeader'
import Motion from './Motion'

interface TestimoniesProps {

}

const testimonies = [
    {name: "Nzabera M.", position: "Community Health Advocate", testimony: "The Generation Vision Ambassador's Program has given me the tools and confidence to bring clean water solutions to my community. It's been life-changing!", image: "/avatar.png"},
    {name: "Emma R.", position: "Youth Program Coordinator", testimony: "As a Generation Vision Ambassador, I’ve seen firsthand the incredible impact we can have on improving sanitation and hygiene in our local schools and villages.", image: "/avatar.png"},
    {name: "Daniel T.", position: "Environmental Project Manager", testimony: "This program has not only educated me about WASH issues but also empowered me to lead initiatives that are making a real difference in people’s lives.", image: "/avatar.png"},
]

const Testimonies: FC<TestimoniesProps> = ({ }) => {
    return <div id='testimonies'>
        <MaxWidthWrapper className='mb-20'>
            <ScaleInHeader className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl sm:text-5xl text-gray-900'>
                What our{' '}
                <span className='relative px-2'>
                    clients{' '}
                    <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-cyan-800' />
                </span>{' '}
                say
            </ScaleInHeader>
            <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-10 mt-14">
                {testimonies.map(({name, position, testimony, image}, i) => <Motion transition={{ delay: i * .2 }} key={i} className={cn('min-w-72 cursor-pointer')}>
                    <div className="w-full flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center">
                            {Array(5).fill("").map((_e, i) => <StarIcon key={i} fill='#164e63' size={20} color='#164e63' />)}
                        </div>
                        <p>{testimony}</p>
                        <div className="flex gap-5">
                            <div className="h-16 w-16 rounded-full overflow-hidden">
                                <img src={image} alt="avatar image" className='w-full h-full' />
                            </div>
                            <div className="">
                                <h3 className='text-xl font-semibold'>{name}</h3>
                                <p>{position}</p>
                            </div>
                        </div>
                    </div>
                </Motion>)}
            </div>
            <a href="#" className='text-cyan-800 border-b border-b-cyan-800 w-fit ml-auto flex items-center gap-3'>Read all <ArrowRight size={16} /></a>
        </MaxWidthWrapper>
    </div>
}

export default Testimonies
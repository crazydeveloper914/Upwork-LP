import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import LargeHeading from './ui/LargeHeading'
import { Icons } from './Icons'
import Motion from './Motion';

const features = [
  {
    title: "Efficiency", 
    description: "AquaVive ensures quick and effective training in virtual water systems. Dive into streamlined missions, interactive learning modules, and intuitive tools that make improving vWASH engaging and efficient.", 
    Icon: Icons.features.efficiency
  },
  {
    title: "Transparency", 
    description: "Gain detailed insights into virtual water ecosystems with AquaVive. Track mission progress, measure the impact of your actions, and see tangible results in sustaining clean water sources while improving vWASH transparency overall.", 
    Icon: Icons.features.transparency
  },
  {
    title: "Support", 
    description: "Join a vibrant and collaborative community of Aqua Ambassadors. Access educational resources, participate in discussions, share ideas, and collaborate on water challenges to create sustainable solutions and maximize your impact effectively.", 
    Icon: Icons.features.support
  }
];



const Features: FC = ({}) => {
  return <div className='w-full py-24 bg-cyan-950 text-white'>
    <MaxWidthWrapper className='grid gap-10 grid-cols-1 xl:grid-cols-[0.3fr,0.7fr]'>
            <Motion className="flex flex-col">
                <LargeHeading className='text-white font-bold'>Beneficial elements</LargeHeading>
                <p className='mt-10 font-extralight max-w-lg'>Discover the key features designed to simplify and enhance your forest management experience.</p>
            </Motion>
            <div className="flex gap-3 w-full flex-wrap lg:flex-nowrap">
                {features.map(({title, description, Icon}, i) => <Motion transition={{delay: i * .2}} key={i} className='w-full sm:w-[calc(48%)] lg:w-full lg:h-full xl:h-fit rounded-md p-4 bg-brand-800'>
                    <div className="flex items-center gap-2">
                        <Icon className='h-6 md:h-10 w-6 md:w-10' /> <span className='text-lg md:text-2xl font-bold'>{title}</span>
                    </div>
                    <p className='mt-3 text-sm md:text-base text-brand-100'>{description}</p>
                </Motion>)}
            </div>
        </MaxWidthWrapper>
  </div>
}

export default Features
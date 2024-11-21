import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Motion from './Motion'

interface StatsProps {

}

const stats: { key: string, description: string }[] = [
    { key: "15", description: 'Years of experience' },
    { key: "2,3k+", description: 'Satisified clients' },
    { key: "36", description: 'Projects completed' },

]

const Stats: FC<StatsProps> = ({ }) => {
    return <div className='w-full'>
        <MaxWidthWrapper className='grid grid-cols-2 sm:grid-cols-[0.6fr_1fr_0.6fr] gap-10 sm:gap-5 text-cyan-950  my-20'>
            {stats.map((e, i) => <Motion transition={{delay: i * .2}} key={i} className={`flex justify-center gap-3 items-center ${i == 0 && 'col-span-2 sm:col-span-1' }`}>
                <h2 className='text-4xl xl:text-6xl font-semibold'>{e.key}</h2>
                <p className='text-sm sm:text-xl'>{e.description}</p>
            </Motion>)}
        </MaxWidthWrapper>
    </div>
}

export default Stats
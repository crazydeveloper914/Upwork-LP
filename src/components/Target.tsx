import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { HiLightBulb } from 'react-icons/hi'
import { Icons } from './Icons'
import { Dot } from 'lucide-react'
import { TbDiamond, TbEyeCheck, TbTargetArrow } from 'react-icons/tb'
import Motion from './Motion'

interface TargetProps {

}

const issues = [
    "Lack of access to safe drinking water, basic toilets, and good hygiene practices.",
    "Inequalities in WASH services based on income, gender, race, ethnicity, and urban/rural location.",
    "Pollution and overuse of water sources, and failures of WASH systems over time."
]


const Target: FC<TargetProps> = ({ }) => {
    return <div className='w-full'>
        <MaxWidthWrapper className='my-20 flex flex-col'>
            <Motion className='flex flex-col'>
                <h1 className='text-4xl text-center font-bold mb-6'>Our Target & Roadmap</h1>
                <p className='max-w-2xl text-center self-center'>Addressing inequalities in WASH access, promoting sustainable infrastructure development, and combating waterborne diseases in underserved communities.</p>
            </Motion>

            <Motion className="flex relative flex-col max-w-xl my-20 bg-cyan-950 p-5 sm:p-10 rounded-3xl text-white">
                <h3 className='sm:text-2xl underline flex items-center gap-2 '><HiLightBulb /> Challenges</h3>

                <ul className='flex mt-4 flex-col gap-3 w-full'>
                    {issues.map((issue, index) => <li key={index} className='flex items-center text-sm gap-2 w-full'><Dot size={40} /> <span>{issue}</span> </li>)}
                </ul>

                <div className="absolute hidden lg:block -bottom-32 h-72 w-72 right-0 translate-x-full">
                    <Icons.arrow />
                </div>
            </Motion>

            <div className="grid  w-full grid-cols-1 md:grid-cols-2 lg:flex gap-5 lg:gap-10 justify-center flex-wrap text-white">
                <Motion  className="w-full lg:w-[25rem] cursor-pointer border-2 overflow-hidden border-cyan-950 relative group bg-cyan-950 p-5 lg:p-10 rounded-3xl">
                    <h3 className='sm:text-2xl flex items-center gap-2 border-b border-b-white'><TbTargetArrow /> Our mission</h3>
                    <p className='mt-5 text-sm'>Our mission is to drive forward the accessibility, inclusivity, affordability, and effectiveness of water, sanitation, and hygiene (WASH) initiatives across Africa and Asia. We achieve this by empowering young leaders through the Generation Vision Ambassador's Program, providing them with the training, tools, and support needed to implement impactful community projects. Our goal is to advance Sustainable Development Goal 6—ensuring availability and sustainable management of water and sanitation for all—by addressing local WASH challenges and advocating for systemic improvements.</p>
                    <div className="w-0 h-2 bg-green-500 absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
                </Motion >
                <Motion transition={{delay: 0.2}} className="w-full lg:w-[25rem] cursor-pointer border-2 overflow-hidden border-cyan-950 relative group bg-cyan-950 p-5 lg:p-10 rounded-3xl">
                    <h3 className='sm:text-2xl flex items-center gap-2 border-b border-b-white'><TbEyeCheck /> Our vision</h3>
                    <p className='mt-5 text-sm'>Our vision is to create a world where every individual has access to safe water, adequate sanitation, and good hygiene practices. We envision a future where young leaders are at the forefront of driving transformative change in their communities, championing universal WASH access, and inspiring collective action. By fostering a generation of passionate WASH advocates, we aim to ensure that clean water, decent toilets, and effective hygiene are fundamental rights for all, paving the way for healthier, more equitable, and prosperous societies.</p>
                    <div className="w-0 h-2 bg-green-500 absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
                </Motion >
                <Motion transition={{delay: 0.4}} className="w-full lg:w-[25rem] cursor-pointer border-2 overflow-hidden border-cyan-950 relative group bg-cyan-950 p-5 lg:p-10 rounded-3xl">
                    <h3 className='sm:text-2xl mb-5 flex items-center gap-2 border-b border-b-white'><TbDiamond /> Our Values</h3>
                    {["Empowerment", "Sustainability", "Equity", "Collaboration", "Integrity"].map((e, i) => <p key={i}>- {e}</p>)}

                    <div className="w-0 h-2 bg-green-500 absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
                </Motion >
            </div>

        </MaxWidthWrapper>
    </div>
}

export default Target
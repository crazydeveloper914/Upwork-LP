import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Input } from './ui/Input'
import { Textarea } from './ui/textarea'
import Motion from './Motion'


const addressDetails = [
    "Task Flow",
    "KN 5 Rd, KG 9 Ave",
    "Tel: 1415",
    "Tel: (+250) 789 345 333",
    "Email : info@abc.rw",
    "Mon - Fri",
    "08 : 00 AM - 06: 00 PM"
]


const Contacts: FC = ({ }) => {
    return <div id='contactus' className='w-full bg-gray-50'>
        <MaxWidthWrapper className='grid grid-cols-1 md:grid-cols-[0.65fr_1fr] lg:grid-cols-2 py-20'>
            <Motion direction='right' className="flex flex-col sm:flex-row justify-around md:justify-normal md:flex-col mb-10 md:mb-0">
                <div className="">
                    <h2 className='text-5xl font-bold text-slate-700'>Contact Us</h2>
                    <p className='mt-2 text-stone-700'>Tell us your thoughts...</p>
                </div>

                <div className="">
                    <h4 className='font-bold text-lg mt-10 sm:mt-0 md:mt-10 text-slate-700 mb-2'>Physical Address</h4>
                    <div className="">
                        {addressDetails.map((addressDetail, i) => <p key={i} className='text-sm text-stone-700'>{addressDetail}</p>)}
                    </div>
                </div>
            </Motion>
            <Motion className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <Input placeholder='First Name' />
                    <Input placeholder='Last name' />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <Input placeholder='Phone number' />
                    <Input placeholder='Emal address' />
                </div>
                <Input placeholder='Subject' />
                <Textarea
                    placeholder="Message body"
                    className="px-3 border border-stone-400 py-3 text-black rounded-3xl focus:border-stone-700 focus:bg-stone-200/10"
                    cols={50}
                />
            </Motion>
        </MaxWidthWrapper>
    </div>
}
export default Contacts
import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from './Logo'
import { MdOutlinePhone } from 'react-icons/md'
import { CiMail } from 'react-icons/ci'
import { FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa6'
export const routes = [
    { name: 'About us', url: '#about' },
    { name: 'Testimonies', url: '#testimonies' },
    { name: 'Articles', url: '#articles' },
    { name: 'Faqs', url: '#faqs' },
    { name: 'Contact us', url: '#contactus' },
  ] as const;
interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <footer className='w-full bg-cyan-950 text-stone-300'>
        <MaxWidthWrapper className='grid gap-5 place-items-center xl:gap-10 py-24 grid-cols-2 min-[840px]:grid-cols-[0.8fr_0.7fr_1.2fr] lg:grid-cols-footer max-w-screen-xl'>
            <div className="space-y-5 flex flex-col text-center xl:text-start col-span-2 min-[840px]:col-span-3 lg:col-span-1">
                <Logo />
                <p className='max-w-md'>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p>
                <div className="self-center gap-2 xl:self-start flex items-center">
                    <a href="#" className='text-gray-500 hover:text-white hover:scale-105 transition-all'><FaTwitter size={30} /></a>
                    <a href="#" className='text-gray-500 hover:text-white hover:scale-105 transition-all'><FaLinkedin size={30} /></a>
                    <a href="#" className='text-gray-500 hover:text-white hover:scale-105 transition-all'><FaInstagram size={30} /></a>
                    <a href="#" className='text-gray-500 hover:text-white hover:scale-105 transition-all'><FaYoutube size={30} /></a>
                    <a href="#" className='text-gray-500 hover:text-white hover:scale-105 transition-all'><FaTiktok size={30} /></a>
                </div>
            </div>
            <div className="space-y-5">
                <h3 className='text-2xl font-semibold text-white underline'>Contact Us</h3>
                <p>Feel free to contact and reach us !!</p>
                <div className="space-y-1">
                    <p className="flex items-center gap-2"><MdOutlinePhone /> +01 (123) 4567 90</p>
                    <p className="flex items-center gap-2"><CiMail /> info.taskflow.com</p>
                    <p className="flex items-center gap-2"></p>
                </div>
            </div>
            <div className="space-y-2">
                <h3 className='text-2xl mb-5 font-semibold text-white underline'>Links</h3>
                {routes.map((e, i) => <a key={i} href={e.url} className="flex hover:text-blue-400 transition-colors cursor-pointer items-center gap-2">{e.name}</a>)}
                
            </div>
            <div className="col-span-2 min-[840px]:col-span-1">
                <p className='text-white text-sm my-5'>
                    Enter your email address to register to our newsletter subscription
                </p>
                <div className="rounded-full max-w-sm overflow-hidden flex items-center border border-stone-500 h-12 has-[:focus]:border-white">
                    <input type="email" className='w-full border-none outline-none px-4 h-full placeholder:text-stone-600 text-black' placeholder='example@gmail.com' />
                    <span className='flex items-center text-center h-full px-3 bg-cyan-950 text-white'>Subscribe</span>
                </div>
            </div>
        </MaxWidthWrapper>
    </footer>
}

export default Footer
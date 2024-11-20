import Link from 'next/link'
import { FC } from 'react'

interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({}) => {
  return <Link href='/' className='text-4xl font-bold text-gray-50'><span className='text-light-gold'>Aqua</span>Vive</Link>
}

export default Logo
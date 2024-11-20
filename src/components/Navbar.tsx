"use client"
import { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import Logo from './Logo';
import { cn } from '../lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';

export const routes = [
  { name: 'About us', url: '#about' },
  { name: 'Testimonies', url: '#testimonies' },
  { name: 'Articles', url: '#articles' },
  { name: 'Faqs', url: '#faqs' },
  { name: 'Contact us', url: '#contactus' },
] as const;

const Navbar = () => {
  const [_scroll, setscroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);




  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setscroll(currentScrollPos)
      setIsVisible(false)
      setIsVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const ss = useMemo(() => {
  //   if (scroll < 300) setIsVisible(true)
  //     return scroll < 300;
  // }, [scroll])


  return (
    <header className={`dark:bg-black fixed text-white z-50 -top-1 transition-transform duration-300 bg-cyan-950/80 backdrop-blur-md inset-x-0 py-7 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-9 lg:flex">
          {routes.map(({ url, name }, i) => (
            <a
              key={i}
              href={url}
              className={cn(
                'after:ease-after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; relative font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100',
              )}
            >
              {name}
            </a>
          ))}
        </div>
        <a
          href={'/'}
          className="hidden font-semibold text-primary-yellow underline lg:block"
        >
          <button className="group rounded-full relative inline-flex hover:scale-105 transition-all duration-300 py-2 px-8 items-center justify-center overflow-hidden bg-white text-black  font-medium"><span>Join now</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-blue-300/10"></div></div></button>
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="lg:hidden">
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="space-y-4 px-10 py-5 text-center">
            {routes.map(({ url, name }, i) => (
              <DropdownMenuItem key={i}>
                <a
                  key={i}
                  href={url}
                  className={cn('relative mx-auto text-lg')}
                >
                  {name}
                </a>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className="!mt-6">
              <a href={'/order'} className="mx-auto font-semibold text-primary-yellow underline">
                Join now
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </MaxWidthWrapper>
    </header>
  )
}

export default Navbar

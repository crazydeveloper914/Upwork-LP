'use client'
import { FC, useEffect, useRef, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils';

interface ArticlesProps {

}

const Articles: FC<ArticlesProps> = ({ }) => {
    const [chevAppear, setChevApp] = useState<any>({ left: false, right: false });
    const [winObje, setWindow] = useState({});
    const sliderRef = useRef(null);

    const handleSliderScroll = () => {
        const slider: any = sliderRef.current;
        const scrollWidth = slider.scrollLeft + slider.offsetWidth;
        const isLeft = slider.scrollLeft > 2;
        const isRight = scrollWidth + 15 <= slider.scrollWidth;

        if (isLeft) {
            if (isRight && isRight) {
                setChevApp({ right: true, left: true });
            } else {
                setChevApp({ right: false, left: true });
            }
        } else {
            setChevApp({ right: true, left: false });
        }
    };
    const handleLeftChevClick = () => {
        const slider: any = sliderRef.current;
        slider.scrollLeft -= 305;
    };
    const handleRightChevClick = () => {
        const slider: any = sliderRef.current;
        slider.scrollLeft += 305;
    };

    useEffect(() => {
        if (typeof window !== undefined) setWindow(window);
        const slider: any = sliderRef.current;
        if (slider.scrollWidth > slider.offsetWidth) {
            setChevApp({ left: false, right: true });
        }

        window.addEventListener("resize", () => {
            if (slider.scrollWidth > slider.offsetWidth)
                setChevApp({ left: false, right: true });
            else setChevApp({ left: false, right: false });
        });
    }, [winObje]);
    return <div id='articles' className='bg-slate-50 text-neutral-950 py-20'>
        <MaxWidthWrapper>
                <h1 className='text-center mb-20 text-3xl lg:text-5xl font-bold'>What's new on <span className='text-black'>AquaVive?</span></h1>
                <a href="#" className='text-cyan-800 mb-4 border-b border-b-cyan-800 w-fit ml-auto flex items-center gap-3'>See all <ArrowRight size={16} /></a>

            <div className="flex h-max gap-5 has-scrollbar pb-10 scroll-smooth overflow-x-scroll" ref={sliderRef}
                onScroll={handleSliderScroll}>
                {Array(5).fill(3).map((_, i) => <div key={i} className="w-72 sm:w-96 flex flex-col items-center shrink-0 group relative">
                    <div className="w-full h-72 sm:h-96 bg-black rounded-2xl overflow-hidden">
                        <img src="/blog-1.jpg" alt="article" className='w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-70 object-cover' />
                    </div>
                    <div className="text-stone-700 relative z-10 bottom-0 -mt-[40%] w-5/6 p-4 bg-white rounded-md">
                        <p className=''><span className='font-bold text-stone-900'>19 Nov 2024,</span> by Nzabera Mike</p>
                        <h4 className='text-xl sm:text-2xl font-semibold leading-tight my-2'>Why does it matter to use clean watter</h4>
                        <p className='text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora iure, aut fuga laborum dolor impedit sint incidunt minus temporibus. ....</p>

                        <a href="#" className='text-cyan-800 text-sm sm:text-base hover:border-b border-b-cyan-950 mt-3 w-fit flex items-center gap-3'>Read Story <ArrowRight size={16} /></a>
                    </div>
                </div>)}

            </div>
            <div className="flex items-center mt-1 justify-end gap-3">
                <ChevronLeft
                    onClick={handleLeftChevClick}
                    size={40}
                    className={cn('text-3xl hover:bg-cyan-900 bg-cyan-800 text-white transition-colors duration-300 rounded-full p-2 cursor-pointer', {"bg-cyan-950/70 hover:bg-cyan-950/70": !chevAppear.left})}
                />

                <ChevronRight
                    onClick={handleRightChevClick}
                    size={40}
                    className={cn('text-3xl p-2 hover:bg-cyan-900 bg-cyan-800 text-white transition-colors duration-300 rounded-full cursor-pointer', {"bg-cyan-950/70 hover:bg-cyan-950/70": !chevAppear.right})}
                /></div>

        </MaxWidthWrapper>
    </div>
}

export default Articles
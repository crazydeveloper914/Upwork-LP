import { FC } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import MaxWidthWrapper from './MaxWidthWrapper';
import { cn } from '../lib/utils';

interface FaqsProps { }

const faqs: { question: string; answer: string }[] = [
  {
    "question": "How do I sync my dreams?",
    "answer": "To sync your dreams, simply log into DreamSync, describe your dream in the journal, and it will automatically be saved and shared with the community."
  },
  {
    "question": "Can I share my dreams with friends?",
    "answer": "Yes! You can invite friends to join DreamSync and share your dreams with them, or even create private dream circles for exclusive sharing."
  },
  {
    "question": "What are dreamscapes and how do I create one?",
    "answer": "Dreamscapes are immersive worlds based on your dreams. You can create them by adding themes, sounds, and interactive elements using our creative tools inside the app."
  },
  {
    "question": "Is my data safe and private?",
    "answer": "Yes, DreamSync uses end-to-end encryption to ensure that your dreams and personal information remain private and secure."
  },
  {
    "question": "Can I explore other people's dreams?",
    "answer": "Absolutely! You can explore a vast collection of dreams shared by the community, and even follow users whose dreams inspire you the most."
  }
]



const Faqs: FC<FaqsProps> = ({ }) => {
  return (
    <div id='faqs'>
      <MaxWidthWrapper className="pt-20 text-stone-800">
        <div className="border-l border-l-cyan-950 px-5 py-2 font-semibold">
          <h1 className={cn('text-4xl font-bold')}>FAQs</h1>
          <p className="text-base">
            Different questions about <span className='font-bold'>AquaVive</span> addressed to us with their corresponding solutions
          </p>
        </div>

        <div className="flex flex-col items-start md:flex-row">
          <img
            src={'/faqs.png'}
            alt="faqs"
            className="w-96 lg:w-[29rem] object-contain"
          />
          <Accordion type="single" collapsible className="w-full ">
            {faqs.map(({ question, answer }, i) => (
              <AccordionItem value={'item' + i} key={i}>
                <AccordionTrigger className="text-start">{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Faqs;

import { FC } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import Motion from '../Motion';
import ScaleInHeader from '../ScaleInHeader';

interface OurTeamProps { }
interface SocialLink {
  twitter?: string
  linkedin?: string
  instagram?: string
}

export interface Imember {
  name: string;
  image: string;
  role: string;
  socialLinks: SocialLink;
}

const member: Imember = {
  name: 'Mike Nzabera',
  image: '/member.png',
  socialLinks: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  role: "Head of marketing"
};
const members: Imember[] = Array(3).fill(member);

const OurTeam: FC<OurTeamProps> = ({ }) => {
  return <section className='py-20 mb-10 bg-slate-50'>
    <MaxWidthWrapper>
      <ScaleInHeader className='text-3xl mx-auto max-w-xs sm:max-w-sm sm:text-5xl font-bold text-center text-gray-900 mb-14'>Meet Our Amazing Team</ScaleInHeader>
      <div className="flex items-center justify-center flex-wrap gap-5 sm:gap-10 cursor-pointer">
        {members.map(
          (
            { name, image, socialLinks, role },
            i
          ) => (
            <Motion transition={{delay:i * 0.2}} className={'flex flex-col'} key={i}>
              <div className="flex flex-col items-center text-center leading-3">
                <div className="border w-32 h-32 sm:w-52 sm:h-52 border-cyan-800 rounded-full overflow-hidden bg-white">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-xl font-semibold leading-4 mt-4">{name}</p>
                <p className="text-gray-600 font-semibold leading-4 mt-2">{role}</p>
                <div className="flex items-center mt-3 justify-center gap-2">
                  {socialLinks.instagram && <a href={socialLinks.instagram} className='text-slate-600 hover:text-cyan-950 transition-all hover:scale-105'><FaInstagram size={20} /></a>}
                  {socialLinks.twitter && <a href={socialLinks.twitter} className='text-slate-600 hover:text-cyan-950 transition-all hover:scale-105'><FaTwitter size={20} /></a>}
                  {socialLinks.linkedin && <a href={socialLinks.linkedin} className='text-slate-600 hover:text-cyan-950 transition-all hover:scale-105'><FaLinkedin size={20} /></a>}
                </div>
              </div>
            </Motion>
          )
        )}
      </div>
    </MaxWidthWrapper>
  </section>;
};

export default OurTeam;

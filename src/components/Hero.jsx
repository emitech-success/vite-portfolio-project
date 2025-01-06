/* eslint-disable react/no-unescaped-entities */
import heroImg from '../assets/undraw_mobile-content_yz21.svg';
import { socials } from '../data';
// import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-blue-300 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-5xl font-bold tracking-wider'>
            I'm Augustine Odezulu
          </h1>
          <p className='mt-4 text-2xl text-gray-900 capitalize tracking-wide'>
            Front-end Developer
          </p>
          <p className='mt-2 text-lg text-gray-900 capitalize tracking-wide'>
           turning ideas into interactive reality
          </p>
         <div className='flex gap-x-4 mt-4'>
          {socials.map((social) =>{
            const {id, href, icon} = social
            return <a key={id} href= {href}>{icon}</a>
          })}
         </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} alt="hero" className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  )
}
export default Hero
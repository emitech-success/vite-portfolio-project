import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 gap-16'>
        <img src={aboutSvg} alt='about' className='w-full h-64'/>
        <article>
          <SectionTitle text='code and coffee'/>
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, eligendi, 
            vel perferendis facere voluptatem rerum ea accusamus unde porro voluptatibus 
            assumenda modi recusandae nostrum sed commodi iste laudantium ducimus odit.</p>
        </article>
      </div>
    </section>
  )
}
export default About
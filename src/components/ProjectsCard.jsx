/* eslint-disable react/prop-types */
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({text, url, img, github, title, }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64'/>
      <div className='p-8 capitalize'>
        <h2 className='text-xl tracking-wide font-medium'>
          {title}
        </h2>
        <p className='mt-4 text-slate-700 leading-loose'>
          {text}
        </p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-800 hover:text-black duration-300'/> 
          </a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-800 hover:text-black duration-300'/> 
          </a>
        </div>
      </div>
    </article>
  )
}
export default ProjectsCard
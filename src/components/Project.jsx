import React from 'react';
import { CodeIcon, GlobeIcon } from '@heroicons/react/solid'

const Project = (project) => {
  return (
    <div className='max-w-sm flex flex-col text-center bg-gray-200 p-4 rounded-lg'>
      <img src={project.img} />
      <h3 className='font-semibold text-lg pt-2'>{project.name}</h3>
      <div className='py-2'>
        <div>{project.desc}</div>
        <div>{project.tech}</div>
      </div>
      <div className='flex flex-row justify-center'>
        <a href={project.github} className='px-2 text-gray-500 hover:text-gray-700' title='Github'>
          <CodeIcon className='w-8' />
        </a>
        <a href={project.website} className='px-2 text-gray-500 hover:text-gray-700' title='Website'>
          <GlobeIcon className='w-8' />
        </a>
      </div>
    </div>
  )
}

export default Project
import React from 'react'

const Skill = (skill) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={skill.logo} className="w-32 m-2 hover:scale-110 rounded-xl" alt='logo of skill' />
      <h3 className='p-2 text-xl font-semibold'>{skill.name}</h3>
      <p className='text-center pb-4'>{skill.desc}</p>
    </div>
  )
}

export default Skill
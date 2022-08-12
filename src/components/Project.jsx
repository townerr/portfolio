import React from 'react'

const Project = (project) => {
  return (
    <div>
      <img src={project.img} />
      <h3>{project.name}</h3>
      <div>{project.desc}</div>
      <a href={project.github}>github</a>
      <a href={project.website}>github</a>
    </div>
  )
}

export default Project
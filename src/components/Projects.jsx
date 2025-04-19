import React from 'react'

function Projects() {
  return (
    <div className='bg-gradient-to-r  from-[#161a25] to-[#20112e] pt-7  text-white' id="projects">
        <h1 className='text-4xl text-center'>Projects</h1>
      <div className="projectContainer flex justify-center pt-6">
        <div className="projectItem h-50  w-50 border-2">
        <h1>One</h1>
        </div>
        <div className="projectItem h-50 w-50 border-2">
            <h1>Two</h1>
        </div>
        <div className="projectItem h-50 w-50 border-2">
            <h1>Three</h1> 
        </div>

      </div>
    </div>
  )
}

export default Projects

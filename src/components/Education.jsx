import React from 'react'

function Education() {
  return (
    <div className='bg-gradient-to-r  from-slate-900 to-gray-400 p-4' id="education">   

        <div className="experienceContainer flex flex-col bg-gradient-to-r  from-[#161a25] to-[#20112e] text-white  sm:w-[80%]
                        m-auto p-6 mt-15 rounded-4xl ">
            <h1 className='text-white text-4xl font-extrabold text-center mb-2 p-4 mt-3'>Education</h1>

            <div className="experienceInnerContainer flex flex-col p-2.5 gap-2">
                 <div className="experienceItem md:flex p-4 rounded-2xl 
                   bg-gradient-to-r from-[#22162e] to-[#285b7d]
                 hover:from-indigo-900 hover:to-cyan-800
                   transition-all duration-700 ease-in-out
                   hover:scale-[1.02] cursor-pointer">


                <img  className="object-contain  w-30 h-30 rounded-4xl m-auto md:m-0 mb-2" src="/cgcj-logo.jpg" alt="image goes here" />
                <div className='experienceDescription  w-2/3 items-center text-center m-auto'>
                <p className=''>CGC Technical Campus</p>
                <p>2016-2020</p>
                <p>Bachelors in Computer Science</p>
                
                </div>
            
           </div>

           <div className="experienceItem md:flex p-4 rounded-2xl 
                   bg-gradient-to-r from-[#22162e] to-[#285b7d]
                 hover:from-indigo-900 hover:to-cyan-800
                   transition-all duration-700 ease-in-out
                   hover:scale-[1.02] cursor-pointer">
                <img  className="object-contain w-30 h-30 rounded-4xl m-auto md:m-0" src="/conestoga-logo.png" alt="image goes here" />
                <div className='experienceDescription w-2/3 items-center text-center m-auto '>
                <p className=''>Conestoga College</p>
                <p>2023-2024</p>
                <p>Post Graduate Certificate in Web Development</p>
                
            
                </div>
            
        </div>

     </div>


          
            
        
        
       </div>
    </div>
  )
}

export default Education

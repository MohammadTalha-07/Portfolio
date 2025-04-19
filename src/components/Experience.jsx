import React from 'react'

function Experience() {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-gray-400 p-6 sm:p-12' id="experience">
      <div className="experienceContainer flex flex-col w-[100%] sm:w-[90%] m-auto rounded-4xl bg-gradient-to-r from-[#1f2937] to-[#111827] text-white">

        <h1 className='text-3xl sm:text-4xl font-extrabold text-center text-white mb-4 p-4 mt-4'>Experience</h1>

        {/* Experience Item 1 */}
        <div className="experienceItem flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 border-b border-gray-600">
          <img className="w-2/3 m-auto sm:w-40 h-auto rounded-3xl object-cover" src="/FusionLogo.jpg" alt="Fusion CX Logo" />
          <div className='experienceDescription w-full'>
            <p className='text-lg font-semibold'>Cloud Support Engineer</p>
            <ul className='list-disc list-inside space-y-1 mt-2'>
              <li><strong>Organisation:</strong> Fusion CX</li>
              <li><strong>Location:</strong> Montreal, Canada</li>
              <li>Provided technical support and troubleshooting for cloud-based infrastructure, ensuring high availability and performance across GCP services.</li>
              <li>Provisioned and revoked licenses for Google Workspace apps based on role-based access control policies.</li>
              <li>Conducted audits of service usage and license allocation to optimize cost and efficiency.</li>
              <li>Provided support and training to end-users for Google Cloud tools.</li>
            </ul>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="experienceItem flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 border-b border-gray-600">
          <img className="w-2/3 m-auto sm:w-40 h-auto rounded-3xl object-contain" src="/infowizLogo.png" alt="Infowiz Logo" />
          <div className='experienceDescription w-full'>
            <p className='text-lg font-semibold'>Software Developer</p>
            <ul className='list-disc list-inside space-y-1 mt-2'>
              <li><strong>Organisation:</strong> Infowiz Solutions</li>
              <li><strong>Type:</strong> Internship</li>
              <li><strong>Location:</strong> Chandigarh, India</li>
              <li>Worked with the MERN stack — MongoDB, Express.js, React, and Node.js — building full-stack web applications.</li>
              <li>Developed RESTful APIs to manage backend logic and database communication.</li>
              <li>Built responsive front-end components using React and modern JavaScript (ES6+).</li>
              <li>Used Git and followed Agile development practices.</li>
            </ul>
          </div>
        </div>

        {/* Experience Item 3 */}
        <div className="experienceItem flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4">
          <img className="w-2/3 m-auto sm:w-40 h-auto rounded-3xl object-contain" src="/lelafeLogo.jpg" alt="Lelafe Logo" />
          <div className='experienceDescription w-full'>
            <p className='text-lg font-semibold'>Front-End Developer</p>
            <ul className='list-disc list-inside space-y-1 mt-2'>
              <li><strong>Organisation:</strong> Lelafe IT Solutions</li>
              <li><strong>Type:</strong> Internship</li>
              <li><strong>Location:</strong> Srinagar, India</li>
              <li>Translated mockups from Figma/Adobe XD into responsive web pages.</li>
              <li>Used HTML5, CSS3, and JavaScript to build and style pages from scratch.</li>
              <li>Applied UI/UX principles for accessible and user-friendly designs.</li>
              <li>Utilized Flexbox and Grid for modern, adaptive layouts.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience

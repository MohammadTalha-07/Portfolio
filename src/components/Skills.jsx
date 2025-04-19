import React from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiExpress,
} from 'react-icons/si';

function Skills() {
  return (
    <section className="skillsContainer bg-gradient-to-r from-slate-900 to-gray-400 py-5" id="skills">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] m-auto bg-gradient-to-r from-[#030712] to-gray-800 text-white rounded-3xl shadow-2xl p-8 border-2 border-teal-400">
        <h1 className="text-4xl font-extrabold text-center mb-8">My Skills</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center p-8">
          <div className="skillIcon flex flex-col items-center">
            <SiJavascript className="w-16 h-16 mb-2 text-yellow-400" />
            JavaScript
          </div>
          <div className="skillIcon flex flex-col items-center">
            <SiHtml5 className="w-16 h-16 mb-2 text-orange-600" />
            HTML
          </div>
          <div className="skillIcon flex flex-col items-center">
            <SiCss3 className="w-16 h-16 mb-2 text-blue-500" />
            CSS
          </div>
          <div className="skillIcon flex flex-col items-center">
            <SiReact className="w-16 h-16 mb-2 text-cyan-400" />
            React
          </div>
          <div className="skillIcon flex flex-col items-center">
            <SiNodedotjs className="w-16 h-16 mb-2 text-green-500" />
            Node
          </div>
          <div className="skillIcon flex flex-col items-center">
            <SiMysql className="w-16 h-16 mb-2 text-blue-700" />
            MySQL
          </div>
          <div className="skillIcon flex flex-col items-center">
            <SiMongodb className="w-16 h-16 mb-2 text-green-600" />
            MongoDB
          </div>
          <div className="skillIcon flex flex-col items-center">
            <SiTailwindcss className="w-16 h-16 mb-2 text-sky-400" />
            Tailwind CSS
          </div>
          <div className="skillIcon flex flex-col items-center">
            <SiExpress className="w-16 h-16 mb-2 text-gray-300" />
            Express.js
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

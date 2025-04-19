function Header() {
  return (
    <>
    <div className="navbar p-4 text-white bg-gradient-to-r from-slate-950 to-gray-700 md:fixed w-full z-10">
    
      
      <nav className="flex flex-col justify-between items-center w-[90%] m-auto border-3 rounded-4xl p-4 border-teal-400 flex-wrap md:flex-row">
       <h1 className="text-3xl mb-3 md:mb-0">M.T</h1>
        
        <ul className="flex flex-col gap-4 md:space-x-14 text-lg flex-wrap md:flex-row justify-center text-center">
          <li><button className="hover:text-teal-500 cursor-pointer hover:scale-110 duration-300"><a href="#home">Home</a></button></li>
          <li><button className="hover:text-teal-400 cursor-pointer hover:scale-110 duration-300 "><a href="#skills">Skills</a></button></li>
          <li><button className="hover:text-teal-400 cursor-pointer hover:scale-110 duration-300 "><a href="#education">Education</a></button></li>
          <li><button className="hover:text-teal-400 cursor-pointer hover:scale-110 duration-300 "><a href="#experience">Experience</a></button></li>
          <li><button className='hover:text-teal-400 cursor-pointer hover:scale-110 duration-300'><a href="#projects">Projects</a></button></li>
          <li><button className='hover:text-teal-400 cursor-pointer hover:scale-110 duration-300'><a href="#contact">Contact</a></button></li>
        </ul>
      </nav>

    </div>
    </>
  );
}

export default Header;

       
      
      
      


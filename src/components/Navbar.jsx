const Navbar = () => {
  return (
    <nav className="md:bg-x-purple border-gray-200 px-2 md:pt-2 sm:px-4">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#splash" className="flex items-center bg-white p-2 md:mt-2 rounded-lg hover:fill-x-orange hover:text-x-orange">
          <svg width="48px" height="48px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="mr-2" alt="Code Logo">
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"/>
          </svg>
          <span className="self-center text-xl font-semibold whitespace-nowrap">Ryan Towner</span>
        </a>
        <div className="hidden w-full md:block md:w-auto mt-2" id="navbar-default">
          <ul className="flex flex-col bg-transparent rounded-lg border p-3 border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white">
            <li>
              <a href="#skills" className="block py-2 pr-3 pl-3 text-black md:hover:bg-x-orange md:hover:text-white rounded">Skills</a>
            </li>
            <li>
              <a href="#projects" className="block py-2 pr-3 pl-3 text-black md:hover:bg-x-orange md:hover:text-white rounded">Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-3 pl-3 text-black md:hover:bg-x-orange md:hover:text-white rounded">Resume</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-3 pl-3 text-black md:hover:bg-x-orange md:hover:text-white rounded">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
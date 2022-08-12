import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 shadow md:px-6 md:py-8 bg-x-purple">
      <div className="sm:flex sm:items-center sm:justify-between">
      <a href="#splash" className="flex text-white items-center bg-transparent p-2 md:mt-2 rounded-lg fill-white hover:fill-x-orange hover:text-x-orange">
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="mr-2" alt="Code Logo">
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"/>
          </svg>
          <span className="self-center text-xl font-semibold whitespace-nowrap">Ryan Towner</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-white sm:mb-0">
          <li>
            <a href="#skills" className="mr-4 md:mr-6 hover:bg-x-orange px-3 py-2 rounded">Skills</a>
          </li>
          <li>
            <a href="#projects" className="mr-4 md:mr-6 hover:bg-x-orange px-3 py-2 rounded">Projects</a>
          </li>
          <li>
            <a href="#" className="mr-4 md:mr-6 hover:bg-x-orange px-3 py-2 rounded">Resume</a>
          </li>
          <li>
            <a href="#" className="hover:bg-x-orange px-3 py-2 rounded">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block font-semibold text-white sm:text-right">Made with <a href="http://astro.build" className="hover:underline hover:text-x-orange">Astro</a>.</span>
    </footer>
  )
}

export default Footer
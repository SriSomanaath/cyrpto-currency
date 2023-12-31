import React from 'react'

import {footerLinks, socialMedia} from "@/Services/Constants";


const Footer = () => {
  return (
    <footer className='l bg-black sm:p-6'>
    <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      <div className='flex flex-col items-start'>
        <h1 className="text-white text-5xl font-bold">TechArion.com</h1>
        <p className='mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm'>
        Empowering lives through innovative software solutions, tackling complex challenges with simplicity.
        </p>
        <div className='flex items-center gap-5 mt-8'>
        {socialMedia.map((icon, index) => (
            <div
              className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
              key={`${icon.alt}-${index}`}  // Use a combination for a unique key
            >
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
      {footerLinks.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
          {section.title}
        </h4>
        <ul>
          {section.links.map((link, linkIndex) => (
                        <li
                          className='mt-3 font-montserrat text-base leading-normal text-white hover:text-slate-gray'
                          key={`${link.name}-${linkIndex}`}  // Use a combination for a unique key
                        >
                          <a href={link.link}>{link.name}</a>
                        </li>
                      ))}
                </ul>
              </div>
            ))}
      </div>
    </div>

    <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
      <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
        <img
          src="/copyright-sign.svg"
          alt='copyright sign'
          width={20}
          height={20}
          className='rounded-full m-0'
        />
      <p className='font-montserrat cursor-pointer text-white'>Terms & Conditions</p>
        <p className="">Copyright. All rights reserved.</p>
      </div>
      <p className='font-montserrat cursor-pointer text-white'>Terms & Conditions</p>
    </div>
  </footer>
  )
}

export default Footer
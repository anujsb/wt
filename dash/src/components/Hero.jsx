// import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { aadhaar, pan } from "../assets";


const Hero = ({ name, image }) => {
  return (

    <>
      <div className="content-center">
        <div className="content-center">
          <h2 className="text-5xl subpixel-antialiased font-light tracking-wide leading-loose text-center flex-auto">
            Your Documents.
          </h2>
        </div>

        <div className="tools-container  justify-center">
          <ul className="flex flex-row flex-wrap justify-center ">
            <li className="bg-[#1e1e21] rounded-lg h-60 w-60 p-4 m-2 drop-shadow-sm bg-blend-luminosity flex items-center flex-col">
              <div className="w-20 h-20 align-top">
              <img
                    src={aadhaar}
                    alt='project_image'
                    className='h-full object-cover rounded-2xl '
              />
              </div>
              <span className="mt-3 mb-1 font-bold block h-auto max-w-full text-center">
                aadhaar
              </span>
              <div className="tools-container flex flex-row flex-wrap justify-center ">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view</button>
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">edit</button>
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">delete</button>
              </div>
              
            </li>

            <li className="bg-[#1e1e21] rounded-lg h-60 w-60 p-4 m-2 drop-shadow-sm bg-blend-luminosity flex items-center flex-col">
            <div className="w-20 h-20 align-top">
              <img
                    src={aadhaar}
                    alt='project_image'
                    className='h-full object-cover rounded-2xl '
              />
              </div>
              <span className="mt-3 mb-1 font-bold block h-auto max-w-full text-center">
                driving
              </span>
              <div className="tools-container flex flex-row flex-wrap justify-center ">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view</button>
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">edit</button>
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">delete</button>
              </div>
            </li>

            <li className="bg-[#1e1e21] rounded-lg h-60 w-60 p-4 m-2 drop-shadow-sm bg-blend-luminosity flex items-center flex-col">
            <div className="w-20 h-20 align-top">
              <img
                    src={pan}
                    alt='project_image'
                    className='h-full object-cover rounded-2xl '
              />
              </div>
              <span className="mt-3 mb-1 font-bold block h-auto max-w-full text-center">
                pan card
              </span>
              <div className="tools-container flex flex-row flex-wrap justify-center ">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">view</button>
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">edit</button>
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>

    // <div className='relative h-[230px]'>
    //   <img
    //     src={aadhaar}
    //     alt='project_image'
    //     className='h-full object-cover rounded-2xl'
    //   />

    //   <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
    //     {/* Add any additional content or elements as needed */}
    //   </div>

    //   <div className='mt-5'>
    //     <h3 className='text-white font-bold text-[24px]'>{name}</h3>
    //     {/* You can also add a description if needed */}
    //   </div>
    // </div>
  );
};

// Add PropTypes validation for the 'image' prop
Hero.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // You can adjust the type if 'image' is not a string
};

export default Hero;

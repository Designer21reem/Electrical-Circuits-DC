 import React,{ useState} from 'react'
 import { motion } from 'framer-motion';
//  import images from '../assets/'
import light from '../assets/light.png'
import logo from '../assets/logo.png'
 import { HiMenuAlt3, HiX } from "react-icons/hi";
 const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [activelink, setActivelink] = useState('#home');

    const navLinks =[
        {href: '#Hello', label: 'صفحة الرئيسية'},
        {href: "#About", label: ' نبذة عن المادة'},
        {href: "#Object" ,label: 'المادة الدراسية'},
        {href: "#AboutMe", label: 'عني'}
    ]
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6 ">
   <div className='w-full container mx-auto flex justify-between px-4 lg:px-0 md:h-20 h-16'>
      {/* mobile menu */}
     <button className='md:hidden p-2 '>
        {
            isOpen? <HiX onClick={() => setIsOpen(!isOpen)} className="w-6 h-6 size-6 text-white" /> : <HiMenuAlt3 onClick={() => setIsOpen(!isOpen)} className="w-6 h-6 size-6 text-white" />
        }
     </button>
     <div>
     {/* empty div just for spacing */}
     </div> 

     {/* links */}
    <div className="flex items-center flex-shrink-0 text-white mr-6 ">

                <div 
                

                className=" items-center flex-shrink-0 text-white mr-6 lg:ml-0 hidden md:flex">
                   {/* using map to render the links */}
                   {navLinks.map((link,index) => (
                    <motion.a
                     initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    key={index} href={link.href} className={`text-sm hover:bg-blue-700 py-2 px-10 rounded m-1  ${activelink === link.href ? ' shadow-2xl bg-blue-800  text-yellow-500 text-[15px]' : ''}    `} onClick={() => setActivelink(link.href)}>{link.label}</motion.a>
                   ))}
                </div>


     </div>
   
    

{/* logo */}
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center flex-shrink-0 text-white mr-6 lg:ml-0">
            <img src={logo} alt="logo" className="w-20 h-15" />
        </motion.div>

</div>
         {/* mobile menu items */}
     {
        isOpen && <div className="flex items-center flex-col flex-shrink-0 text-white mr-6 lg:ml-0">
            {navLinks.map((link,index) => (
                <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                key={index} onClick={() => {
                    setActivelink(link.href);
                    setIsOpen(!isOpen);
                }} href={link.href} className="text-sm hover:bg-blue-700 py-2 px-10 rounded m-1" >{link.label}</motion.a>
                            ))}
        </div>
     }

      </nav>
     {/* horizontal line */}
     <div className="bg-amber-200 h-0.5"></div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      className="container mx-auto w-full absolute ">
                <img className="w-1/2 md:w-1/3 sm:w-1/2" src={light} alt="light" />

      </motion.div>
    </>
  )
 }

 export default Navbar;
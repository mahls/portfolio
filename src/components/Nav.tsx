import { RiMenu5Fill } from "react-icons/ri";
import { TfiGithub } from "react-icons/tfi";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import {motion} from 'framer-motion'

export const Nav = ({dark, setDark}: {dark: boolean, setDark: (dark: boolean) => void}) => {
  return(

   <>


<div className="h-0.5 bg-gradient-to-r from-blue-400 via-yellow-200 to-violet-500  w-full"></div>

     <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={!dark ? "mt-5 px-5 sm:px-10 flex justify-between items-center text-stone-950" : " mt-5 px-5 sm:px-10 flex justify-between items-center text-stone-200"}>

        
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         whileTap={{ scale: 1.1 }}
         whileHover={{ scale: 1.1 }}
         whileDrag={{ scale: 1.1 }}
        >
         <p className="font-bold text-xs sm:text-base">Matthew Holmes 🐢</p></motion.div>
        
        <motion.div 
        className="font-bold pt-5 rounded text-stone-950 cursor-pointer flex">
            <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.5 }}
                     whileTap={{ scale: 1.1 }}
                     whileHover={{ scale: 1.1 }}
                     whileDrag={{ scale: 1.1 }}
                     className={` rounded relative top-2 pr-4 ${!dark ? "text-stone-950" : "text-stone-200"}`}><a href="https://github.com/mahls" target="_blank" rel="noreferrer"><TfiGithub/></a>
        </motion.div>
         
         <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.5 }}
                     whileTap={{ scale: 1.1 }}
                     whileHover={{ scale: 1.1 }}
                     whileDrag={{ scale: 1.1 }}
         onClick={() => setDark(!dark)} className={`relative top-2 ${!dark ? "text-stone-950" : "text-stone-200"}`}>{dark ? <BsSun/> : <BsMoon/>}</motion.div>
        
        <motion.div className="ml-4">         
            <motion.div className="avatar relative bottom-1">
               <motion.div 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.5 }}
                           whileTap={{ scale: 1.1 }}
                           whileHover={{ scale: 1.1 }}
                           whileDrag={{ scale: 1.1 }}
               className="w-10 rounded-full">
                  <img src="https://avatars.githubusercontent.com/u/89047848?v=4" />
               </motion.div>
            </motion.div>
         </motion.div>
        
         </motion.div>
     </motion.div>
     </>
  )
}


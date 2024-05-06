import {motion} from 'framer-motion'
import { CiMobile3 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export const Footer = ({dark}: {dark: boolean}) => {
    return(
        <motion.div
        transition={{duration: 0.5}}
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        className={`flex items-center align-center h-24 px-5 sm:px-5 ${dark ? "bg-stone-900" : "bg-stone-100"} mt-10 mx-5 sm:mx-10 mb-10 rounded-lg`}>
            
            <div className={`flex flex-col ${dark ? 'text-stone-200' : 'text-stone-400'}`}>
            <div className="text-sm flex"><CiMobile3 className='relative top-1 mr-1'/>Mobile: 0412262967</div>
            <div className="text-sm flex"><CiMail  className='relative top-1 mr-1'/>Mail: matthols24@gmail.com</div>
            </div>

        </motion.div>
    )
}


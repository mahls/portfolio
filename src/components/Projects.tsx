
import {motion} from 'framer-motion'
import { MdArrowOutward } from "react-icons/md";
import { useState, useEffect } from 'react';

function DateTime({dark}:{dark: boolean}) {
    const [dateTime, setDateTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000); // Update every second
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <motion.div
        className={`${dark ? 'text-stone-200' : 'text-stone-400'} mx-5 sm:mx-10 mt-10`}
        key={dateTime.toString()}
        transition={{duration: 0.5}}
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.9}}
        >{dateTime.toLocaleString()}</motion.div>
    );
  }
  
  export default DateTime;
  

let Card = ({link, icon, name, description, dark}: {icon: string, name: string, description: string, dark: boolean, link:string}) => {
    return(
        <motion.div
        transition={{duration: 0.5}}
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        className={`mt-2 rounded-lg p-4 ${dark ? "bg-stone-900" : "bg-stone-100"}`}>
            <a href={link}>
            <motion.div className="flex flex-col">
                <motion.div className={`font-bold text-lg ${dark ? "text-stone-200" : "text-stone-900"}`}>{name} {icon}</motion.div>
                <motion.div className={`${dark ? 'text-stone-200' : 'text-stone-400'} text-sm flex items-center`}>{description} <MdArrowOutward className='ml-2'/></motion.div> </motion.div>
            </a>
        </motion.div>
    )
}

export const Projects = ({dark}: {dark: boolean}) => {


let cardData = [
    {icon: '🌸', name: "Japanese", description: "Flash cards", link:'https://github.com/mahls/japanese', id:0},
    {icon: '🗞️', name: "News-API", description: "News weather and bitcoin", link:'https://github.com/mahls/news-api', id:1},
    {icon: '🌱', name: "Farming", description: "Grow crops", link:'https://github.com/mahls/farming', id:2},
    {icon: '💡', name: "WS2812", description: "LED strip controller", link:'https://github.com/mahls/ws2812', id:3},
]

  return(
    <>
    
    <div>

    <div className=' px-5 sm:px-10 mt-10'>
       
        <motion.div
        transition={{duration: 0.5}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className="badge badge-outline mr-1 text-xs">TypeScript</motion.div>
        <motion.div
                transition={{duration: 0.5}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
         className="badge badge-primary badge-outline mr-1 text-xs">React</motion.div>
        <motion.div 
                transition={{duration: 0.5}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
        className="badge badge-secondary badge-outline mr-1 text-xs">SQL</motion.div>
        <motion.div 
                transition={{duration: 0.5}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
        className="badge badge-accent badge-outline mr-1 text-xs mt-2">DevOps</motion.div>
                <motion.div 
                transition={{duration: 0.5}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
        className="badge badge-outline mr-1 text-xs mt-2">Rust</motion.div>
                        <motion.div 
                transition={{duration: 0.5}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
        className="badge badge-outline badge-primary mr-1 text-xs mt-2">NodeJS</motion.div>

        </div>



    </div>

    <DateTime/>



        <div className="px-5 sm:px-10 mt-10 md:grid grid-cols-4 gap-2">
            {cardData.map((card) => {
                return(
                    <Card dark={dark} key={card.id} icon={card.icon} name={card.name} description={card.description} link={card.link}/>
                )
            })}     
        </div>
    </>
  )
}


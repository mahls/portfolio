
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
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}
        >{dateTime.toLocaleString()}</motion.div>
    );
  }
  
  export default DateTime;
  

const Card = ({link, icon, name, description, dark}: {icon: string, name: string, description: string, dark: boolean, link:string}) => {
    return(
        <motion.div
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}
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

const cardData = [
    {icon: '🌸', name: "Hiragana", description: "Flash cards", link:'https://github.com/mahls/hiragana', id:0},
    {icon: '🗞️', name: "News-API", description: "News weather and Bitcoin", link:'https://github.com/mahls/news-api', id:1},
    {icon: '🌱', name: "Farming", description: "Grow crops", link:'https://github.com/mahls/farming', id:2},
    {icon: '💡', name: "WS2812", description: "LED strip controller", link:'https://github.com/mahls/ws2812', id:3},
]

const skills2 = [
    {name: 'TypeScript', color: 'badge-outline'},
    {name: 'React',  color: 'badge-primary'},
    {name: 'SQL',  color: 'badge-secondary'},
    {name: 'DevOps', color: 'badge-accent'},
    {name: 'Java', color: 'badge-outline'},
    {name: 'NodeJS', color: 'badge-primary'},
    {name: 'Python', color: 'badge-secondary'},
    {name: 'C++', color: 'badge-accent'},
    {name: 'Git', color: 'badge-outline'},
]

  return(
    <>
        <div className=' px-5 sm:px-10 mt-10'>
            {skills2.map((skill) => (
                <motion.div
                    key={skill.name}
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className={`badge badge-outline ${skill.color} mr-1 text-xs mt-2`}>
                    {skill.name} 
                </motion.div>
            ))}
        </div>

        <DateTime dark={dark}/>

        <div className="px-5 sm:px-10 mt-10 md:grid grid-cols-4 gap-2">
            {cardData.map((card) => {
                return(
                    <Card 
                        dark={dark}
                        key={card.id} 
                        icon={card.icon}
                        name={card.name}
                        description={card.description}
                        link={card.link}/>
                )
            })}     
        </div>
    </>
  )
}




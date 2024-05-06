import {motion} from 'framer-motion'

export const About = ({dark}: {dark: boolean}) => {
    return(
        <motion.div
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}
        className={` ${dark ? 'bg-stone-900' : 'bg-stone-100'} flex flex-col mt-10 sm:px-5 px-5 rounded-lg mx-5 sm:mx-10 py-5`}>
            <div className={`font-bold text-l mb-2 ${dark ? "text-stone-200" : "text-stone-900"}`}>About</div>
            <div className="text-sm"></div>
        <div className={`text-base `}>
            <p>
                I am a passionate software developer with a keen interest in building scalable and efficient applications.
                My expertise lies in modern web technologies, and I am constantly exploring new frameworks and tools to enhance my skill set.
                I thrive in collaborative environments and am committed to delivering high-quality solutions that meet the needs of users.
            </p>
        </div>
        </motion.div>
    )
}


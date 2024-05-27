
import { Nav } from '../components/Nav'
import { Projects } from '../components/Projects'
import { Footer } from '../components/Footer'
import { About } from '../components/About'
import { LatestBlogs } from '../components/LatestBlogs'

import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { darkAtom } from '../store'


export default function Home() {

    const [dark, setDark] = useAtom(darkAtom)

    return(
        <motion.div
        key={dark ? "dark" : "light"}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={dark ? "bg-[#1f1f1f] flex flex-col min-h-screen overflow-auto " : "bg-stone-200 min-h-screen overflow-auto"}>
        <Nav dark={dark} setDark={setDark} />
        <Projects dark={dark} />
        <About dark={dark} />
        <LatestBlogs dark={dark} />
        <Footer dark={dark} />
      </motion.div>
    )
}


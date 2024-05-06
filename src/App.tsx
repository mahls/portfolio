import {useState} from 'react'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { motion } from 'framer-motion'

function App() {

  const [dark, setDark] = useState(false)

  return (
    <motion.div
      key={dark ? "dark" : "light"}
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={dark ? "bg-[#1f1f1f] h-screen overflow-auto" : "bg-stone-200 h-screen overflow-auto"}>
      <Nav dark={dark} setDark={setDark} />
      <Projects dark={dark} />
      <About dark={dark} />
      <Footer dark={dark} />
    </motion.div>
  )
}



export default App

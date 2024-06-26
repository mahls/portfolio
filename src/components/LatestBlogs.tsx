import { motion } from "framer-motion"

const blogs = [
    {id: 1, title: "Installing WSL", link: "InstallingWSL", date: "2024-05-17", description: "Guide to installing WSL"},

]

const BlogCard = ({blog, dark}: {blog: {id: number, title: string, link: string, date: string, description: string}, dark: boolean}) => {
    return(
        <motion.div
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}
         className={`mt-5 border   rounded-lg p-5 ${dark ? "text-white bg-[#1f1f1f] border-stone-700" : "text-black bg-stone-200 border-stone-300"}`}>
            <a href={`/blogs/${blog.link}`}>
            <h1>{blog.title}</h1>
            <p>{blog.date}</p>
            <p>{blog.description}</p>
            </a>



            
        </motion.div>
    )
}

export const LatestBlogs = ({dark}: {dark: boolean}) => {
    return(
        <motion.div
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}
         className={`mx-5 sm:mx-10 p-5 mb-10 mt-10 rounded-xl ${dark ? "bg-stone-900" : "bg-stone-100"}`}>
            <h1 className={dark ? "text-white font-bold" : "text-black font-bold mb-2"}>Latest Blogs</h1>
            <div className="grid grid-cols-1 sm:grid sm:grid-cols-1 gap-5">
                {blogs.map((blog) => <BlogCard dark={dark} blog={blog} key={blog.id} />)}
            </div>
        </motion.div>
    )
}


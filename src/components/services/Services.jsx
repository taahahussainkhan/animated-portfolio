import React from 'react'
import './services.scss'
import {motion} from 'framer-motion'

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

export const Services = () => {
  return (
    <motion.div className='services' variants={variants}
    initial="initial" animate="animate" exit="initial">
        <motion.div className="textContainer"
        variants={variants}
        initial="initial" animate="animate" exit="initial"
        >
            <p>I focus on helping your website render faster
               <br />and perform better for your users.</p> 
            <hr whileHover={{
                background: "light"
            }}/> 
        </motion.div>
        <motion.div className="titleContainer" 
        variants={variants}
        initial="initial" animate="animate" exit="initial"
        >
            <div className="title">
                <img src="/people.webp" alt=""/>
                <h1>
                    <b>Unique</b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For Your</b> Business
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer"
        variants={variants}
        initial="initial" animate="animate" exit="initial"
        >
            <motion.div className="box" whileHover={{background: "lightgray",color:"black"}}>
                <h2>
                    Branding
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum eius excepturi quos, at soluta minima culpa explicabo? Eaque magnam a asperiores vitae enim doloremque dicta, eum sapiente accusamus architecto.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray",color:"black"}}>
                <h2>
                    Branding
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum eius excepturi quos, at soluta minima culpa explicabo? Eaque magnam a asperiores vitae enim doloremque dicta, eum sapiente accusamus architecto.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black" }}>
                <h2>
                    Branding
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum eius excepturi quos, at soluta minima culpa explicabo? Eaque magnam a asperiores vitae enim doloremque dicta, eum sapiente accusamus architecto.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{ background: "lightgray",color:"black"}}>
                <h2>
                    Branding
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum eius excepturi quos, at soluta minima culpa explicabo? Eaque magnam a asperiores vitae enim doloremque dicta, eum sapiente accusamus architecto.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

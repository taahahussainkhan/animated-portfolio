import React from 'react'
import { motion } from 'framer-motion'
import { Links } from './links/Links'
import { ToggleButton } from './toggleButton/ToggleButton'
import './sidebar.scss'


export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition:{
        type:"spring",
        stiffness:20
      }
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40
      }
    }
  }
  return (
    <motion.div 
    animate={open ? 'open' : 'closed'}
    className='sidebar'>
        <motion.div 
        variants={variants}
        className="bg">
            <Links/>
        </motion.div>
       <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}
 
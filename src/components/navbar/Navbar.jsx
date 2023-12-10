import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
        initial = {{opacity:0, scale:0.5}}
        animate = {{opacity:1, scale:1}}
        transition = {{duration: 0.5}}
        >Taaha Hussain Khan</motion.span>
        <motion.div 
        initial = {{opacity:0, scale:0.5}}
        animate = {{opacity:1, scale:1}}
        transition = {{duration: 0.5}}
        className="social">
          <a href="#">
            <img src="/facebook.png" alt="" srcset="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" srcset="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" srcset="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" srcset="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

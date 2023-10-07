import React, { useRef, useState } from 'react';
import css from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerSahow = useHeaderShadow();
    const menuRef = useRef();

    useOutsideAlerter({
            menuRef,
            setMenuOpened,
        })

    return (
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper }`}
        style={{boxShadow: headerSahow}}
        >

            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    Ada
                  
                <div className="social-icons">
                        <a href="https://github.com/adalawson96" target="_blank"><img src="./github.png" alt="github" /></a>
                        <a href="mailto:adalawson96@gmail.com" target="_blank"><img src="./mail.png" alt="email" /></a>
                        <a href="https://www.linkedin.com/in/ada-lawson/" target="_blank"><img src="./linkedin.png" alt="linkedin" /></a>
                        {/* <a href="https://drive.google.com/file/d/1t2nlh3drCRTf-FeRBFCvqT9dRGtUAV2T/view" target="_blank"><img src="./resume.png" alt="resume" /></a> */}
                </div>
                </div>
                <ul 
                    ref={menuRef}
                    className={`flexCenter ${css.menu}`}
                    style={getMenuStyles(menuOpened)} 
                >
                    <li><a href="#Hero">Home</a></li>
                    <li><a href="#Skill">Background</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            {/* ONLY form medium and small screens  */}
                <div className={css.menuIcon} 
                onClick={()=>setMenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
        </motion.div> 
    )
}

export default Header;
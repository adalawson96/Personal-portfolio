import React, { useState } from 'react';
import css from '../Header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerSahow = useHeaderShadow()

    return (
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper } header-div`
        }
        style={{boxShadow: headerSahow}}
        >

            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    Ada
                </div>
                <ul style={getMenuStyles(menuOpened)} 
                className={`flexCenter ${css.menu}`}>
                    <li><a href="">SKills</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Bio</a></li>
                    <li><a href="">Contact</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+34625233339</p>
                        <BiPhoneCall size={"40px"} />
                    </li>
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
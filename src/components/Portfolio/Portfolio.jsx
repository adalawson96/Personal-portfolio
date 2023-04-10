import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../../utils/motion';
import css from './Portfolio.module.scss';

const Portfolio = () => {
    return (
        <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} 
        className={`paddings ${css.wrapper}`}>

            {/* makes header skill tag activated */}
            <a className="anchor" id="Portfolio"></a>
            
            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className='primaryText'>PORTFOLIO</span>
                    <div className={`flexCenter ${css.heading}`}>
                    </div>
                {/* images of projects */}
                <div className={`flexCenter ${css.showCase}`}>
                    
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.5, 0.6)}
                        src="./memory.png"
                        alt="project"
                    />
                    <a href=""></a>
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.7, 0.6)}
                        src="./surf.png"
                        alt="project"
                    />
                    <a href="https://surf-app9.herokuapp.com/">Try!</a>
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.9, 0.6)}
                        src="./showCase3.png"
                        alt="project"
                    />
                    <a href=""></a>

                </div>
            </div>
         </motion.section>

    )
}

export default Portfolio;
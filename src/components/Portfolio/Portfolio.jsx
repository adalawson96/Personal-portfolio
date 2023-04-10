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

            <div className={`innerWidth flexCenter ${css.container}`}>
                <div className={` flexCenter ${css.heading}`}>
                    <div>
                        <span className='primaryText'>
                            PORTFOLIO
                        </span>
                    </div>
                </div>
                {/* images of projects */}
                <div className={`flexCenter ${css.showCase}`}>
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.5, 0.6)}
                        src="./memory.png"
                        alt="project"
                    />
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.7, 0.6)}
                        src="./surf.png"
                        alt="project"
                    />
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.9, 0.6)}
                        src="./showCase3.png"
                        alt="project"
                    />

                </div>
            </div>
         </motion.section>

    )
}

export default Portfolio;
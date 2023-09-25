import React from 'react';
import css from './Hero.module.scss';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

const Hero=()=> {
return (
    <section className={`padding ${css.wrapper} `}>
        <motion.div 
            variants={ staggerContainer }
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>

            {/* makes header skill tag activated */}
            <a className="anchor" id="Hero"></a>
            
        {/* Upper Elements */}
            <div className= {`${css.upperElements} headerText`}>
                <motion.span 
                variants={fadeIn("right", 'tween', 0.2, 1)}
                className='primaryText'>

                    Hey There, <br /> I'm Ada. 
                </motion.span>
                <motion.span className='secondaryText' variants={fadeIn("left", "tween", 0.4, 1)}>
                    <p>I am detail oriented by nature, a big believer in adventuring.</p>
                    <p>I thrive in collaborative environments &amp; enjoy learning new approaches <br />to problem solving from my peers.</p>
                    <p><strong><a style={{textDecoration: 'none'}}href="mailto:adalawson96@gmail.com">Get in touch!</a></strong></p> 
                    <div className="social-icons">
                        <a href="https://github.com/adalawson96" target="_blank"><img src="./github.png" alt="github" /></a>
                        <a href="mailto:adalawson96@gmail.com" target="_blank"><img src="./mail.png" alt="email" /></a>
                        <a href="https://www.linkedin.com/in/ada-lawson/" target="_blank"><img src="./linkedin.png" alt="linkedin" /></a>
                        <a href="google.com/file/d/1t2nlh3drCRTf-FeRBFCvqT9dRGtUAV2T/view?usp=sharing" target="_blank"><img src="./resume.png" alt="resume" /></a>
                    </div>
                    </motion.span>
                </div>

            {/* Person image */}
                <motion.div 
                variants={fadeIn("up", "tween", 0.3, 1)}
                className={css.person}>
                    <motion.img 
                    variants={slideIn("up", "tween", 0.5, 1.3)}
                    src="./prof.png" alt="" />
                </motion.div>

            {/* Lower Elements */}
                <div className={css.lowerElements}>
                    <motion.div 
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    className={css.experince}>
                        <div className='secondaryText'>
                            <div>
                                Web Developer
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
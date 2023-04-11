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
                       <p> I am detail oriented by nature, <br/> a big believer in adventuring. <br/>I thrive in collaborative environments <br/>& enjoy learning new approaches <br/> to problem solving from my peers. <br/><a href="mailto:adalawson96@gmail.com">Get in touch!</a></p> 
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
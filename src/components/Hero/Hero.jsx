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
                    Hey There, I'm Ada. 
                </motion.span>
                <motion.span className='secondaryText' variants={fadeIn("left", "tween", 0.9, 1)}>
                    <p> I am a purpose-driven web developer who loves solving complex front-end & back-end challenges. </p>
                    <p> I am a <i><strong>strategic thinker</strong></i> by nature, & a big believer <i><strong>in adventuring</strong></i>. </p>
                    <p> With four years of experience in hospitality & client service, </p>
                    <p> I have a strong foundation in <i><strong>communication</strong></i>, an obsession for detail, </p> 
                    <p> a knack for inspiring cross-functional teams, & a keen interest in the <i><strong>user experience</strong></i>.</p>
                    <p> I am passionate about creating <i><strong>tangible solutions</strong></i> that <i><strong>make an impact</strong></i> on those around me, </p>
                    <p> & I am looking for opportunities to build digital tools that <i><strong>better lives</strong></i>.</p>
                    <p><strong><a style={{textDecoration: 'none'}}href="mailto:adalawson96@gmail.com">GET IN TOUCH!</a></strong></p> 
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
            </motion.div>
        </section>
    )
}

export default Hero
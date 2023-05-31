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
                   <div class="proj-text-container">
                        <h3 className='proj-featured'>FEATURED PROJECT</h3>
                        <h2 className='proj-title'>MEMORY GAME</h2>
                        <p className='proj-caption'>A classic game of memory game wit a fully functional and interactive interface.</p>
                        <p className='proj-stack'><b> CSS | HTML | JavaScript </b></p>
                        <div className='proj-button-container'>
                            <a class="proj-button" href="https://adalawson96.github.io/memory_game/" target="_blank">VIEW</a>
                            <a class="proj-button" href="https://github.com/adalawson96/memory_game">GITHUB</a>
                        </div>
                    </div>
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.7, 0.6)}
                        src="./surf.png"
                        alt="project"
                    />
                    <div class="proj-text-container">
                        <h3 className='proj-featured'>FEATURED PROJECT</h3>
                        <h2 className='proj-title'>NALU FINDER</h2>
                        <p className='proj-caption'>Nalu Finder is an app that helps find surf spots that you want to go visit and learn more about the spot. This app is a great way to “save spots” and leave comments or tips for others to see.</p>
                        <p className='proj-stack'><b> Node.js | ExpressEJS | Express EJS layouts |  CSS/Bootstrap | HTML | JavaScript | MongoDB </b></p>
                        <div className='proj-button-container'>
                            <a class="proj-button" href="https://surf-app9.herokuapp.com/" target="_blank">VIEW</a>
                            <a class="proj-button" href="https://github.com/adalawson96/surf_app">GITHUB</a>
                        </div>
                    </div>
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.9, 0.6)}
                        src="./Case.png"
                        alt="project"
                    />
                    <div class="proj-text-container">
                        <h3 className='proj-featured'>FEATURED PROJECT</h3>
                        <h2 className='proj-title'>CASE COFFEE</h2>
                        <p className='proj-caption'>A live, responsive and fully shopabble e-commerce website following and original website to create a blue print effect.</p>
                        <p className='proj-stack'><b> Node.js | ExpressEJS |  CSS/Bootstrap | HTML | JavaScript | MongoDB/Mongoose| React </b></p>
                        <div className='proj-button-container'>
                            <a class="proj-button" href="https://casecoffee.herokuapp.com/" target="_blank">VIEW</a>
                            <a class="proj-button" href="https://github.com/adalawson96/blueprint-mern-infrastructure">GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
         </motion.section>
    )
}

export default Portfolio;
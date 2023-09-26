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
                    <div className="project-inner">
                        <motion.img 
                            variants={fadeIn("up", "tween", 0.5, 0.6)}
                            src="./tennis.png"
                            alt="project"
                        />
                        <div className="proj-text-container">
                            <h3 className='proj-featured'>FEATURED PROJECT</h3>
                            <h2 className='proj-title'>BREAK POINT</h2>
                            <p className='proj-caption'>React webpage for Tennis Club that offers restaurant services.</p>
                            <p className='proj-stack'><b> HTML | JavaScript | React| CSS/Bootstrap | MongoDB/Mongoose  </b></p>
                            <div className='proj-button-container'>
                                {/* <a className="proj-button" href="https://adalawson96.github.io/memory_game/" target="_blank"><button>VIEW</button></a> */}
                                <a className="proj-button" href="https://github.com/adalawson96/mern-tennis-club" target="_blank"><button>GITHUB</button></a>
                            </div>
                        </div>
                    </div> 
                    <div className="project-inner">
                        <motion.img 
                            variants={fadeIn("up", "tween", 0.5, 0.6)}
                            src="./Nourish.png"
                            // width={100}
                            // height={100}
                            alt="project"
                        />
                        <div className="proj-text-container">
                            <h3 className='proj-featured'>FEATURED PROJECT</h3>
                            <h2 className='proj-title'>NOURISH</h2>
                            <p className='proj-caption'>“Nourish” is designed to help users find restaurants that cater to their specific dietary restrictions.</p>
                            <p className='proj-stack'><b> CSS | HTML | JavaScript | Python | Django | PostgresSQL  </b></p>
                            <div className='proj-button-container'>
                                {/* <a className="proj-button" href="https://adalawson96.github.io/memory_game/" target="_blank"><button>VIEW</button></a> */}
                                <a className="proj-button" href="https://github.com/dmt94/nourish" target="_blank"><button>GITHUB</button></a>
                            </div>
                        </div>
                    </div> 
                    <div className="project-inner">
                        <motion.img 
                            variants={fadeIn("up", "tween", 0.10, 0.6)}
                            src="./Case.png"
                            alt="project"
                        />
                        <div className="proj-text-container">
                            <h3 className='proj-featured'>FEATURED PROJECT</h3>
                            <h2 className='proj-title'>CASE COFFEE</h2>
                            <p className='proj-caption'>A live, responsive and fully shopabble e-commerce website following and original website to create a blue print effect.</p>
                            <p className='proj-stack'><b> Node.js | ExpressEJS |  CSS/Bootstrap | HTML | JavaScript | MongoDB/Mongoose| React </b></p>
                            <div className='proj-button-container'>
                                {/* <a className="proj-button" href="https://casecoffee.herokuapp.com/" target="_blank"><button>VIEW</button></a> */}
                                <a className="proj-button" href="https://github.com/adalawson96/blueprint-mern-infrastructure" target="_blank"><button>GITHUB</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-inner">
                        <motion.img 
                            variants={fadeIn("up", "tween", 0.7, 0.6)}
                            src="./surf.png"
                            alt="project"
                        />
                        <div className="proj-text-container">
                            <h3 className='proj-featured'>FEATURED PROJECT</h3>
                            <h2 className='proj-title'>NALU FINDER</h2>
                            <p className='proj-caption'>Nalu Finder is an app that helps find surf spots that you want to go visit and learn more about the spot. This app is a great way to “save spots” and leave comments or tips for others to see.</p>
                            <p className='proj-stack'><b> Node.js | ExpressEJS | Express EJS layouts |  CSS/Bootstrap | HTML | JavaScript | MongoDB </b></p>
                            <div className='proj-button-container'>
                                {/* <a className="proj-button" href="https://surf-app9.herokuapp.com/" target="_blank"><button>VIEW</button></a> */}
                                <a className="proj-button" href="https://github.com/adalawson96/surf_app" target="_blank"><button>GITHUB</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </motion.section>
    )
}

export default Portfolio;
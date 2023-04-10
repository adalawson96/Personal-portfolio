import React from "react";
import css from './Works.module.scss';
import { motion } from 'framer-motion';
import { staggerChildren, textVariant2, zoomIn, fadeIn } from "../../utils/motion";
import { workExp } from "../../utils/data";

const Works = () => {
    return (
        <motion.section 
        variants={ staggerChildren }
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>

            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText yPaddings">SKILLS</span>

                <div className={`flexCenter ${css.experiences}`}>
                    {workExp.map((exp, i) => {
                        return (
                            <motion.div className={`flexCenter ${css.exp}`} 
                            variants={textVariant2}
                            key={i}>
                                {/* Skill Name */}
                                <div className={css.post}>
                                    <h1>{exp.skill}</h1>
                                </div>
                                {/*Listed Skills */}
                                <div className={css.role}>
                                    <p>{exp.detail}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                        {/* Animated Line w/ circles */}
                        <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
                            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
                            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
                        </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Works;
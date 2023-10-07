import React from "react";
import css from './Skill.module.scss';
import { motion } from 'framer-motion';
import { staggerChildren, textVariant2, zoomIn, fadeIn } from "../../utils/motion";
import { workExp } from "../../utils/data";

const Skill = () => {
    return (
        <motion.section 
        variants={ staggerChildren }
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>

            {/* makes header skill tag activated */}
            <a className='anchor' id="Skill"></a>

            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className='primaryText yPaddings'>BACKGROUND</span>

                <div className={`flexCenter ${css.experiences}`}>
                    {workExp.map((exp, i) => {
                        return (
                            <motion.div className={`flexCenter ${css.exp}`} 
                            variants={textVariant2}
                            key={i}>
                                {/* Skill Name */}
                                <div className={css.post}>
                                    <h2>{exp.skill}</h2>
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
                            <div><div className={css.circle} style={{background: "#6464e7"}}></div></div>
                            <div><div className={css.circle} style={{background: "#9090ee"}}></div></div>
                            <div><div className={css.circle} style={{background: "#d2d2f8"}}></div></div>
                            <div><div className={css.circle} style={{background: "#d2d2f8"}}></div></div>
                        </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Skill;
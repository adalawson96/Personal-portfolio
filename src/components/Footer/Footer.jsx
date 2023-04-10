import React from 'react';
import css from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={css.wrapper}>
            <div className={css.container}>

                {/* makes header skill tag activated */}
                <a className="anchor" id="Contact"></a>

                {/* Left side of the section */}
                <div className={` flexCenter ${css.heading}`}>
                    <span className="primaryText">
                        CONTACT
                    </span>
                </div>
                <div className={css.left}>
                    <h3>
                        I enjoy building relationships with <br/> 
                        individuals who want to collaborate. <br/>
                        Let's Connect!
                    </h3>
                    <a href="https://www.linkedin.com/in/ada-lawson/">LinkedIn</a><br/>
                    <a href="https://github.com/adalawson96">Github</a><br/>
                    <a href="mailto:adalawson96@gmail.com">Email</a>
                </div>

                {/* Rght side of the section w/ form*/}
                <div className={css.right}>
                    <span className='secondaryText'>Send me a message:</span>
        
                </div>
            </div>
        </section>
    )
}

export default Footer;
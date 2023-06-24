import React from 'react';
import './Footer.css';

export default function Footer(){
    return(
        <footer>
                <div className="footer">
                    <div className="col-1">
                        <a className="anchor" id="Contact"></a>
                        <div className="flexCenter innerWidth">
                            <span className='primaryText yPaddings'>CONTACT</span>
                        </div>
                        <h2> I enjoy building relationships with individuals who want to collaborate. Let's Connect!</h2>
                        <div className="social-icons">
                            <a href="https://github.com/adalawson96" target="_blank"><img src="./github.png" alt="github" /></a>
                            <a href="mailto:adalawson96@gmail.com" target="_blank"><img src="./mail.png" alt="email" /></a>
                            <a href="https://www.linkedin.com/in/ada-lawson/" target="_blank"><img src="./linkedin.png" alt="linkedin" /></a>
                            <a href="https://drive.google.com/file/d/1t2nlh3drCRTf-FeRBFCvqT9dRGtUAV2T/view?usp=sharing" target="_blank"><img src="./resume.png" alt="resume" /></a>
                        </div>
                    </div>
                    <div className="col-2">
                        <h3>Send me a message:</h3><br/>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="EMAIL"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="fullName" className="form-label"></label>
                                    <input type="text" className="form-control" id="fullName" placeholder="FULL NAME" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="message" className="form-label"></label>
                                    <input type="text" className="form-control" id="message" placeholder="TYPE YOUR MESSAGE HERE." />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                                </div>
                            </form>
                    </div>
                </div>
        </footer>
    )
}
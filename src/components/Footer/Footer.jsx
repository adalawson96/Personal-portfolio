import React from 'react';
import './Footer.css';

export default function Footer(){
    return(
        <footer>
            <body>
                <div class="footer">
                    <div class="col-1">
                        {/* makes header skill tag activated */}
                        {/* <a className="anchor" id="Contact"></a>
                        <div className={`flexCenter innerWidth ${css.container}`}>
                            <span className='primaryText yPaddings'>CONTACT</span>
                        </div><br /> */}

                        <h1>CONTACT</h1><br />
                        <h2> I enjoy building relationships with individuals who want to collaborate. Let's Connect!</h2>
                        <div class="social-icons">
                        <a style={{textDecoration: 'none'}} href="https://github.com/adalawson96"><img src="./github.png" alt="github" /></a>
                            <a style={{textDecoration: 'none'}} href="mailto:adalawson96@gmail.com"><img src="./mail.png" alt="email" /></a>
                            <a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/ada-lawson/"><img src="./linkedin.png" alt="linkedin" /></a>
                            <a style={{textDecoration: 'none'}} href=""><img src="./resume.png" alt="resume" /></a>

                           {/* <button type='button'><a style={{textDecoration: 'none'}} href="mailto:adalawson96@gmail.com">Email</a></button>  */}
                           {/* <button type='button'><a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/ada-lawson/">LinkedIn</a></button>  */}
                           {/* <button type='button'><a style={{textDecoration: 'none'}} href="https://github.com/adalawson96">Github</a> </button>  */}
                            {/* <i class="fab fa-resume">Resume</i> */}
                        </div>
                    </div>
                    <div class="col-2">
                        <h3>Send me a message:</h3><br/>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label"></label>

                                    <input type="email" class="form-control" id="inputEmail4" placeholder="EMAIL"/>
                                </div>
                                <div class="col-12">
                                    <label for="fullName" class="form-label"></label>
                                    <input type="text" class="form-control" id="fullName" placeholder="FULL NAME" />
                                </div>
                                <div class="col-12">
                                    <label for="message" class="form-label"></label>
                                    <input type="text" class="form-control" id="message" placeholder="TYPE YOUR MESSAGE HERE." />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">SUBMIT</button>
                                </div>
                            </form>
                    </div>
                </div>
            </body>
        </footer>
    )
}
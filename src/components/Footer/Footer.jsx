import React from 'react';
import './Footer.css';

export default function Footer(){
    return(
        <footer>
            <body>
                <div class="footer">
                    <div class="col-1">
                        <a class="anchor" id="Contact"></a>
                        <div class="flexCenter innerWidth">
                            <span class='primaryText yPaddings'>CONTACT</span>
                        </div>
                        <h2> I enjoy building relationships with individuals who want to collaborate. Let's Connect!</h2>
                        <div class="social-icons">
                            <a href="https://github.com/adalawson96"><img src="./github.png" alt="github" /></a>
                            <a href="mailto:adalawson96@gmail.com"><img src="./github.png" alt="email" /></a>
                            <a href="https://www.linkedin.com/in/ada-lawson/"><img src="./github.png" alt="linkedin" /></a>
                            <a href=""><img src="./github.png" alt="resume" /></a>
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
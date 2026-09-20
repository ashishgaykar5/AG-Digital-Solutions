import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* About */}
                <div className="footer-about">

                    <h3>AG</h3>

                    <p>
                        Building modern, reliable and
                        user-focused digital solutions
                        for businesses and individuals.
                    </p>

                    <div className="social-icons">
                        <a href="#">f</a>
                        <a href="#">in</a>
                        <a href="#">𝕏</a>
                        <a href="#">◎</a>
                    </div>

                </div>


                {/* Quick Links */}
                <div>

                    <h4>QUICK LINKS</h4>

                    <div className="footer-links">

                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>

                    </div>

                </div>


                {/* Services */}
                <div>

                    <h4>SERVICES</h4>

                    <div className="footer-services">

                        <p>Web Development</p>
                        <p>App Development</p>
                        <p>UI/UX Design</p>
                        <p>Software Solutions</p>

                    </div>

                </div>


                {/* Contact */}
                <div>

                    <h4>CONTACT INFO</h4>

                    <div className="footer-contact">

                        <p>
                            📧
                            <a href="mailto:agaykar47@gmail.com">
                                &nbsp;agaykar47@gmail.com
                            </a>
                        </p>

                        <p>
                            📞
                            <a href="tel:+918010039933">
                                &nbsp;+91 801-0039-933
                            </a>
                        </p>

                        <p>
                            🕘 Mon - Sat: 9AM - 6PM IST
                        </p>

                    </div>

                </div>

            </div>


            {/* Bottom */}
            <div className="footer-bottom">

                <p>
                    © 2026 AG Digital Solutions.
                    All rights reserved.
                </p>

                <div className="footer-bottom-links">

                    <a href="#">Privacy Policy</a>

                    <a href="#">Terms of Service</a>

                    <a href="#">Sitemap</a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
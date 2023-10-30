import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <div>
        <footer>
            <div className="content">
                <div className="top">
                    <div className="logo-details">
                        <img src="/Logo_Solution_Factory_2.png" alt="La l'e-brairie" width="100" height="100" />
                        <div className="logo_name">La L'e-brairie</div>
                    </div>
                </div>

                <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">Company</li>
                        <li><a href="/index-connected">Home</a></li>
                        <li><a href="/">Contact us</a></li>
                        <li><a href="/">About us</a></li>
                        <li><a href="/">Get started</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><a href="/">App design</a></li>
                        <li><a href="/">Web design</a></li>
                        <li><a href="/">Logo design</a></li>
                        <li><a href="/">Banner design</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Account</li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">My account</a></li>
                        <li><a href="/">Preferences</a></li>
                        <li><a href="/">Purchase</a></li>
                    </ul>
                    <ul className="box input-box">
                        <li className="link_name">Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2021 <a href="/">CodingLab.</a>All rights reserved</span>
                    <span className="policy_terms">
                        <a href="/">Privacy policy</a>
                        <a href="/">Terms & condition</a>
                    </span>
                </div>
            </div>
        </footer>
    </div>
  )
}
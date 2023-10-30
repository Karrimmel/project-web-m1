import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

/**
 * Footer component that displays the footer section of the website.
 * It includes links to various pages and a subscription input for newsletters.
 */
export default function Footer() {
  return (
    <div>
        <footer>
            <div className="content">
                {/* Top section of the footer with logo and company name */}
                <div className="top">
                    <div className="logo-details">
                        {/* Logo image */}
                        <img src="/Logo_Solution_Factory_2.png" alt="La l'e-brairie" width="100" height="100" />
                        {/* Company name */}
                        <div className="logo_name">La L'e-brairie</div>
                    </div>
                </div>

                {/* Link boxes for different categories */}
                <div className="link-boxes">
                    {/* Company information links */}
                    <ul className="box">
                        <li className="link_name">Company</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Get started</Link></li>
                    </ul>
                    {/* Services offered links */}
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><Link to="/">App design</Link></li>
                        <li><Link to="/">Web design</Link></li>
                        <li><Link to="/">Logo design</Link></li>
                        <li><Link to="/">Banner design</Link></li>
                    </ul>
                    {/* Account related links */}
                    <ul className="box">
                        <li className="link_name">Account</li>
                        <li><Link to="/">Profile</Link></li>
                        <li><Link to="/">My account</Link></li>
                        <li><Link to="/">Preferences</Link></li>
                        <li><Link to="/">Purchase</Link></li>
                    </ul>
                    {/* Subscription box for newsletters */}
                    <ul className="box input-box">
                        <li className="link_name">Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
            {/* Bottom section of the footer with copyright and policy links */}
            <div className="bottom-details">
                <div className="bottom_text">
                    {/* Copyright text */}
                    <span className="copyright_text">
                        Copyright © 2021 <Link to="/">CodingLab.</Link>All rights reserved
                    </span>
                    {/* Links to privacy policy and terms & conditions */}
                    <span className="policy_terms">
                        <Link to="/">Privacy policy</Link>
                        <Link to="/">Terms & condition</Link>
                    </span>
                </div>
            </div>
        </footer>
    </div>
  )
}

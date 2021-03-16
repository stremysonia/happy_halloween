import React from 'react';
import './Footer.css'
import 'boxicons'

const Footer = () => {
        return (
            <>
                <div>
                <ul className="footer-container">
                    <li className="rights">All Rights Reserved. Copyright © 2020 Sonia St.Remy</li>
                    <li>
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href="#">
                                <box-icon name='twitter' type='logo' color='white' size='sm' animation='burst-hover'>
                                </box-icon>
                        </a>
                    </li>
                        <li>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                    <box-icon name='instagram' type='logo' color='white' size='sm' animation='burst-hover'>
                                    </box-icon>
                            </a>
                        </li>
                            <li>
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="#">
                                        <box-icon name='facebook-circle' type='logo' color='white' size='sm' animation='burst-hover'>
                                        </box-icon>
                                </a>
                            </li>
                </ul>
                </div>
            </>
        );
}
export default Footer;

import React from 'react';
import styled from 'styled-components';
import footerBG from '../../images/footer_bg.png';


const Footer = () => (
    <footer>
        <FooterContent>
        2020 © BetterLifesavings Int’l. All rights reserved. 
        </FooterContent>
    </footer>
);

export default Footer;

const FooterContent = styled.div`
    color: #fff;
    background: url(${footerBG}) no-repeat;
    margin-bottom: 0;
    padding: 2rem;
`;

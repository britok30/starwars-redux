import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            <FooterP>Made with React | By Kelvin Brito</FooterP>
        </div>
    );
};

export default Footer;

const FooterP = styled.p`
    font-size: 12px;
    font-weight: 300;
    text-align: center;
`;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import {
    Icon,
    SmallText,
    SocialLinksContainer,
    FooterContainer
} from './footer.styles';


const Footer = () => {
    return (
        <FooterContainer>
            <SocialLinksContainer>
                <Icon color='#4267B2' to={{ pathname: "https://github.com/ddwebdevv?tab=repositories" }} target="_blank">
                    <FontAwesomeIcon icon={faFacebook}/>
                </Icon>
                <Icon color='#C13584' to={{ pathname: 'https://www.linkedin.com/in/dmitry-dergunov-5a21161b6/' }} target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </Icon>
            </SocialLinksContainer>            
            <SmallText>2021 Charity Organization</SmallText>
        </FooterContainer>
    );
};

export default Footer;
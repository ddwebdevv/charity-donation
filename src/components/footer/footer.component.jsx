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
                <Icon color='#4267B2'>
                    <FontAwesomeIcon icon={faFacebook} />
                </Icon>
                <Icon color='#E1306C'>
                    <FontAwesomeIcon icon={faInstagram} />
                </Icon>
            </SocialLinksContainer>            
            <SmallText>2021 Charity Organization</SmallText>
        </FooterContainer>
    );
};

export default Footer;
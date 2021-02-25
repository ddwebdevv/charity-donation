import React from 'react';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';


const Header = () => {
    return (
        <HeaderContainer>
            <OptionsContainer>
                <OptionLink to='/donate'>
                    Donate
                </OptionLink>
                <OptionLink to='/contactus'>
                    Contact Us
                </OptionLink>
            </OptionsContainer>
        </HeaderContainer>
    );
};

export default Header;
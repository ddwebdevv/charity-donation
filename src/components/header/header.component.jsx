import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo2.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';


const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
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
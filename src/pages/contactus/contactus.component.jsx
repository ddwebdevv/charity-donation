import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/fontawesome-free';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import ContentWrapper from '../../components/content-wrapper/content-wrapper.component';

import {
    PageContainer,
    Text,
    List,
    LiText,
    ListContainer,
    Icon,
    ColumnContainer
} from './contactus.styles';
import { DefaultTitle } from '../../global.styles';
import globalColors from '../../global.colors';

const ContactUs = () => {

    return (
        <PageContainer>
            <DefaultTitle>
                Message for my future employer
            </DefaultTitle>
            <Text>This project was made with following goals in mind:</Text>
            <ListContainer>
                <List>
                    <li><LiText>create Progressive Web App</LiText></li>
                    <li><LiText>creating simple reusable components for this project</LiText></li>
                    <li><LiText>creating complex reusable components( RadioButtonGroup) which can be used as open source components library</LiText></li>
                    <li><LiText>demonstrating ability to write high quality and maintainable code</LiText></li>
                    <li><LiText>demonstrating knowledge of modern practices</LiText></li>
                </List>
            </ListContainer>
            <ContentWrapper title='Contact Us' color={globalColors.primary}>
                <ColumnContainer>
                    <Text>General questions</Text>
                    <Icon href='mailto:hello@tco.org'>
                        <FontAwesomeIcon icon={faEnvelope}/>  hello@tco.org
                    </Icon>
                    <Text>Events information</Text>
                    <Icon href='mailto:events@tco.org'>
                        <FontAwesomeIcon icon={faEnvelope}/>  events@tco.org
                    </Icon>
                    <Text>Donations support</Text>
                    <Icon href='mailto:donation@tco.org'>
                        <FontAwesomeIcon icon={faEnvelope}/>  donation@tco.org
                    </Icon>
                </ColumnContainer>
            </ContentWrapper>
        </PageContainer>
    );
};

export default ContactUs;
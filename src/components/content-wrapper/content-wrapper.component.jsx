import React from 'react';

import { DefaultTitle } from '../../global.styles';

import { ContentContainer, SectionContainer } from './content-wrapper.styles';

const ContentWrapper = ({ children, title, color }) => {
    return (
        <SectionContainer bgColor={color}>
            <DefaultTitle>
                {title}
            </DefaultTitle>
            <ContentContainer>
                {children}
            </ContentContainer>
        </SectionContainer>
    );
};

export default ContentWrapper;
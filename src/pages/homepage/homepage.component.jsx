import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    PageContainer,
    SectionContainer,
    Image,
    ImageContainer,
    ContentContainer,
    TextWithImage,
    Text
} from './homepage.styles';
import { DefaultTitle, TheTitle } from '../../global.styles';
import Colors from '../../global.colors';

import bgImage from '../../assets/home-history.jpg';
import CustomButton from '../../components/custom-button/custom-button.component';


const HomePage = ({ history, match }) => {
    return (
        <PageContainer>
            <TheTitle>The Charity Organization</TheTitle>
            <SectionContainer bgColor={Colors.primary}>
                <DefaultTitle>
                    Mission
                </DefaultTitle>
                <ContentContainer>
                    <Text>
                        The Charity Organization prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.
                    </Text>
                </ContentContainer>
            </SectionContainer>
            <SectionContainer>
                <ContentContainer>
                    <DefaultTitle>
                        Change Lives!
                    </DefaultTitle>
                    <CustomButton donate style={{ margin: '10px 40px'}}>
                        Donate!
                    </CustomButton>
                    <DefaultTitle>
                        Donate Now!
                    </DefaultTitle>
                </ContentContainer>
            </SectionContainer>
            <SectionContainer bgColor={Colors.secondary}>
                <DefaultTitle>
                    History
                </DefaultTitle>
                <ContentContainer>
                    <TextWithImage>
                        The Charity Organization is an impartial, neutral and independent organization whose exclusively humanitarian mission is to protect the lives and dignity of victims of armed conflict and other situations of violence and to provide them with assistance.The CO also endeavours to prevent suffering by promoting and strengthening humanitarian law and universal humanitarian principles.Established in 1863, the OC is at the origin of the Geneva Conventions and the International OC and OC Movement. It directs and coordinates the international activities conducted by the Movement in armed conflicts and other situations of violence.
                    </TextWithImage>
                    <ImageContainer>
                        <Image src={bgImage} onClick={() => history.push(`${match.url}contactus`)}/>
                    </ImageContainer>
                </ContentContainer>
            </SectionContainer>
        </PageContainer>
    );
};

export default withRouter(HomePage);
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
    PageContainer,
    Image,
    ImageContainer,
    TextWithImage
} from './homepage.styles';
import { DefaultTitle, TheTitle, Text } from '../../global.styles';
import Colors from '../../global.colors';

import bgImage from '../../assets/home-history.jpg';
import CustomButton from '../../components/custom-button/custom-button.component';
import ContentWrapper from '../../components/content-wrapper/content-wrapper.component';
import CustomModal from '../../components/modal/modal.component';
import FormInput from '../../components/form-input/form-input.component';


const HomePage = ({ history, match }) => {
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const inputHandle = (e) => {
        setEmail(e.target.value);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setEmail('');
    };

    return (
        <PageContainer>
            <TheTitle>The Charity Organization</TheTitle>
            <ContentWrapper color={Colors.primary} title='Mission'>
                <Text>
                    The Charity Organization prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.
                </Text>
            </ContentWrapper>
            <ContentWrapper>
                <DefaultTitle>
                    Change Lives!
                </DefaultTitle>
                <CustomButton donate style={{ margin: '10px 40px'}}
                    onClick={() => history.push('/donate')}
                >
                    Donate!
                </CustomButton>
                <DefaultTitle>
                    Donate Now!
                </DefaultTitle>
            </ContentWrapper>
            <ContentWrapper color={Colors.secondary} title='History'>
                <TextWithImage>
                    The Charity Organization is an impartial, neutral and independent organization whose exclusively humanitarian mission is to protect the lives and dignity of victims of armed conflict and other situations of violence and to provide them with assistance.The CO also endeavours to prevent suffering by promoting and strengthening humanitarian law and universal humanitarian principles.Established in 1863, the OC is at the origin of the Geneva Conventions and the International OC and OC Movement. It directs and coordinates the international activities conducted by the Movement in armed conflicts and other situations of violence.
                </TextWithImage>
                <ImageContainer>
                    <Image src={bgImage} onClick={() => history.push(`${match.url}contactus`)}/>
                </ImageContainer>
            </ContentWrapper>
            <ContentWrapper title='Do not miss latest news'>
                <FormInput
                     value={email}
                     onChange={inputHandle}
                     condition={email.length}
                     label='Enter Your Email'
                />
                <CustomButton onClick={() => setIsModalOpen(true)}>
                    Subscribe!
                </CustomButton>
            </ContentWrapper>
            <CustomModal
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
                title='Thank you,'
                varText={email}
                text='Helping others you are making this world a better place!'
            />
        </PageContainer>
    );
};

export default withRouter(HomePage);
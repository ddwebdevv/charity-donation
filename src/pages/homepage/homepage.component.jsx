import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-rainbow-components';

import {
    PageContainer,
    Image,
    ImageContainer,
    TextWithImage,
    Text,
    Input,
    Label,
    InputContainer
} from './homepage.styles';
import { DefaultTitle, TheTitle } from '../../global.styles';
import Colors from '../../global.colors';

import bgImage from '../../assets/home-history.jpg';
import CustomButton from '../../components/custom-button/custom-button.component';
import ContentWrapper from '../../components/content-wrapper/content-wrapper.component';


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
                <CustomButton donate style={{ margin: '10px 40px'}}>
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
                <InputContainer>
                    <Input type='text' value={email} onChange={inputHandle} />
                    <Label className={email.length ? 'shrink' : ''}>
                        Enter Your Email
                    </Label>
                </InputContainer>
                <CustomButton onClick={() => setIsModalOpen(true)}>
                    Subscribe!
                </CustomButton>
            </ContentWrapper>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
            >
                <Text>Thank you,</Text>
                <Text>{email}</Text>
                <Text>Helping others you are making this world a better place!</Text>
            </Modal>
        </PageContainer>
    );
};

export default withRouter(HomePage);
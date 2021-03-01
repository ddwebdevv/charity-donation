import React, { useState } from 'react';


import RadioButtonGroup from '../../components/radio-button-group/radio-button-group.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
    Container,
    Text,
    PageContainer,
    Image
} from './donatepage.styles';
import { DefaultTitle } from '../../global.styles';
import CustomModal from '../../components/modal/modal.component';

const DonatePage = () => {
    const bgImage = './donate.jpg';
    const shopImage = './groceries.jpg';
    const options = [
        'Monthly',
        'Weekly',
        'One-Time'
    ];
    const percentOptions = [
        '5%',
        '10%',
        '15%',
        '20%',
        'Other'
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <PageContainer imageUrl={process.env.PUBLIC_URL + bgImage}>
            <Container>
                <DefaultTitle>
                    Make a donation
                </DefaultTitle>
                <Text>
                    The Charity Organization works tirelessly to help everyone in need access the vital medical supplies they need to survive. Right now this is more important than ever. You can make a difference. Support of the urgent humanitarian needs of the Charity Organization with your financial gift.
                </Text>
                <RadioButtonGroup
                    options={options}
                    borderRadius='25px'
                    styles={{ width: '65%', margin: '20px' }}
                />
                <Image src={process.env.PUBLIC_URL + shopImage} />
                <Text style={{ textAlign: 'center' }}>Whenever you buy groceries, donate</Text>
                <RadioButtonGroup
                    options={percentOptions}
                    borderRadius='25px'
                    styles={{ width: '65%', margin: '20px', 'min-width': '50%' }}
                />
                <CustomButton donate style={{ marginBottom: '30px' }}
                    onClick={() => setIsModalOpen(true)}
                >
                    Donate!
                </CustomButton>
                <Text>Your donations matter, because every donation we receive goes toward the people who are less fortunate. Help us and join our cause. </Text>
                <CustomModal
                    isModalOpen={isModalOpen}
                    handleModalClose={handleModalClose}
                    title='Thank you for your generous donation!'
                    text='Helping others you are making this world a better place!'
                />
            </Container>
        </PageContainer>
    );
};

export default DonatePage;
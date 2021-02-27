import React from 'react';

import {
    BgImage,
    Container,
    Text,
    PageContainer
} from './donatepage.styles';
import { DefaultTitle } from '../../global.styles';

const DonatePage = () => {
    const bgImage = './donate.jpg'

    return (
        <>
        <BgImage imageUrl={process.env.PUBLIC_URL + bgImage} />
        <PageContainer>
            <Container>
                <DefaultTitle>
                    Make a donation
                </DefaultTitle>
                <Text>
                    The Charity Organization works tirelessly to help everyone in need access the vital medical supplies they need to survive. Right now this is more important than ever. You can make a difference. Support of the urgent humanitarian needs of the Charity Organization with your financial gift.
                </Text>
            </Container>
        </PageContainer>
        </>
    );
};

export default DonatePage;
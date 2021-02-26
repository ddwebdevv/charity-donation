import React from 'react';

import { DefaultTitle } from '../../global.styles';


const HomeCss = () => {
    return (
        <div className='page-container'>
            <p>Homepage</p>
            <div className='section-container'>
                <DefaultTitle>
                    Mission
                </DefaultTitle>
                <div className="content-container">
                    <p className="text">
                        The Charity Organization prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.
                    </p>
                </div>
            </div>
            <div className='section-container'>
                <DefaultTitle>
                    History
                </DefaultTitle>
                <div className="content-container">
                    <p className='text-image'>
                        The Charity Organization is an impartial, neutral and independent organization whose exclusively humanitarian mission is to protect the lives and dignity of victims of armed conflict and other situations of violence and to provide them with assistance.The CO also endeavours to prevent suffering by promoting and strengthening humanitarian law and universal humanitarian principles.Established in 1863, the OC is at the origin of the Geneva Conventions and the International OC and OC Movement. It directs and coordinates the international activities conducted by the Movement in armed conflicts and other situations of violence.
                    </p>
                    <div className="image-container">
                        <img src={bgImage} width='100%' height='100%' />
                    </div>
                </div>
            </div>
        </div>
    );
};
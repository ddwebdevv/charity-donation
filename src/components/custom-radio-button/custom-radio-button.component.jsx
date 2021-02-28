import React from 'react';
import { CustomRadioButtonContainer } from './custom-radio-button.styles';

const CustomRadioButton = ({ title, active, onChoice, borderRadius, ...props }) => (
    <CustomRadioButtonContainer
        className={active ? 'active' : ''}
        borderRadius={borderRadius}
        {...props}
        onClick={onChoice}
    >
        {title}
    </CustomRadioButtonContainer>
);

export default CustomRadioButton;
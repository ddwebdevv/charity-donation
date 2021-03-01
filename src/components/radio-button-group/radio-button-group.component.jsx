import React, { useState } from 'react';

import CustomRadioButton from '../custom-radio-button/custom-radio-button.component';

import {
    RadioButtonGroupContainer
} from './radio-button-group.styles';

const RadioButtonGroup = ({ options, styles, borderRadius }) => {
    const [activeButton, setActiveButton] = useState(0);

    const width = `${(100 / (options.length)).toFixed(2)}%`;

    return (
        <RadioButtonGroupContainer styles={styles} borderRadius={borderRadius}>
            {options.map((option, index )=> 
                <CustomRadioButton
                    width={width}
                    title={option}
                    key={index}
                    active={index === activeButton ? true : false}
                    onChoice={() => setActiveButton(index)}
                    borderRadius={borderRadius}
                />
            )}
        </RadioButtonGroupContainer>
    );
};

export default RadioButtonGroup;
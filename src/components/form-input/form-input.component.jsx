import React from 'react';

import {
    InputContainer,
    Input,
    Label
} from './form-input.styles';

const FormInput = ({ value, onChange, condition, label }) => {
    return (
        <InputContainer>
            <Input type='text' value={value} onChange={onChange} />
            <Label className={condition ? 'shrink' : ''}>
                {label}
            </Label>
        </InputContainer>
    );
};

export default FormInput;
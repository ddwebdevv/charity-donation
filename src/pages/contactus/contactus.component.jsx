import React from 'react';
import RadioButtonGroup from '../../components/radio-button-group/radio-button-group.component';

const ContactUs = () => {
    const options = [
        'Monthly',
        'Weekly',
        'One-Time',
        'another'
    ];

    return (
        <div>
            <p>ContactUs</p>
            <RadioButtonGroup
                options={options}
            />
        </div>
    );
};

export default ContactUs;
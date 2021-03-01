import React from 'react';
import { Modal } from 'react-rainbow-components';

import { Text } from '../../global.styles';

const CustomModal = ({ title, text, varText, isModalOpen, handleModalClose }) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleModalClose}
        >
            <Text>{title}</Text>
            <Text>{varText}</Text>
            <Text>{text}</Text>
        </Modal>
    );
};

export default CustomModal;
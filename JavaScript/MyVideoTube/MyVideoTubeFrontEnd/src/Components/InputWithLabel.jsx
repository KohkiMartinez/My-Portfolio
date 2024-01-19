import PropTypes from 'prop-types';
import React from 'react';

const InputWithLabel = React.memo(({ id, label, value, onInputChange }) => (
    
    <>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            type='text'
            value={value}
            onChange={onInputChange}
        />
    </>
));
InputWithLabel.displayName = 'InputWithLabel'

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
};


export default InputWithLabel;

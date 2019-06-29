import React, { Component } from 'react';
import PropTypes from 'prop-types';

// MUI
import TextField from '@material-ui/core/TextField';


const InputField = ({
  variant,
  id,
  label,
  name,
  value,
  autoComplete,
  onChange
}) => {
  return (
    <div className='register-text-field'>
      <TextField
        variant={variant}
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </div>
  );
}

InputField.propTypes = {
  variant: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputField;
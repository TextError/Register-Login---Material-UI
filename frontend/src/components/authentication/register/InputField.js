import React, { Component } from 'react';
import PropTypes from 'prop-types';

// MUI
import TextField from '@material-ui/core/TextField';


const InputField = ({
  variant,
  id,
  label,
  name,
  autoComplete
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
        autoComplete={autoComplete}
      />
    </div>
  );
}

InputField.propTypes = {
  variant: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputField;
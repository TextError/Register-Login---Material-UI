import React from 'react';
import PropTypes from 'prop-types';

// MUI
import TextField from '@material-ui/core/TextField';


const InputField = ({
  variant,
  id,
  label,
  name,
  value,
  type,
  autoComplete,
  onChange
}) => {
  return (
    <div className='input-field'>
      <TextField
        variant={variant}
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        type={type}
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
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  type: 'text'
};

export default InputField;
import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { control, name, label, disabled } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={() => <TextField label={label} disabled={disabled} fullWidth />}
    />
  );
};

export default InputField;

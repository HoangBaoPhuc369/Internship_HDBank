import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

interface RadioButtonProps {
  value: string;
  label: string;
}

const RadioButton = (props: RadioButtonProps) => {
  const { value, label } = props;
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          sx={{
            color: "#181818",
            "&.Mui-checked": {
              color: "#F0B41C",
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default RadioButton;

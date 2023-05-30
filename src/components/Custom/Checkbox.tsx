import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

interface CheckboxProps {
  label: string;
  required: boolean;
}

const CheckBox = (props: CheckboxProps) => {
  const { label, required } = props;
  return (
    <FormControlLabel
      control={
        <Checkbox
          required={required}
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

export default CheckBox;

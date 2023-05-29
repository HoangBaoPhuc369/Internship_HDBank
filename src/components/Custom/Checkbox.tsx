import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

interface CheckboxProps {
  label: string;
}

const CheckBox = (props: CheckboxProps) => {
  const { label } = props;
  return (
    <FormControlLabel
      required
      control={
        <Checkbox
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

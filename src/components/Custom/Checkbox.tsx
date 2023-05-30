import { Checkbox, FormControlLabel } from "@mui/material";

interface CheckboxProps {
  label: string;
}

const CheckBox = (props: CheckboxProps) => {
  const { label } = props;
  return (
    <FormControlLabel
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

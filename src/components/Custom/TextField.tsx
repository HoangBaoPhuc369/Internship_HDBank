import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";

interface ButtonProps {
  iconEnd?: any;
  label?: string;
  required?: boolean;
  w?: string;
  h?: string;
  mr?: string;
}
const TextFieldd = (props: ButtonProps) => {
  const { iconEnd, label, required, w, h, mr } = props;
  return (
    <TextField
      sx={{
        height: h,
        width: w,
        marginRight: mr,
      }}
      required={required}
      label={label}
      InputProps={{
        endAdornment: <InputAdornment position="end">{iconEnd}</InputAdornment>,
      }}
    />
  );
};
export default TextFieldd;

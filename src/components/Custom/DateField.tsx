import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { createTheme } from "@mui/material";
import ThemoProviderr from "./ThemoProvider";

interface DatePickerProps {
  label: string;
  w?: string;
  mr?: string;
}
const DateFieldd = (props: DatePickerProps) => {
  const { label, w, mr } = props;

  return (
    <ThemoProviderr>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          sx={{
            width: w ? w : "328px",
            marginRight: mr,
          }}
        />
      </LocalizationProvider>
    </ThemoProviderr>
  );
};

export default DateFieldd;

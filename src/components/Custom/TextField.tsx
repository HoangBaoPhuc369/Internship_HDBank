import {
  IconButton,
  InputAdornment,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import ThemoProviderr from "./ThemoProvider";

interface ButtonProps {
  iconEnd?: any;
  label?: string;
  required?: boolean;
  w?: string;
  h?: string;
  mr?: string;
}

const TextFieldd = (props: ButtonProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F0B41C", // Màu chính của theme khi click vào inputField
      },
    },
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            // "&$focused": {
            //   borderColor: "#F0B41C", // Màu khi tương tác
            // },
            "&$error": {
              borderColor: "#EB0400", // Màu khi bị lỗi
            },
            borderColor: "#A1998C", // Màu khi không tương tác
          },
        },
      },
    },
  });

  const { iconEnd, label, required, h, mr } = props;
  return (
    <ThemoProviderr>
      <TextField
        sx={{
          fontSize: "16px",
          height: h,
          width: "328px",
          marginRight: mr,
        }}
        required={required}
        label={label}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>{iconEnd}</IconButton>
            </InputAdornment>
          ),
        }}
      />
    </ThemoProviderr>
  );
};
export default TextFieldd;

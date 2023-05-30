import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

interface ThemoProviderProps {
  children: React.ReactNode;
}

const ThemoProviderr = (props: ThemoProviderProps) => {
  const { children } = props;
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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemoProviderr;

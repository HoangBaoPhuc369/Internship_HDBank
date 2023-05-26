import { Button } from "@mui/material";

interface ButtonProps {
  bgcolor?: string;
  color?: string;
  hoverBgcolor?: string;
  hoverColor?: string;
  label?: string;
  startIcon?: any;
}

const Buttonn = (props: ButtonProps) => {
  const { bgcolor, color, hoverBgcolor, hoverColor, label, startIcon } = props;
  return (
    <Button
      startIcon={startIcon}
      variant="contained"
      sx={{
        bgcolor: bgcolor,
        color: color,
        ":hover": {
          bgcolor: hoverBgcolor,
          color: hoverColor,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default Buttonn;

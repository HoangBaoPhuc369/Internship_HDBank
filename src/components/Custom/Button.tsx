import { Button } from "@mui/material";

interface ButtonProps {
  bgcolor?: string;
  color?: string;
  hoverBgcolor?: string;
  hoverColor?: string;
  label?: string;
  startIcon?: any;
  m?: string;
  ml?: string;
  mr?: string;
}

const Buttonn = (props: ButtonProps) => {
  const {
    bgcolor,
    color,
    hoverBgcolor,
    hoverColor,
    label,
    startIcon,
    m,
    ml,
    mr,
  } = props;
  return (
    <Button
      startIcon={startIcon}
      variant="contained"
      sx={{
        mr: mr,
        ml: ml,
        m: m,
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

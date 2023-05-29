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
  gap?: string;
  h?: string;
  w?: string;
  fs?: number;
  fw?: number | string;
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
    gap,
    w,
    h,
    fs,
    fw,
  } = props;
  return (
    <Button
      startIcon={startIcon}
      variant="contained"
      sx={{
        fontSize: fs,
        fontWeight: fw,
        textTransform: "none",
        boxShadow: "none",
        borderRadius: "8px",
        height: h,
        widows: w,
        gap: gap,
        mr: mr,
        ml: ml,
        m: m,
        bgcolor: bgcolor,
        color: color,
        ":hover": {
          bgcolor: hoverBgcolor,
          color: hoverColor,
          boxShadow: "none",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default Buttonn;

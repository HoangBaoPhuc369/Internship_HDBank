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
  } = props;
  return (
    <Button
      startIcon={startIcon}
      variant="contained"
      sx={{
        boxShadow: "none",
        borderRadius: "8px",
        // padding: "0px 24px 0px 20px",
        height: "56px",
        widows: "155px",
        gap: gap,
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

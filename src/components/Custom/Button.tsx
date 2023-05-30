import { Button } from "@mui/material";

interface ButtonProps {
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
  href?: string;
}

const Buttonn = (props: ButtonProps) => {
  const { label, startIcon, m, ml, mr, gap, w, h, fs, fw, href } = props;
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
        color: "#181818",
        backgroundColor: "#F0B41C",
        ":hover": {
          bgcolor: "#F0B41C",
          color: "#181818",
          boxShadow: "none",
        },
      }}
      href={href}
    >
      {label}
    </Button>
  );
};

export default Buttonn;

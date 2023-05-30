import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, IconButton } from "@mui/material";
const LogoutSection = () => {
  return (
    <Box pr={1}>
      <IconButton>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default LogoutSection;

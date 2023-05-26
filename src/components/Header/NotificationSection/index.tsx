import { Badge, Box, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";

const NotificationSection = () => {
  return (
    <Box pr={1 / 2}>
      <IconButton>
        <Badge badgeContent={90} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default NotificationSection;

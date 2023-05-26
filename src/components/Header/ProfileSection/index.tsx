import { Avatar, Box, Typography } from "@mui/material";
import avatar from "../../../assets/avatar.svg";
import React from "react";

const ProfileSection = () => {
  return (
    <Box display={"flex"} alignItems={"center"} px={1 / 2}>
      <Typography variant="h6" color={"#000000"} mr={1}>
        Khoa
      </Typography>
      <Avatar src={avatar} />
    </Box>
  );
};

export default ProfileSection;

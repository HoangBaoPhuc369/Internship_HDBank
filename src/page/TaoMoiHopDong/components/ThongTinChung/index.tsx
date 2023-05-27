import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextFieldd from "../../../../components/Custom/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Buttonn from "../../../../components/Custom/Button";
import { Box, Grid, Typography } from "@mui/material";
const ThongTinChung = () => {
  return (
    <Box>
      <Grid item pt={4} pb={2}>
        <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
          1. Thông tin chung
        </Typography>
      </Grid>
      <Grid item display={"flex"} alignItems={"center"}>
        <TextFieldd
          w="344px"
          iconEnd={<ClearIcon />}
          label="Mã khách hàng (CIF)"
          required={true}
        />
        <Buttonn
          gap="4px"
          ml="16px"
          startIcon={<SearchIcon />}
          label="Kiểm tra"
          color="#181818"
          bgcolor="#F0B41C"
          hoverColor="#181818"
          hoverBgcolor="#F0B41C"
        />
      </Grid>
    </Box>
  );
};

export default ThongTinChung;

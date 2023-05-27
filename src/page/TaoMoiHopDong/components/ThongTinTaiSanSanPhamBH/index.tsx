import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TextFieldd from "../../../../components/Custom/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ThongTinTaiSanSanPhamBH = () => {
  return (
    <Box>
      <Grid item pt={3} pb={2}>
        <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
          3. Thông tin Tài sản & Sản phẩm bảo hiểm
        </Typography>
      </Grid>
      <Grid item display={"flex"} alignItems={"center"}>
        <TextFieldd
          w="344px"
          mr="16px"
          iconEnd={<KeyboardArrowDownIcon />}
          label="Số HĐBH"
          required={true}
        />
        <TextFieldd
          w="344px"
          iconEnd={<KeyboardArrowDownIcon />}
          label="Giới tính"
          required={true}
        />
      </Grid>
      <Grid item pt={2} display={"flex"} alignItems={"center"}>
        <TextFieldd
          w="344px"
          mr="16px"
          label="Số HĐBH"
          iconEnd={<KeyboardArrowDownIcon />}
          required={true}
        />
      </Grid>
    </Box>
  );
};

export default ThongTinTaiSanSanPhamBH;

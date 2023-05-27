import { Box, Grid, Typography } from "@mui/material";
import TextFieldd from "../../../../components/Custom/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ThongTinKhachHang = () => {
  return (
    <Box>
      <Grid item pt={3} pb={2}>
        <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
          2. Thông tin khách hàng
        </Typography>
      </Grid>
      <Grid item display={"flex"} alignItems={"center"}>
        <TextFieldd
          w="344px"
          iconEnd={<KeyboardArrowDownIcon />}
          label="Loại khách hàng"
          required={true}
        />
      </Grid>
      <Grid item pt={2} display={"flex"} alignItems={"center"}>
        <TextFieldd
          w="344px"
          mr="16px"
          label="Họ & tên cá nhân / Doanh nghiệp"
          required={true}
        />
        <TextFieldd
          w="344px"
          mr="16px"
          label="Giới tính"
          iconEnd={<KeyboardArrowDownIcon />}
          required={true}
        />
        <TextFieldd
          w="344px"
          mr="16px"
          label="CMND/CCCD/Giấy phép kinh doanh"
          iconEnd={<KeyboardArrowDownIcon />}
          required={true}
        />
      </Grid>
    </Box>
  );
};

export default ThongTinKhachHang;

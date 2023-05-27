import { Box, Divider, Typography } from "@mui/material";

import ThongTinChung from "./ThongTinChung";
import ThongTinKhachHang from "./ThongTinKhachHang";
import ThongTinTaiSanSanPhamBH from "./ThongTinTaiSanSanPhamBH";
const HDTaoMoiHopDong = () => {
  return (
    <Box p={2} bgcolor={"white"} color={"black"} borderRadius={2}>
      <Typography fontSize={28} fontWeight={600} color={"#3E3C39"} pb={2}>
        Tạo mới hợp đồng
      </Typography>
      <Divider />
      <ThongTinChung />
      <ThongTinKhachHang />
      <ThongTinTaiSanSanPhamBH />
    </Box>
  );
};

export default HDTaoMoiHopDong;

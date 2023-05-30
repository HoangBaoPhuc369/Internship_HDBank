import { Box,  Grid, Typography } from "@mui/material";
import TextFieldd from "../../../../components/Custom/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Buttonn from "../../../../components/Custom/Button";
import SearchIcon from "@mui/icons-material/Search";
import CheckBox from "../../../../components/Custom/Checkbox";

const ThongTinCBTuVanTT = () => {
  return (
    <Box>
      <Grid item pt={5} pb={2}>
        <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
          5. Thông tin CBNV tư vấn trực tiếp
        </Typography>
      </Grid>
      <Grid xs={12} pt={2} item display={"flex"} alignItems={"center"}>
        <TextFieldd
          w="344px"
          mr="16px"
          label="Mã CBNV tư vấn trực tiếp"
          required={true}
          iconEnd={<ClearIcon />}
        />
        <Buttonn
          fs={18}
          h="56px"
          w="155px"
          gap="4px"
          startIcon={<SearchIcon />}
          label="Kiểm tra"
         
        />
      </Grid>
      <Grid xs={12} pt={2} item display={"flex"} alignItems={"center"}>
        <TextFieldd
          w="344px"
          mr="16px"
          label="Tên CBNV tư vấn trực tiếp"
          required={true}
        />
        <TextFieldd
          w="344px"
          mr="16px"
          label="Chi nhánh /PGD CBNV trực thuộc"
          required={true}
        />
      </Grid>
      <Grid xs={12} pt={5}>
        <CheckBox label="Thay đổi bên thụ hưởng" />
      </Grid>
    </Box>
  );
};

export default ThongTinCBTuVanTT;

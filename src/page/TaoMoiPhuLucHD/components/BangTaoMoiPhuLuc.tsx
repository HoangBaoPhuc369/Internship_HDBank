import { Box, Divider, Grid, Typography } from "@mui/material";
import TextFieldd from "../../../components/Custom/TextField";
import Buttonn from "../../../components/Custom/Button";
import SearchIcon from "@mui/icons-material/Search";
import CheckBox from "../../../components/Custom/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import SendIcon from "@mui/icons-material/Send";
const BangTaoMoiPhuLuc = () => {
  return (
    <Box p={2} mt={3} bgcolor={"white"} color={"black"} borderRadius={2}>
      <Typography fontSize={28} fontWeight={600} color={"#3E3C39"}>
        Tạo mới Phụ lục hợp đồng
      </Typography>
      <Divider />
      {/* 1 */}
      <Box>
        <Grid pt={3} pb={2}>
          <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
            1. Thông tin HĐ phụ lục
          </Typography>
          <Grid item pt={2}>
            <TextFieldd mr="16px" label="Số HĐ phụ lục" />
            <TextFieldd label="Số HĐBH chính" required={true} />
          </Grid>
          <Grid item pt={2}>
            <TextFieldd mr="16px" label="Người được Bảo hiểm" />
            <TextFieldd mr="16px" label="Số tiền BH bổ sung" />
            <TextFieldd label="Phí BH bổ sung (Gồm VAT)" />
          </Grid>
          <Grid item pt={2}>
            <TextFieldd mr="16px" label="Ngày nộp phí" />
            <TextFieldd label="Ngày hết hạn" />
          </Grid>
        </Grid>
      </Box>
      {/* 2 */}
      <Box>
        <Grid pt={3} pb={2}>
          <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
            2. Thông tin CBNV tư vấn trực tiếp
          </Typography>
          <Grid item pt={2}>
            <TextFieldd
              w="344px"
              label="Mã CBNV tư vấn trực tiếp"
              required={true}
            />
            <Buttonn
              fs={18}
              h="56px"
              w="155px"
              gap="4px"
              ml="16px"
              startIcon={<SearchIcon />}
              label="Kiểm tra"
            />
          </Grid>
          <Grid item pt={2}>
            <TextFieldd
              mr="16px"
              label="Tên CBNV tư vấn trực tiếp"
              required={true}
            />
            <TextFieldd label="Chi nhánh/PGD CBNV trực thuộc" required={true} />
          </Grid>
          <Grid item pt={5}>
            <CheckBox label="Thay đổi bên thụ hưởng" />
          </Grid>
        </Grid>
      </Box>
      {/* 3 */}
      <Box>
        <Grid pt={3} pb={2}>
          <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
            3. Bên thụ hưởng
          </Typography>
          <Grid item pt={2}>
            <TextFieldd
              mr="16px"
              label="Chi nhánh/PGD CBNV thụ hưởng"
              iconEnd={<KeyboardArrowDownIcon />}
            />
          </Grid>
          <Grid item pt={6} display={"flex"} justifyContent={"center"}>
            <Buttonn
              fs={18}
              mr="16px"
              h="56px"
              w="155px"
              gap="4px"
              label="Lưu"
              startIcon={<CheckIcon />}
            />
            <Buttonn
              mr="16px"
              fs={18}
              h="56px"
              w="155px"
              gap="4px"
              label="Chuyển duyệt"
              startIcon={<SendIcon />}
            />
            <Buttonn fs={18} h="56px" w="155px" gap="4px" label="Quay lại" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default BangTaoMoiPhuLuc;

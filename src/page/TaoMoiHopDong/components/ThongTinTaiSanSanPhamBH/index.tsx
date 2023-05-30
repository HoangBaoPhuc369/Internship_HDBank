import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import TextFieldd from "../../../../components/Custom/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Buttonn from "../../../../components/Custom/Button";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import DateFieldd from "../../../../components/Custom/DateField";
import { useState } from "react";

const ThongTinTaiSanSanPhamBH = () => {
  const [show, setShow] = useState(false);
  const isClickShow = () => {
    setShow(true);
  };
  const isClickClose = () => {
    setShow(false);
  };
  return (
    <Box>
      <Grid xs={12} item pb={2}>
        <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
          3. Thông tin Tài sản & Sản phẩm bảo hiểm
        </Typography>
      </Grid>
      <Grid xs={12} item display={"flex"} alignItems={"center"}>
        <TextFieldd
          mr="16px"
          iconEnd={<KeyboardArrowDownIcon />}
          label="Số HĐBH"
          required={true}
        />
        <TextFieldd label="HĐBH mới/tái tục" required={true} />
      </Grid>
      <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
        <TextFieldd mr="16px" label="Trạng thái HĐ" required={true} />
      </Grid>
      <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
        <TextFieldd
          mr="16px"
          label="Đối tượng bảo hiểm"
          iconEnd={<KeyboardArrowDownIcon />}
          required={true}
        />
        <TextFieldd
          mr="16px"
          label="Đối tác"
          iconEnd={<KeyboardArrowDownIcon />}
          required={true}
        />
      </Grid>
      <Grid mt={"40px"} mb={"16px"}>
        <Divider />
      </Grid>
      {/* 7 */}
      <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
        <TextFieldd
          mr="16px"
          iconEnd={<ClearIcon />}
          label="Mã khách hàng (CIF)"
          required={true}
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
      {/* 8 */}
      <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
        <TextFieldd mr="16px" label="Trạng thái TSBĐ" required={true} />
        <TextFieldd
          mr="16px"
          label="Loại bảo hiểm"
          iconEnd={<KeyboardArrowDownIcon />}
          required={true}
        />
        <TextFieldd mr="16px" label="Loại bảo hiểm" required={true} />
        <TextFieldd
          mr="16px"
          label="Giá trị định giá TSBĐ (VNĐ)"
          required={true}
        />
      </Grid>
      {/* 9 */}
      <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
        <TextFieldd mr="16px" label="Địa chỉ TSBĐ thế chấp" required={true} />
        <TextFieldd
          mr="16px"
          label="Quan hệ giữa người vay và CSH TSBĐ"
          iconEnd={<KeyboardArrowDownIcon />}
          required={true}
        />
        <TextFieldd mr="16px" label="STBH" required={true} />
        <TextFieldd mr="16px" label="Tổng Phí BH" required={true} />
      </Grid>
      {/* Drider */}
      <Grid mt={"40px"} mb={"16px"}>
        <Divider />
      </Grid>
      {/* 10 */}
      <Grid>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              onClick={isClickClose}
              value="once"
              control={<Radio />}
              label="Đóng phí 1 lần"
            />
            <FormControlLabel
              onClick={isClickShow}
              value="many"
              control={<Radio />}
              label="Đóng phí nhiều lần" /**Khi click vào sẽ hiện btn Thêm kỳ đóng*/
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      {show && (
        <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
          <Buttonn
            fs={18}
            h="56px"
            w="155px"
            gap="4px"
            label="Thêm kỳ đóng phí"
          />
        </Grid>
      )}
      {/* 11 */}
      <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
        <DateFieldd label="Ngày đóng phí" />
      </Grid>
      <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
        <DateFieldd label="Thời hạn BH từ ngày" mr="16px" />
        <DateFieldd label="Đến ngày" />
      </Grid>
    </Box>
  );
};

export default ThongTinTaiSanSanPhamBH;

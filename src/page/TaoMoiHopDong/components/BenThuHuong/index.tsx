import { Box, FormControl, Grid, RadioGroup, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import RadioButton from "../../../../components/Custom/RadioButton";
import TextFieldd from "../../../../components/Custom/TextField";
import Buttonn from "../../../../components/Custom/Button";
import CheckIcon from "@mui/icons-material/Check";
import SendIcon from "@mui/icons-material/Send";
const BenThuHuong = () => {
  return (
    <Box>
      <Grid item pt={3} pb={2}>
        <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
          6. Bên thụ hưởng
        </Typography>
      </Grid>
      <Grid xs={12} item alignItems={"center"}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <RadioButton value="yes" label="Có" />
            <RadioButton value="no" label="Không" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid xs={12} item pt={2} display={"flex"} alignItems={"center"}>
        <TextFieldd
          mr="16px"
          iconEnd={<KeyboardArrowDownIcon />}
          label="Chi nhánh/PGD CBNV thụ hưởng"
          required={true}
        />
      </Grid>
      <Grid
        xs={12}
        item
        pt={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Buttonn
          fs={18}
          mr="16px"
          h="56px"
          w="155px"
          gap="4px"
          label="Phụ lục HĐ"
          color="#181818"
          bgcolor="#F0B41C"
          hoverColor="#181818"
          hoverBgcolor="#F0B41C"
        />
        <Buttonn
          fs={18}
          mr="16px"
          h="56px"
          w="155px"
          gap="4px"
          label="Lưu"
          startIcon={<CheckIcon />}
          color="#181818"
          bgcolor="#F0B41C"
          hoverColor="#181818"
          hoverBgcolor="#F0B41C"
        />
        <Buttonn
          mr="16px"
          fs={18}
          h="56px"
          w="155px"
          gap="4px"
          label="Chuyển duyệt"
          startIcon={<SendIcon />}
          color="#181818"
          bgcolor="#F0B41C"
          hoverColor="#181818"
          hoverBgcolor="#F0B41C"
        />
        <Buttonn
          fs={18}
          h="56px"
          w="155px"
          gap="4px"
          label="Quay lại"
          color="#DCA20F"
          bgcolor="#FFFFFF"
          hoverColor="#DCA20F"
          hoverBgcolor="#FFFFFF"
        />
      </Grid>
    </Box>
  );
};

export default BenThuHuong;

import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextFieldd from "../../../../components/Custom/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RadioButton from "../../../../components/Custom/RadioButton";

const ThongTinNgoaiLe = () => {
  return (
    <Box>
      <Grid item pt={3} pb={2}>
        <Typography color={"#3E3C39"} fontSize={"23px"} fontWeight={600}>
          4. Thông tin ngoại lệ
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
      <Grid xs={12} pt={2} item display={"flex"} alignItems={"center"}>
        <TextFieldd
          w="344px"
          mr="16px"
          label="Lý do ngoại lệ"
          iconEnd={<KeyboardArrowDownIcon />}
        />
      </Grid>
    </Box>
  );
};

export default ThongTinNgoaiLe;

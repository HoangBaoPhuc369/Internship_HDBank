import { Box, Divider, Grid, Typography } from "@mui/material";
import Buttonn from "../../../components/Custom/Button";
import AddIcon from "@mui/icons-material/Add";
import BangDSBHPhiNhanTho from "./BangDSBHPhiNhanTho/BangDSBHPhiNhanTho";
import "../style/DataTable.scss";

const DSBHPhiNhanTho = () => {
  return (
    <Box p={2} bgcolor={"white"} color={"black"} borderRadius={2}>
      <Typography fontSize={28} fontWeight={600} color={"#3E3C39"} pb={2}>
        Danh sách các HĐBH Phi nhân thọ chính
      </Typography>
      <Divider />
      <Grid py={2}>
        <Buttonn
          gap="4px"
          bgcolor="#F0B41C"
          color="#181818"
          hoverBgcolor="#F0B41C"
          hoverColor="#181818"
          label="Thêm mới"
          startIcon={<AddIcon />}
        />
      </Grid>
      <Grid>
        <BangDSBHPhiNhanTho />
      </Grid>
    </Box>
  );
};

export default DSBHPhiNhanTho;

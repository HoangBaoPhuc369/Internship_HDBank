import { Box } from "@mui/material";

import BangDSBHPhiNhanTho from "./BangDSBHPhiNhanTho/BangDSBHPhiNhanTho";
import "../style/DataTable.scss";
import BangDSPhuLucHD from "./BangDSPhuLucHD/BangDSPhuLucHD";

const DSBHPhiNhanTho = () => {
  return (
    <Box>
      <BangDSBHPhiNhanTho />
      <BangDSPhuLucHD />
    </Box>
  );
};

export default DSBHPhiNhanTho;

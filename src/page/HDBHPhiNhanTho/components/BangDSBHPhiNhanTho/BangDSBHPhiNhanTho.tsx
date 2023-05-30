import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from "@mui/icons-material/Add";
import Buttonn from "../../../../components/Custom/Button";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
const BangDSBHPhiNhanTho = () => {
  const rows: GridRowsProp = [
    {
      id: 0.3,
      col2: "6221376671",
      col3: "Nguyễn Văn A",
      col4: "BH cho TSDB",
      col5: "Bảo hiểm cháy nổ bắt buộc",
      col6: "1,000,000,000.00",
      col7: "50,000.00",
      col8: "30/01/2023",
      col9: "30/01/2024",
      status: "Primary",
      action: "",
    },
  ];
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "STT",
      flex: 0.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col2",
      headerName: "Số HĐ",
      flex: 1,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col3",
      headerName: "Tên KH",
      flex: 1,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col4",
      headerName: "Đối tượng BH",
       flex: 0.9,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col5",
      headerName: "Loại BH",
      flex: 1.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col6",
      headerName: "Số tiền BH",
       flex: 1,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col7",
      headerName: "Phí",
       flex: 0.7,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col8",
      headerName: "Từ ngày",
       flex: 0.7,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col9",
      headerName: "Đến ngày",
       flex: 1,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Trạng thái",
       flex: 1,
      sortable: false,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        let detail = "";
        if (params.row.status === "Activated") {
          detail = "Đã được duyệt";
        } else if (params.row.status === "Waiting") {
          detail = "Chưa phê duyệt";
        } else if (params.row.status === "Primary") {
          detail = "Chờ phê duyệt";
        } else {
          detail = "Từ chối";
        }
        return (
          <div className={`cellWithStatus ${params.row.status}`}>{detail}</div>
        );
      },
    },

    {

      field: "action",
      headerName: "Thao Tác",
      flex: 2,
      sortable: false,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <div className="cellAction">
           <IconButton className="openInfullIcon" sx={{ p: "6px" }}>
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
            <IconButton className="openInfullIcon" sx={{ p: "6px" }}>
              <SendIcon fontSize="small" />
            </IconButton>
            <IconButton className="openInfullIcon" sx={{ p: "6px" }}>
              <CheckCircleIcon fontSize="small" />
            </IconButton>
             <IconButton className="openInfullIcon" sx={{ p: "6px" }}>
              <CancelIcon fontSize="small" />
            </IconButton>
          </div>
        );
      },
    },
  ];
  return (
    <Box p={2} mt={2} bgcolor={"white"} color={"black"} borderRadius={2}>
      <Typography fontSize={28} fontWeight={600} color={"#3E3C39"}>
        Danh sách các HĐBH Phi nhân thọ chính
      </Typography>
      <Divider />
      <Grid py={2}>
        <Buttonn
          fs={18}
          fw={"400px"}
          w="170px"
          h="56px"
          gap="4px"
          label="Thêm mới"
          startIcon={<AddIcon />}
          href="/taomoihopdong"

        />
      </Grid>
      <Grid>
        <Box width={"100%"} className="datatable">
          <DataGrid
            disableColumnMenu
            rows={rows}
            columns={columns}
            sx={{
              "& .super-app-theme--header": {
                backgroundColor: "#EAEEF2",
              },
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default BangDSBHPhiNhanTho;

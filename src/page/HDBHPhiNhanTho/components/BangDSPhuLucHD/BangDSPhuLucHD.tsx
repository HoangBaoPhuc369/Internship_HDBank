import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Buttonn from "../../../../components/Custom/Button";
import SendIcon from "@mui/icons-material/Send";

const BangDSPhuLucHD = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
      col2: "6221376671",
      col3: "Nguyễn Văn A",
      col4: "BH cho TSDB",
      col5: "Bảo hiểm hỏa hoạn và các rủi ro đặc biệt",
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
      headerName: "No.",
      width: 50,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col2",
      headerName: "Số HĐ",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col3",
      headerName: "Tên KH",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col4",
      headerName: "Đối tượng BH",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col5",
      headerName: "Loại BH",
      width: 290,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col6",
      headerName: "Số tiền BH bổ sung",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col7",
      headerName: "Phí bổ sung",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col8",
      headerName: "Ngày nộp phí",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col9",
      headerName: "Ngày hết hạn",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 145.5,
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
      // maxWidth: 450,
      field: "action",
      headerName: "Function",
      width: 450,
      sortable: false,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <IconButton className="openInfullIcon" sx={{ p: "6px" }}>
              <OpenInFullIcon fontSize="small" />
            </IconButton>

            <div>
              <Buttonn
                w="94px"
                h="32px"
                startIcon={<CheckIcon />}
                label="Duyệt"
                bgcolor="#FBECC6"
                color="#1F1602"
                hoverBgcolor="#FBECC6"
                hoverColor="#1F1602"
              />
            </div>
            <div>
              <Buttonn
                w="94px"
                h="32px"
                startIcon={<DeleteIcon />}
                label="Từ chối"
                bgcolor="#FBECC6"
                color="#1F1602"
                hoverBgcolor="#FBECC6"
                hoverColor="#1F1602"
              />
            </div>
            <div>
              <Buttonn
                w="94px"
                h="32px"
                startIcon={<SendIcon />}
                label="Chuyển duyệt"
                bgcolor="#FBECC6"
                color="#1F1602"
                hoverBgcolor="#FBECC6"
                hoverColor="#1F1602"
              />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <Box
      p={2}
      bgcolor={"white"}
      mt={4}
      mb={10}
      pt={4}
      color={"black"}
      borderRadius={2}
    >
      <Typography fontSize={28} fontWeight={600} color={"#3E3C39"}>
        Danh sách các phụ lục HĐ
      </Typography>
      <Divider />

      <Grid py={2}>
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

export default BangDSPhuLucHD;

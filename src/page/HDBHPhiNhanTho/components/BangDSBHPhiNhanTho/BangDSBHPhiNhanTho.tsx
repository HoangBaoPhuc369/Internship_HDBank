import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
const BangDSBHPhiNhanTho = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
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
      width: 343,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col6",
      headerName: "Số tiền BH",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col7",
      headerName: "Phí",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col8",
      headerName: "Từ ngày",
      width: 145.5,
      sortable: false,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col9",
      headerName: "Đến ngày",
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
      field: "action",
      headerName: "Function",
      width: 300,
      sortable: false,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <IconButton className="openInfullIcon">
              <OpenInFullIcon fontSize="small" />
            </IconButton>

            <div>
              <Button className="checkIcon" startIcon={<CheckIcon />}>
                Duyệt
              </Button>
            </div>
            <div>
              <Button className="deleteIcon" startIcon={<DeleteIcon />}>
                Từ chối
              </Button>
            </div>
          </div>
        );
      },
    },
  ];

  return (
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
  );
};

export default BangDSBHPhiNhanTho;

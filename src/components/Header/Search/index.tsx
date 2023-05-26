import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const IconSearch = () => {
  return (
    <Box px={1 / 2}>
      <IconButton sx={{ borderRadius: "4px", background: "#F7B512" }}>
        <SearchIcon color="action" />
      </IconButton>
    </Box>
  );
};

export default IconSearch;

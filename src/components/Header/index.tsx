import { Box } from "@mui/material";
import Logo from "./Logo/Logo";
import MarqueeSection from "./MarqueeSection";
import IconSearch from "./Search";
import InfoSection from "./InfoSection";
import NotificationSection from "./NotificationSection";
import ProfileSection from "./ProfileSection";
import LogoutSection from "./LogoutSection";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Logo />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <MarqueeSection />
        </Box>
        <Box>
          <IconSearch />
        </Box>
        <Box>
          <ProfileSection />
        </Box>
        <Box>
          <InfoSection />
        </Box>
        <Box>
          <NotificationSection />
        </Box>
        <Box>
          <LogoutSection />
        </Box>
      </Box>
    </>
  );
};

export default Header;

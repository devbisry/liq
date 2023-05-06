import { CssBaseline, IconButton, Typography, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { BarChartOutlined } from "@mui/icons-material";
import { useTranslation } from "../../../i18n/client";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // marginLeft: 20,
  // width: `calc(100% - ${20}px)`,
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



export default function Navbar({ open, handleDrawerOpen}) {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ px: 2 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            {!open ? <MenuIcon /> : <BarChartOutlined />}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            "Dashboard"
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

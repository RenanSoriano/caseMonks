import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DesktopMenu from "./DesktopMenu";

export default function Header({ onMenuClick, menuOpen, menuItems }) {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: menuOpen ? "#333" : "transparent",
        boxShadow: "none",
        borderBottomLeftRadius: menuOpen ? "20px" : "0",
        borderBottomRightRadius: menuOpen ? "20px" : "0",
        position: "relative",
        zIndex: 2,
        transition: "background 0s"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 4 } }}>
          <img 
            src="/logo.png" 
            alt="Logo da Monks" 
            style={{ height: "40px" }} 
          />
          <IconButton 
            color="inherit" 
            onClick={onMenuClick}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <DesktopMenu items={menuItems} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import ConstructionIcon from "@mui/icons-material/Construction"
import Search from "../components/Search"
import Button from "@mui/material/Button"

import { Link } from "react-router-dom"

const NavigationBar = ({ drawerWidth, handleDrawerToggle, setSearch }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        display: "flex",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <IconButton
          LinkComponent={Link}
          to="/"
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <img src="favicon.png" />
        </IconButton>

        <Typography
          component={Link}
          to="/"
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "block" },
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Dev Tools
        </Typography>

        <Search setSearch={setSearch} />
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar

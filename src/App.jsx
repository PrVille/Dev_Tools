import { useState } from "react"

import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import Fade from "@mui/material/Fade"
import Fab from "@mui/material/Fab"
import useScrollTrigger from "@mui/material/useScrollTrigger"

import NavigationBar from "./layout/NavigationBar"
import NavigationDrawer from "./layout/NavigationDrawer"
import Content from "./layout/Content"

const drawerWidth = 300

const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    window.scrollTo({ top: 0 })
  }
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 100000 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

function App(props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [title, setTitle] = useState("Home")
  const [search, setSearch] = useState("")

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <NavigationBar
        drawerWidth={drawerWidth}
        title={title}
        setTitle={setTitle}
        setSearch={setSearch}
        handleDrawerToggle={handleDrawerToggle}
      />

      <NavigationDrawer
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        setTitle={setTitle}
        search={search}
        mobileOpen={mobileOpen}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          display: "flex",
          flexDirection: "column",
          position: "relative"
        }}
      >
        <Toolbar />
        <Content />

        <ScrollTop {...props}>
          <Fab size="medium" color="primary">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </Box>
  )
}

export default App

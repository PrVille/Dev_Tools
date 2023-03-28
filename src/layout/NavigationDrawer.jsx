import * as React from "react"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Chip from "@mui/material/Chip"

import AvTimerIcon from "@mui/icons-material/AvTimer"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import BoltIcon from "@mui/icons-material/Bolt"
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import { TOOLS } from "../data/constants"
import Footer from "./Footer"

const byName = (a, b) => {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

const SectionList = ({ subheader, items, Icon }) => {
  return (
    <List
      dense
      subheader={
        <ListSubheader sx={{ display: "flex", alignItems: "center" }}>
          <Icon sx={{ mr: 4 }} />
          {subheader}
        </ListSubheader>
      }
    >
      {items.map(({ name, href, isNew }) => (
        <ListItem key={name} disablePadding>
          <ListItemButton component={Link} to={href}>
            {isNew && (
              <ListItemIcon>
                <Chip label="New" color="primary" size="small" />
              </ListItemIcon>
            )}

            <ListItemText
              inset={!isNew}
              primary={name}
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

const DrawerContent = ({ search }) => {
  const toolsBySearch = TOOLS.filter((tool) =>
    tool.name.toLowerCase().includes(search)
  )
  const toolsToUse = toolsBySearch.sort(byName)
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <Toolbar>
        <IconButton
          LinkComponent={Link}
          to="/"
          color=""
          edge="start"
          sx={{ mr: 2 }}
        >
          <img src="favicon.png" />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dev Tools
        </Typography>
      </Toolbar>

      <Divider />

      <SectionList
        subheader="Resources"
        items={toolsToUse.filter((tool) => tool.type === "resource")}
        Icon={CollectionsBookmarkIcon}
      />

      <SectionList
        subheader="Generators"
        items={toolsToUse.filter((tool) => tool.type === "generator")}
        Icon={BoltIcon}
      />

      <SectionList
        subheader="Converters"
        items={toolsToUse.filter((tool) => tool.type === "converter")}
        Icon={AutorenewIcon}
      />

      <SectionList
        subheader="Timer/Stopwatch"
        items={toolsToUse.filter((tool) => tool.type === "time")}
        Icon={AvTimerIcon}
      />
    </Box>
  )
}
const NavigationDrawer = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  search,
}) => {
  return (
    <Box sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerContent search={search} />
        <Footer />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <DrawerContent search={search} />
        <Footer />
      </Drawer>
    </Box>
  )
}

export default NavigationDrawer

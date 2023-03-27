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

import MailIcon from "@mui/icons-material/Mail"
import ConstructionIcon from "@mui/icons-material/Construction"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import AvTimerIcon from "@mui/icons-material/AvTimer"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import BuildIcon from "@mui/icons-material/Build"
import BoltIcon from "@mui/icons-material/Bolt"
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import { TOOLS } from "../constants"

const byName = (a, b) => {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

const SectionList = ({ subheader, items, setTitle, Icon }) => {
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
          <ListItemButton
            component={Link}
            to={href}
            onClick={() => {
              setTitle(name)
            }}
          >
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

const DrawerContent = ({ setTitle, search }) => {
  const toolsBySearch = TOOLS.filter((tool) =>
    tool.name.toLowerCase().includes(search)
  )
  const toolsToUse = toolsBySearch.sort(byName)
  return (
    <div>
      <Toolbar sx={{ bgcolor: "" }}>
        <IconButton
          LinkComponent={Link}
          to="/"
          color="primary"
          edge="start"
          sx={{ mr: 2 }}
          onClick={() => {
            setTitle("Home")
          }}
        >
          <ConstructionIcon />
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
        setTitle={setTitle}
      />

      <SectionList
        subheader="Generators"
        items={toolsToUse.filter((tool) => tool.type === "generator")}
        Icon={BoltIcon}
        setTitle={setTitle}
      />

      <SectionList
        subheader="Converters"
        items={toolsToUse.filter((tool) => tool.type === "converter")}
        Icon={AutorenewIcon}
        setTitle={setTitle}
      />

      <SectionList
        subheader="Timer/Stopwatch"
        items={toolsToUse.filter((tool) => tool.type === "time")}
        Icon={AvTimerIcon}
        setTitle={setTitle}
      />
    </div>
  )
}
const NavigationDrawer = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  setTitle,
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerContent setTitle={setTitle} search={search} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <DrawerContent setTitle={setTitle} search={search} />
      </Drawer>
    </Box>
  )
}

export default NavigationDrawer

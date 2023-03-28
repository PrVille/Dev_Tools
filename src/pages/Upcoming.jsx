import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Grid from "@mui/material/Unstable_Grid2"

import ArrowRightIcon from "@mui/icons-material/ArrowRight"

import { UPCOMING_TOOLS, UPCOMING_FEATURES } from "../data/constants"

const Upcoming = () => {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={6}>
        <Card>
          <CardHeader title="Upcoming Tools" />
          <CardContent sx={{}}>
            <List dense>
              {UPCOMING_TOOLS.sort().map((tool) => (
                <ListItem key={tool} sx={{ p: 0 }}>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={tool} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6}>
        <Card>
          <CardHeader title="Upcoming Features" />
          <CardContent sx={{}}>
            <List dense>
              {UPCOMING_FEATURES.sort().map((feature) => (
                <ListItem key={feature} sx={{ p: 0 }}>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Upcoming

import { useState } from "react"
import { USEFUL_WEBSITES } from "../../../constants"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import Grid from "@mui/material/Unstable_Grid2"
import CardHeader from "@mui/material/CardHeader"
import Box from "@mui/material/Box"
import { CardActionArea } from "@mui/material"

import LaunchIcon from "@mui/icons-material/Launch"

import SearchCard from "../../../components/SearchCard"

const byTitle = (a, b) => {
  if (a.title < b.title) {
    return -1
  }
  if (a.title > b.title) {
    return 1
  }
  return 0
}
const UsefulWebsites = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const copyToClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      notify(`Copied to clipboard!`)
    } catch (err) {
      console.log("err :>> ", err)
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <SearchCard
        onInput={handleSearchChange}
        value={searchQuery}
        placeholder="Search websites..."
        disableLoading
      />

      <Grid container spacing={3} mt={3}>
        {USEFUL_WEBSITES.filter(
          (website) =>
            website.title.toLowerCase().includes(searchQuery) ||
            website.description.toLowerCase().includes(searchQuery)
        ).sort(byTitle).map((website, i) => (
          <Grid key={i} xs={12} sm={6} lg={4} xl={3}>
            <Card
              sx={{
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardActionArea
                href={website.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5">{website.title}</Typography>
                  </Box>
                  <Box>
                    <LaunchIcon />
                  </Box>
                </CardContent>
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2">{website.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default UsefulWebsites

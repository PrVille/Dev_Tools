import { CardActionArea } from "@mui/material"
import { Link } from "react-router-dom"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark"
import BoltIcon from "@mui/icons-material/Bolt"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"

const HighlightedTool = ({ href, name, description, header, Icon }) => {
  return (
    <Grid xs={12} sm={6}>
      <Card
        sx={{
          transition: "transform 0.3s ease",
          ":hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <CardActionArea LinkComponent={Link} to={href}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
            }}
          >
            <Icon />
            <Typography variant="h6">{header}</Typography>
          </CardContent>
          <CardContent sx={{ pt: 0 }}>
            <Typography variant="h4">{name}</Typography>
          </CardContent>
          <CardContent sx={{ pt: 0 }}>
            <Typography variant="subtitle1">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mt: 5,
        }}
      >
        <Typography variant="h2" gutterBottom>
          DEV TOOLS
        </Typography>
        <Typography variant="h4">
          The all-in-one toolkit for developers
        </Typography>
      </Box>
      <Grid container spacing={3} mt={10}>
        <HighlightedTool
          name="Useful Websites"
          description="Collection of useful websites for developers"
          href="websites"
          header="Resource Spotlight"
          Icon={CollectionsBookmarkIcon}
        />
        <HighlightedTool
          name="Lorem Ipsum Generator"
          description="Lorem ipsum placeholder text generator"
          href="loremipsumgenerator"
          header="Generator Spotlight"
          Icon={BoltIcon}
        />
        <HighlightedTool
          name="Snippets"
          description="Collection of useful code snippets in different programming languages"
          href="snippets"
          header="Resource Spotlight"
          Icon={CollectionsBookmarkIcon}
        />
        <HighlightedTool
          name="Volume Converter"
          description="Converter for units of volume"
          href="volumeconverter"
          header="Converter Spotlight"
          Icon={AutorenewIcon}
        />
      </Grid>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}
      >
        <Button
          LinkComponent={Link}
          to="upcoming"
          variant="text"
          endIcon={<ArrowRightAltIcon />}
        >
          Upcoming Tools & Features
        </Button>
      </Box>
    </Box>
  )
}

export default Home

import { Link } from "react-router-dom"

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"

const NoMatch = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 5}}>
      <Typography variant="h3" gutterBottom>No page found</Typography>
      <Typography variant="h6" gutterBottom>How did you end up here? </Typography>
      <Button
        LinkComponent={Link}
        to="/"
        variant="text"
        endIcon={<ArrowRightAltIcon />}
      >
        back to home
      </Button>
    </Box>
  )
}

export default NoMatch

import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"

import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"

const Copyright = (props) => {
  return (
    <Typography variant="body2" {...props}>
      © {new Date().getFullYear()} Ville Prami
    </Typography>
  )
}

const Footer = () => {
  return (
    <>
    <Divider />
    <Box sx={{display: "flex", px: 2, my: 2}}>
      <Copyright sx={{ flex: 1, alignSelf: "center" }} />

      <IconButton
        color="inherit"
        title="Ville Prami on GitHub"
        href="https://github.com/PrVille"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        color="inherit"
        title="Send an email to Ville Prami"
        href="mailto:ville.prami@me.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon />
      </IconButton>
    </Box>
    </>
  )
}

export default Footer

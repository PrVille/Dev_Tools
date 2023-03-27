import { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import Grid from "@mui/material/Unstable_Grid2"
import CardHeader from "@mui/material/CardHeader"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"

import ContentCopyIcon from "@mui/icons-material/ContentCopy"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

import useNotification from "../../../hooks/useNotification"

import { SNIPPETS } from "../../../constants"
import SearchCard from "../../../components/SearchCard"

const Snippets = () => {
  const { notify } = useNotification()
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
        placeholder="Search snippets..."
        disableLoading
      />

      <Grid container spacing={3} mt={3}>
        {SNIPPETS.filter(
          (snippet) =>
            snippet.title.toLowerCase().includes(searchQuery) ||
            snippet.language.toLowerCase().includes(searchQuery)
        ).map((snippet) => (
          <Grid key={snippet.title} xs={12}>
            <Card sx={{}}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5">{snippet.title}</Typography>
                  <Typography gutterBottom color="text.secondary">
                    {snippet.language}
                  </Typography>
                </Box>
                <Box>
                  <IconButton onClick={() => copyToClipBoard(snippet.code)}>
                    <ContentCopyIcon />
                  </IconButton>
                </Box>
              </CardContent>
              <CardContent sx={{ pt: 0 }}>
                <SyntaxHighlighter
                  customStyle={{ margin: 0 }}
                  language={snippet.language.toLowerCase()}
                  style={docco}
                >
                  {snippet.code}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Snippets

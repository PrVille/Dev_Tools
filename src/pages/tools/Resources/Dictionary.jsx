import { useState } from "react"
import { useDebounce } from 'use-debounce';
import useWords from "../../../hooks/useWords"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import Grid from "@mui/material/Unstable_Grid2"
import CardHeader from "@mui/material/CardHeader"

import SearchIcon from "@mui/icons-material/Search"


const Dictionary = () => {
  const [searchQuery, setSearchQuery] = useState("developer")
  const [value] = useDebounce(searchQuery, 250);
  const [words, loading, error] = useWords(value)

  return (
    <>
      <Card sx={{ ".MuiCardContent-root:last-child": { px: 2, py: 1 } }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <InputBase
            sx={{ flex: 1 }}
            placeholder="Search words..."
            value={searchQuery}
            onInput={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
          <SearchIcon />
        </CardContent>
        {
          <LinearProgress
            sx={{
              ".MuiLinearProgress-bar": {
                bgcolor: loading ? "" : "transparent",
              },
              bgcolor: "transparent",
            }}
          />
        }
      </Card>

      {!!searchQuery && (
        <Grid container spacing={3} mt={3}>
          {words.map((word) =>
            word.meanings.map((meaning) =>
              meaning.definitions.map((definition, i) => (
                <Grid key={i} xs={12} sm={6} lg={4} xl={3}>
                  <Card sx={{}}>
                    <CardHeader
                      subheader={meaning.partOfSpeech}
                      title={word.word}
                    />
                    <CardContent sx={{ pt: 0 }}>
                      <Typography variant="body2" gutterBottom>
                        {definition.definition}
                      </Typography>
                      <Typography variant="body2" fontStyle="italic">
                        {definition.example}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )
          )}
        </Grid>
      )}
    </>
  )
}

export default Dictionary

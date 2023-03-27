import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import LinearProgress from "@mui/material/LinearProgress"
import InputBase from "@mui/material/InputBase"

import SearchIcon from "@mui/icons-material/Search"

const SearchCard = ({ onInput, placeholder, value, loading, disableLoading }) => {
  return (
    <Card sx={{ ".MuiCardContent-root:last-child": { px: 2, py: 1 } }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <InputBase
          sx={{ flex: 1 }}
          placeholder={placeholder}
          value={value}
          onInput={onInput}
        />
        <SearchIcon />
      </CardContent>
      {!disableLoading &&
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
  )
}

export default SearchCard

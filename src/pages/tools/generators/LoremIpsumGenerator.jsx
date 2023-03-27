import { useMemo, useState } from "react"
import { REGEX_INTEGER, LOREM_IPSUM, DRAWER_WIDTH } from "../../../constants"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Fab from "@mui/material/Fab"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import MenuItem from "@mui/material/MenuItem"
import Divider from "@mui/material/Divider"

import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import useNotification from "../../../hooks/useNotification"

const options = [
  {
    value: "words",
    label: "Words",
  },
  {
    value: "sentences",
    label: "Sentences",
  },
  {
    value: "paragraphs",
    label: "Paragraphs",
  },
]

const LoremIpsumGenerator = () => {
  const { notify } = useNotification()
  const [selection, setSelection] = useState("paragraphs")
  const [num, setNum] = useState(5)

  const at =
    selection === "paragraphs" ? "\n" : selection === "sentences" ? "." : " "

  const text = useMemo(
    () =>
      LOREM_IPSUM.split(at)
        .filter((p) => p !== "")
        .slice(0, num),
    [selection, num]
  )

  const loremIpsum = useMemo(
    () =>
      selection === "paragraphs"
        ? text.join("\n\n")
        : selection === "sentences"
        ? text.map((t) => `${t}.`).join("")
        : text.join(" ").replace(/[.,]/g, "").toLowerCase(),
    [selection, num]
  )

  const handleSelectionChange = (event) => {
    setSelection(event.target.value)
  }

  const handleNumChange = (e) => {
    const { value } = e.target

    if (value === "" || REGEX_INTEGER.test(value)) {
      setNum(value)
    }
  }

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(loremIpsum)
      notify(`Copied to clipboard!`)
    } catch (err) {
      console.log("err :>> ", err)
    }
  }

  return (
    <>
      <Card sx={{}}>
        <CardContent sx={{ display: "flex", gap: 2 }}>
          <TextField
            name="num"
            label="Amount"
            value={num}
            onChange={handleNumChange}
            sx={{ maxWidth: 100 }}
          />

          <TextField
            fullWidth
            select
            label="Select"
            defaultValue="paragraphs"
            onChange={handleSelectionChange}
            sx={{ minWidth: 150 }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </CardContent>

        <Divider >
          <Typography>
            {selection.charAt(0).toUpperCase() + selection.slice(1) + ":"}{" "}
            {text.length}
          </Typography>
        </Divider>

        <CardContent>
          <Typography>{loremIpsum}</Typography>
        </CardContent>
      </Card>

      <Fab
        color="primary"
        size="medium"
        sx={{
          position: "fixed",
          bottom: 32,
          left: { xs: "50%", md: `calc(50% + ${DRAWER_WIDTH / 2}px)` },
        }}
        onClick={() => copyToClipBoard()}
      >
        <ContentCopyIcon />
      </Fab>
    </>
  )
}

export default LoremIpsumGenerator
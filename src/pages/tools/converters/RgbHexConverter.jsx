import { useEffect, useState } from "react"
import { REGEX_HEX_LENGTH_6, REGEX_0_TO_255 } from "../../../constants"

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import useNotification from "../../../hooks/useNotification"

const RgbHexConverter = () => {
  const { notify } = useNotification()
  const [rgb, setRgb] = useState({ r: "", g: "", b: "" })
  const [hex, setHex] = useState("")
  const [color, setColor] = useState("")

  const resetState = () => {
    setRgb({ r: "", g: "", b: "" })
    setHex("")
    setColor("")
  }

  const rgbIsEmpty = () => !rgb.r && !rgb.g && !rgb.b

  const rgbToHex = (r, g, b) => {
    return toHex(r) + toHex(g) + toHex(b)
  }

  const toHex = (n) => {
    n = parseInt(n, 10)
    if (isNaN(n)) return "00"
    n = Math.max(0, Math.min(n, 255))
    return (
      "0123456789ABCDEF".charAt((n - (n % 16)) / 16) +
      "0123456789ABCDEF".charAt(n % 16)
    )
  }

  const toR = (hex) => {
    hex = parseInt(hex.substring(0, 2), 16)
    if (isNaN(hex)) return 0
    return hex
  }

  const toG = (hex) => {
    hex = parseInt(hex.substring(2, 4), 16)
    if (isNaN(hex)) return 0
    return hex
  }

  const toB = (hex) => {
    hex = parseInt(hex.substring(4, 6), 16)
    if (isNaN(hex)) return 0
    return hex
  }

  const hexToRgb = (hex) => {
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((hex) => hex + hex)
        .join("")
    }

    const r = toR(hex)
    const g = toG(hex)
    const b = toB(hex)

    return { r, g, b }
  }

  const getContrastColor = () => {
    const yiq = (rgb.r * 299 + rgb.b * 587 + rgb.b * 114) / 1000
    return yiq >= 128 ? "black" : "white"
  }

  const handleRgbChange = (e) => {
    const { name, value } = e.target

    if (value === "" || REGEX_0_TO_255.test(value)) {
      let r = name === "r" ? value : rgb.r === "" ? 0 : rgb.r
      let g = name === "g" ? value : rgb.g === "" ? 0 : rgb.g
      let b = name === "b" ? value : rgb.b === "" ? 0 : rgb.b
      const convertedHex = rgbToHex(r, g, b)

      if ((!r || r === 0) && (!g || g === 0) && (!b || b === 0)) {
        resetState()
        return
      }

      setColor("#" + convertedHex)
      setHex(convertedHex)
      setRgb({ r, g, b })
    }
  }

  const copyToClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      notify(`Copied ${text} to clipboard!`)
    } catch (err) {
      console.log("err :>> ", err)
    }
  }

  const handleHexChange = (e) => {
    const input = e.target.value.toUpperCase()

    if (input === "" || REGEX_HEX_LENGTH_6.test(input)) {
      const { r, g, b } = hexToRgb(input)

      if (!input) {
        resetState()
        return
      }

      setColor(`rgb(${r}, ${g}, ${b})`)
      setHex(input)
      setRgb({ r, g, b })
    }
  }

  return (
    <>
      <Card sx={{ alignSelf: "center" }}>
        <CardContent
          sx={{
            height: "100px",
            bgcolor: color,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            color: getContrastColor(),
          }}
        >
          {!rgbIsEmpty() && (
            <Button
              sx={{ gap: 1, color: "inherit", textTransform: "lowercase" }}
              onClick={() =>
                copyToClipBoard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)
              }
            >
              <Typography>{`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}</Typography>
              <ContentCopyIcon fontSize="small" />
            </Button>
          )}

          {!!hex && (
            <Button
              sx={{ gap: 1, color: "inherit" }}
              onClick={() =>
                copyToClipBoard(`#${hex + "0".repeat(6 - hex.length)}`)
              }
            >
              <Typography>{`#${hex + "0".repeat(6 - hex.length)}`}</Typography>
              <ContentCopyIcon fontSize="small" />
            </Button>
          )}
        </CardContent>

        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              name="r"
              label="Red"
              value={rgb.r}
              onChange={handleRgbChange}
              helperText="0-255"
              sx={{ maxWidth: 100 }}
            />

            <TextField
              name="g"
              label="Green"
              value={rgb.g}
              onChange={handleRgbChange}
              helperText="0-255"
              sx={{ maxWidth: 100 }}
            />

            <TextField
              name="b"
              label="Blue"
              value={rgb.b}
              onChange={handleRgbChange}
              helperText="0-255"
              sx={{ maxWidth: 100 }}
            />
          </Box>

          <TextField
            multiline
            label="Hexadecimal"
            value={hex}
            onChange={handleHexChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">#</InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>
    </>
  )
}

export default RgbHexConverter

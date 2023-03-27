import { useState, useEffect } from "react"

import {
  LOWERCASE_LETTERS,
  UPPERCASE_LETTERS,
  NUMBERS,
  SYMBOLS,
} from "../../../constants"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import Slider from "@mui/material/Slider"
import FormControl from "@mui/material/FormControl"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

import RefreshIcon from "@mui/icons-material/Refresh"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

import useNotification from "../../../hooks/useNotification"

const generatePassword = (
  length,
  allowUppercase,
  allowNumbers,
  allowSymbols
) => {
  let characters = LOWERCASE_LETTERS
  if (allowUppercase) characters += UPPERCASE_LETTERS
  if (allowNumbers) characters += NUMBERS
  if (allowSymbols) characters += SYMBOLS

  let password = ""
  let usedCharacters = new Set()
  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    const char = characters[randomIndex]
    if (!usedCharacters.has(char)) {
      password += char
      usedCharacters.add(char)
    }
  }
  return password
}

const calcualateEntropy = (pw) => {
  let pool = 0
  if ([...LOWERCASE_LETTERS].some((l) => pw.includes(l)))
    pool += LOWERCASE_LETTERS.length
  if ([...UPPERCASE_LETTERS].some((l) => pw.includes(l)))
    pool += UPPERCASE_LETTERS.length
  if ([...NUMBERS].some((l) => pw.includes(l))) pool += NUMBERS.length
  if ([...SYMBOLS].some((l) => pw.includes(l))) pool += SYMBOLS.length

  if (pool === 0) return 0

  const entropy = Math.log2(pool) * pw.length
  return entropy
}

const PasswordGenerator = () => {
  const { notify } = useNotification()
  const [length, setLength] = useState(12) 
  const [allowUppercase, setAllowUppercase] = useState(true)
  const [allowNumbers, setAllowNumbers] = useState(true)
  const [allowSymbols, setAllowSymbols] = useState(false)
  const [password, setPassword] = useState("")
  const [pwStrength, setPwStrength] = useState(0)

  useEffect(() => {
    handleGeneratePassword(length, allowUppercase, allowNumbers, allowSymbols)
  }, [])

  const determinePwStrength = (entropy) => {
    setPwStrength(entropy >= 100 ? 100 : entropy)
  }

  const handleGeneratePassword = (
    length,
    allowUppercase,
    allowNumbers,
    allowSymbols
  ) => {
    const newPassword = generatePassword(
      length,
      allowUppercase,
      allowNumbers,
      allowSymbols
    )
    const entropy = calcualateEntropy(newPassword)
    determinePwStrength(entropy)
    setPassword(newPassword)
  }

  const handleSliderChange = (e) => {
    const { value } = e.target
    setLength(value)
    handleGeneratePassword(value, allowUppercase, allowNumbers, allowSymbols)
  }

  const handleTextChange = (e) => {
    const { value } = e.target
    determinePwStrength(calcualateEntropy(value))
    setPassword(value)
    setLength(value.length)
  }

  const handleAllowUppercaseChange = (e) => {
    setAllowUppercase(!allowUppercase)
    handleGeneratePassword(length, !allowUppercase, allowNumbers, allowSymbols)
  }

  const handleAllowNumberChange = (e) => {
    setAllowNumbers(!allowNumbers)
    handleGeneratePassword(length, allowUppercase, !allowNumbers, allowSymbols)
  }

  const handleAllowSymbolsChange = (e) => {
    setAllowSymbols(!allowSymbols)
    handleGeneratePassword(length, allowUppercase, allowNumbers, !allowSymbols)
  }

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(password)
      notify(`Copied to clipboard!`)
    } catch (err) {
      console.log("err :>> ", err)
    }
  }

  return (
    <Card sx={{ alignSelf: "center" }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          sx={{ flexGrow: 1 }}
          value={password}
          onChange={handleTextChange}
          inputProps={{ style: { fontSize: 40 } }}
          InputLabelProps={{ style: { fontSize: 40 } }}
        />

        <Box sx={{ display: "flex" }}>
          <IconButton onClick={() => copyToClipBoard()}>
            <ContentCopyIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              handleGeneratePassword(
                length,
                allowUppercase,
                allowNumbers,
                allowSymbols
              )
            }
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      </CardContent>

      <CardContent sx={{ px: 3 }}>
        <LinearProgress
          variant="determinate"
          value={pwStrength}
          color={
            pwStrength <= 25
              ? "error"
              : pwStrength <= 50
              ? "warning"
              : "success"
          }
          sx={{ bgcolor: "transparent" }}
        />
      </CardContent>

      <CardContent sx={{ px: 3 }}>
        <Typography gutterBottom>Length</Typography>
        <Slider
          min={1}
          max={26}
          value={length}
          onChange={(e) => {
            handleSliderChange(e)
          }}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </CardContent>

      <CardContent sx={{ px: 3 }}>
        <FormControl component="fieldset" variant="standard">
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allowUppercase}
                  onChange={handleAllowUppercaseChange}
                />
              }
              label="Uppercase"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={allowNumbers}
                  onChange={handleAllowNumberChange}
                />
              }
              label="Numbers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={allowSymbols}
                  onChange={handleAllowSymbolsChange}
                />
              }
              label="Symbols"
            />
          </FormGroup>
        </FormControl>
      </CardContent>
    </Card>
  )
}

export default PasswordGenerator

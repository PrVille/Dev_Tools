import { useState } from "react"
import { REGEX_DECIMAL, REGEX_NO_DOUBLE_DECIMAL } from "../../../constants"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const BitsAndBytesConverter = () => {
  const [bit, setBit] = useState("")
  const [kbit, setKbit] = useState("")
  const [mbit, setMbit] = useState("")
  const [gbit, setGbit] = useState("")
  const [tbit, setTbit] = useState("")
  const [byte, setByte] = useState("")
  const [kbyte, setKbyte] = useState("")
  const [mbyte, setMbyte] = useState("")
  const [gbyte, setGbyte] = useState("")
  const [tbyte, setTbyte] = useState("")

  const resetState = () => {
    setBit("")
    setKbit("")
    setMbit("")
    setGbit("")
    setTbit("")
    setByte("")
    setKbyte("")
    setMbyte("")
    setGbyte("")
    setTbyte("")
  }
  const convertArea = (value, fromUnit, toUnit) => {
    const ratios = {
      bit: 1/8,
      kbit: 1/8 * 1000,
      mbit: 1/8 * 1000000,
      gbit: 1/8 * 1000000000,
      tbit: 1/8 * 1000000000000,
      byte: 1,
      kbyte: 1000,
      mbyte: 1000000,
      gbyte: 1000000000000,
      tbyte: 1000000000000000,
    }
    const inputValueInBytes = value * ratios[fromUnit]
    const outputValue = inputValueInBytes / ratios[toUnit]
    return outputValue
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!value) {
      resetState()
      return
    }

    if (REGEX_DECIMAL.test(value)) {
      name === "bit" ? setBit(value) : setBit(convertArea(value, name, "bit"))
      name === "kbit"
        ? setKbit(value)
        : setKbit(convertArea(value, name, "kbit"))
      name === "tbit" ? setTbit(value) : setTbit(convertArea(value, name, "tbit"))
      name === "byte" ? setByte(value) : setByte(convertArea(value, name, "byte"))
      name === "kbyte"
        ? setKbyte(value)
        : setKbyte(convertArea(value, name, "kbyte"))
      name === "mbit"
        ? setMbit(value)
        : setMbit(convertArea(value, name, "mbit"))
      name === "gbit"
        ? setGbit(value)
        : setGbit(convertArea(value, name, "gbit"))
      name === "mbyte"
        ? setMbyte(value)
        : setMbyte(convertArea(value, name, "mbyte"))
      name === "gbyte"
        ? setGbyte(value)
        : setGbyte(convertArea(value, name, "gbyte"))
      name === "tbyte"
        ? setTbyte(value)
        : setTbyte(convertArea(value, name, "tbyte"))
    }
  }

  return (
    <Card sx={{ alignSelf: "center", display: "flex" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="byte"
          label="Byte"
          value={byte}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">B</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="kbyte"
          label="Kilobyte"
          value={kbyte}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">kB</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="mbyte"
          label="Megabyte"
          value={mbyte}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">MB</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="gbyte"
          label="Gigabyte"
          value={gbyte}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">GB</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="tbyte"
          label="Terabyte"
          value={tbyte}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">TB</InputAdornment>,
          }}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="bit"
          label="Bit"
          value={bit}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">bit</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="kbit"
          label="Kilobit"
          value={kbit}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">kbit</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="mbit"
          label="Megabit"
          value={mbit}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Mbit</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="gbit"
          label="Gigabit"
          value={gbit}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Gbit</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="tbit"
          label="Terabit"
          value={tbit}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Tbit</InputAdornment>,
          }}
        />
      </CardContent>
    </Card>
  )
}

export default BitsAndBytesConverter

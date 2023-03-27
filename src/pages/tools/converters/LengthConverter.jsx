import { useState } from "react"
import { REGEX_DECIMAL, REGEX_NO_DOUBLE_DECIMAL } from "../../../constants"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const LengthConverter = () => {
  const [mm, setMm] = useState("")
  const [cm, setCm] = useState("")
  const [m, setM] = useState("")
  const [km, setKm] = useState("")
  const [inch, setInch] = useState("")
  const [ft, setFt] = useState("")
  const [yd, setYd] = useState("")
  const [mi, setMi] = useState("")

  const resetState = () => {
    setMm("")
    setCm("")
    setM("")
    setKm("")
    setInch("")
    setFt("")
    setYd("")
    setMi("")
  }
  const convertLength = (value, fromUnit, toUnit) => {
    const ratios = {
      mm: 0.001,
      cm: 0.01,
      inch: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      m: 1.0,
      km: 1000.0,
      mi: 1609.344,
    }
    const inputValueInMeters = value * ratios[fromUnit]
    const outputValue = inputValueInMeters / ratios[toUnit]
    return +outputValue.toPrecision(3)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!value) {
      resetState()
      return
    }

    if (REGEX_DECIMAL.test(value)) {
      name === "mm" ? setMm(value) : setMm(convertLength(value, name, "mm"))
      name === "cm" ? setCm(value) : setCm(convertLength(value, name, "cm"))
      name === "inch"
        ? setInch(value)
        : setInch(convertLength(value, name, "inch"))
      name === "ft" ? setFt(value) : setFt(convertLength(value, name, "ft"))
      name === "yd" ? setYd(value) : setYd(convertLength(value, name, "yd"))
      name === "m" ? setM(value) : setM(convertLength(value, name, "m"))
      name === "km" ? setKm(value) : setKm(convertLength(value, name, "km"))
      name === "mi" ? setMi(value) : setMi(convertLength(value, name, "mi"))
    }
  }

  return (
    <Card sx={{ alignSelf: "center", display: "flex" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="mm"
          label="Millimeter"
          value={mm}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="cm"
          label="Centimeter"
          value={cm}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="m"
          label="Meter"
          value={m}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">m</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="km"
          label="Kilometer"
          value={km}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">km</InputAdornment>,
          }}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="inch"
          label="Inch"
          value={inch}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">in</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="ft"
          label="Foot"
          value={ft}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ft</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="yd"
          label="Yard"
          value={yd}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">yd</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="mi"
          label="Mile"
          value={mi}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mi</InputAdornment>,
          }}
        />
      </CardContent>
    </Card>
  )
}

export default LengthConverter

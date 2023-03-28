import { useState } from "react"
import { REGEX_DECIMAL, REGEX_NO_DOUBLE_DECIMAL } from "../../../data/constants"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const AreaConverter = () => {
  const [sqin, setSqin] = useState("")
  const [sqft, setSqft] = useState("")
  const [sqyd, setSqyd] = useState("")
  const [sqmi, setSqmi] = useState("")
  const [ac, setAc] = useState("")
  const [ha, setHa] = useState("")
  const [sqmm, setSqmm] = useState("")
  const [sqcm, setSqcm] = useState("")
  const [sqm, setSqm] = useState("")
  const [sqkm, setSqkm] = useState("")

  const resetState = () => {
    setSqin("")
    setSqft("")
    setSqyd("")
    setSqmi("")
    setAc("")
    setHa("")
    setSqmm("")
    setSqcm("")
    setSqm("")
    setSqkm("")
  }
  const convertArea = (value, fromUnit, toUnit) => {
    const ratios = {
      sqin: 0.00064516,
      sqft: 0.09290304,
      sqyd: 0.83612736,
      sqmi: 2589988.110336,
      ac: 4046.8564224,
      ha: 10000,
      sqmm: 0.000001,
      sqcm: 0.0001,
      sqm: 1.0,
      sqkm: 1000000.0,
    }
    const inputValueInSquareMeters = value * ratios[fromUnit]
    const outputValue = inputValueInSquareMeters / ratios[toUnit]
    return +outputValue.toPrecision(4)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!value) {
      resetState()
      return
    }

    if (REGEX_DECIMAL.test(value)) {
      name === "sqin"
        ? setSqin(value)
        : setSqin(convertArea(value, name, "sqin"))
      name === "sqft"
        ? setSqft(value)
        : setSqft(convertArea(value, name, "sqft"))
      name === "ac" ? setAc(value) : setAc(convertArea(value, name, "ac"))
      name === "ha" ? setHa(value) : setHa(convertArea(value, name, "ha"))
      name === "sqmm"
        ? setSqmm(value)
        : setSqmm(convertArea(value, name, "sqmm"))
      name === "sqyd"
        ? setSqyd(value)
        : setSqyd(convertArea(value, name, "sqyd"))
      name === "sqmi"
        ? setSqmi(value)
        : setSqmi(convertArea(value, name, "sqmi"))
      name === "sqcm"
        ? setSqcm(value)
        : setSqcm(convertArea(value, name, "sqcm"))
      name === "sqm" ? setSqm(value) : setSqm(convertArea(value, name, "sqm"))
      name === "sqkm"
        ? setSqkm(value)
        : setSqkm(convertArea(value, name, "sqkm"))
    }
  }

  return (
    <Card sx={{ alignSelf: "center", display: "flex" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="sqmm"
          label="Square Millimeter"
          value={sqmm}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mm²</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="sqcm"
          label="Square Centimeter"
          value={sqcm}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm²</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="sqm"
          label="Square Meter"
          value={sqm}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">m²</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="sqkm"
          label="Square Kilometer"
          value={sqkm}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">km²</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="ac"
          label="Acre"
          value={ac}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ac</InputAdornment>,
          }}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="sqin"
          label="Square Inch"
          value={sqin}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">in²</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="sqft"
          label="Square Foot"
          value={sqft}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ft²</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="sqyd"
          label="Square Yard"
          value={sqyd}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">yd²</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="sqmi"
          label="Square Mile"
          value={sqmi}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mi²</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="ha"
          label="Hectare"
          value={ha}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ha</InputAdornment>,
          }}
        />
      </CardContent>
    </Card>
  )
}

export default AreaConverter

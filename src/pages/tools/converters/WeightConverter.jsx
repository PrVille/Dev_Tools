import { useState } from "react"
import { REGEX_DECIMAL, REGEX_NO_DOUBLE_DECIMAL } from "../../../constants"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const WeightConverter = () => {
  const [mg, setMg] = useState("")
  const [g, setG] = useState("")
  const [kg, setKg] = useState("")
  const [t, setT] = useState("")
  const [tonUS, setTonUS] = useState("")
  const [tonUK, setTonUK] = useState("")
  const [lb, setLb] = useState("")
  const [oz, setOz] = useState("")

  const resetState = () => {
    setMg("")
    setG("")
    setKg("")
    setT("")
    setTonUS("")
    setTonUK("")
    setLb("")
    setOz("")
  }
  const convertWeight = (value, fromUnit, toUnit) => {
    const ratios = {
      mg: 0.001,
      g: 1.0,
      kg: 1000.0,
      t: 1000000.0,
      tonUK: 1016000.0,
      tonUS: 907000.0,
      lb: 453.59,
      oz: 28.35,
    }
    const inputValueInGrams = value * ratios[fromUnit]
    const outputValue = inputValueInGrams / ratios[toUnit]
    return +outputValue.toPrecision(3)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!value) {
      resetState()
      return
    }

    if (REGEX_DECIMAL.test(value)) {
      name === "mg" ? setMg(value) : setMg(convertWeight(value, name, "mg"))
      name === "g" ? setG(value) : setG(convertWeight(value, name, "g"))
      name === "tonUS"
        ? setTonUS(value)
        : setTonUS(convertWeight(value, name, "tonUS"))
      name === "tonUK"
        ? setTonUK(value)
        : setTonUK(convertWeight(value, name, "tonUK"))
      name === "lb" ? setLb(value) : setLb(convertWeight(value, name, "lb"))
      name === "kg" ? setKg(value) : setKg(convertWeight(value, name, "kg"))
      name === "t" ? setT(value) : setT(convertWeight(value, name, "t"))
      name === "oz" ? setOz(value) : setOz(convertWeight(value, name, "oz"))
    }
  }

  return (
    <Card sx={{ alignSelf: "center", display: "flex" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="mg"
          label="Milligram"
          value={mg}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mg</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="g"
          label="Gram"
          value={g}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="kg"
          label="Kilogram"
          value={kg}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="t"
          label="Tonne"
          value={t}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">t</InputAdornment>,
          }}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="oz"
          label="Ounce"
          value={oz}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">oz</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="lb"
          label="Pound"
          value={lb}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">lb</InputAdornment>,
          }}
        />

        <TextField
          multiline
          name="tonUS"
          label="Ton (US)"
          value={tonUS}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ton</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="tonUK"
          label="Ton (UK)"
          value={tonUK}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ton</InputAdornment>,
          }}
        />
      </CardContent>
    </Card>
  )
}

export default WeightConverter

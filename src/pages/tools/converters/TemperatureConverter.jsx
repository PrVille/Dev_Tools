import { useState } from "react"
import { REGEX_DECIMAL, REGEX_NO_DOUBLE_DECIMAL } from "../../../data/constants"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const TemperatureConverter = () => {
  const [c, setC] = useState("")
  const [k, setK] = useState("")
  const [f, setF] = useState("")
  const [r, setR] = useState("")
  const [de, setDe] = useState("")
  const [n, setN] = useState("")
  const [re, setRe] = useState("")
  const [ro, setRo] = useState("")

  const resetState = () => {
    setC("")
    setK("")
    setF("")
    setR("")
    setDe("")
    setN("")
    setRe("")
    setRo("")
  }

  function convertTemperature(value, unit) {
    switch (unit) {
      case "k":
        return {
          kelvin: value,
          celsius: (value - 273.15).toFixed(2),
          fahrenheit: ((value - 273.15) * 1.8 + 32).toFixed(2),
          rankine: ((value - 273.15) * 1.8 + 491.67).toFixed(2),
          delisle: ((373.15 - value) * 1.5).toFixed(2),
          newton: ((value - 273.15) * 0.33).toFixed(2),
          reaumur: ((value - 273.15) * 0.8).toFixed(2),
          romer: ((value - 273.15) * 0.525 + 7.5).toFixed(2),
        }
      case "c":
        return {
          kelvin: (parseFloat(value) + 273.15).toFixed(2),
          celsius: value,
          fahrenheit: (parseFloat(value) * 1.8 + 32).toFixed(2),
          rankine: (parseFloat(value) * 1.8 + 491.67).toFixed(2),
          delisle: ((100 - parseFloat(value)) * 1.5).toFixed(2),
          newton: (parseFloat(value) * 0.33).toFixed(2),
          reaumur: (parseFloat(value) * 0.8).toFixed(2),
          romer: (parseFloat(value) * 0.525 + 7.5).toFixed(2),
        }
      case "f":
        return {
          kelvin: ((parseFloat(value) + 459.67) * (5 / 9)).toFixed(2),
          celsius: ((parseFloat(value) - 32) * (5 / 9)).toFixed(2),
          fahrenheit: value,
          rankine: (parseFloat(value) + 459.67).toFixed(2),
          delisle: ((212 - parseFloat(value)) * (5 / 6)).toFixed(2),
          newton: ((parseFloat(value) - 32) * (11 / 60)).toFixed(2),
          reaumur: ((parseFloat(value) - 32) * (4 / 9)).toFixed(2),
          romer: ((parseFloat(value) - 32) * (7 / 24) + 7.5).toFixed(2),
        }
      case "r":
        return {
          kelvin: (parseFloat(value) * (5 / 9)).toFixed(2),
          celsius: (parseFloat(value) / 1.8 - 273.15).toFixed(2),
          fahrenheit: (parseFloat(value) - 459.67).toFixed(2),
          rankine: value,
          delisle: (((671.67 - parseFloat(value)) * 5) / 6).toFixed(2),
          newton: ((parseFloat(value) / 1.8 - 273.15) * 0.33).toFixed(2),
          reaumur: ((parseFloat(value) / 1.8 - 273.15) * 0.8).toFixed(2),
          romer: ((parseFloat(value) / 1.8 - 273.15) * 0.525 + 7.5).toFixed(2),
        }
      case "de":
        return {
          kelvin: (373.15 - parseFloat(value) * (2 / 3)).toFixed(2),
          celsius: (100 - parseFloat(value) * (2 / 3)).toFixed(2),
          fahrenheit: (212 - parseFloat(value) * (6 / 5)).toFixed(2),
          rankine: (671.67 - parseFloat(value) * (6 / 5)).toFixed(2),
          delisle: value,
          newton: (33 - (parseFloat(value) * 11) / 50).toFixed(2),
          reaumur: (80 - (parseFloat(value) * 8) / 15).toFixed(2),
          romer: (60 - (parseFloat(value) * 7) / 20).toFixed(2),
        }
      case "n":
        return {
          kelvin: ((parseFloat(value) * 100) / 33 + 273.15).toFixed(2),
          celsius: ((parseFloat(value) * 100) / 33).toFixed(2),
          fahrenheit: (((parseFloat(value) * 100) / 33) * 1.8 + 32).toFixed(2),
          rankine: (((parseFloat(value) * 100) / 33) * 1.8 + 491.67).toFixed(2),
          delisle: ((33 - parseFloat(value)) * (50 / 11)).toFixed(2),
          newton: value,
          reaumur: (((parseFloat(value) * 100) / 33) * 0.8).toFixed(2),
          romer: (((parseFloat(value) * 100) / 33) * 0.525 + 7.5).toFixed(2),
        }
      case "re":
        return {
          kelvin: (parseFloat(value) / 0.8 + 273.15).toFixed(2),
          celsius: (parseFloat(value) / 0.8).toFixed(2),
          fahrenheit: (parseFloat(value) * 2.25 + 32).toFixed(2),
          rankine: (parseFloat(value) * 2.25 + 491.67).toFixed(2),
          delisle: ((80 - parseFloat(value)) * (15 / 8)).toFixed(2),
          newton: ((parseFloat(value) * 33) / 80).toFixed(2),
          reaumur: value,
          romer: ((parseFloat(value) * 21) / 32 + 7.5).toFixed(2),
        }
      case "ro":
        return {
          kelvin: ((parseFloat(value) - 7.5) / 0.525 + 273.15).toFixed(2),
          celsius: ((parseFloat(value) - 7.5) / 0.525).toFixed(2),
          fahrenheit: ((parseFloat(value) - 7.5) * (24 / 7) + 32).toFixed(2),
          rankine: ((parseFloat(value) - 7.5) * (24 / 7) + 491.67).toFixed(2),
          delisle: ((60 - parseFloat(value)) * (20 / 7)).toFixed(2),
          newton: (((parseFloat(value) - 7.5) / 0.525) * 0.33).toFixed(2),
          reaumur: (((parseFloat(value) - 7.5) / 0.525) * 0.8).toFixed(2),
          romer: value,
        }
      default:
        return "Invalid input unit"
    }
  }

  const handleChange = (e) => {
    let { name, value } = e.target

    if (!value) {
      resetState()
      return
    }

    if (value === "-") {
      resetState()
      switch (name) {
        case "c":
          setC(value)
          break
        case "k":
          setK(value)
          break
        case "f":
          setF(value)
          break
        case "r":
          setR(value)
          break
        case "n":
          setN(value)
          break
        case "de":
          setDe(value)
          break
        case "re":
          setRe(value)
          break
        case "ro":
          setRo(value)
          break
        default:
          break
      }
      return
    }

    if (REGEX_DECIMAL.test(value)) {
      const {
        kelvin,
        celsius,
        fahrenheit,
        rankine,
        delisle,
        newton,
        reaumur,
        romer,
      } = convertTemperature(value, name)

      setK(kelvin)
      setC(celsius)
      setF(fahrenheit)
      setR(rankine)
      setDe(delisle)
      setN(newton)
      setRe(reaumur)
      setRo(romer)
    }
  }

  return (
    <Card sx={{ alignSelf: "center", display: "flex" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="c"
          label="Celsius"
          value={c}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">°C</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="k"
          label="Kelvin"
          value={k}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">K</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="f"
          label="Fahrenheit"
          value={f}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">°F</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="r"
          label="Rankine"
          value={r}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">°R</InputAdornment>,
          }}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="de"
          label="Delisle"
          value={de}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">°De</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="n"
          label="Newton"
          value={n}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">°N</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="re"
          label="Réaumur"
          value={re}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">°Ré</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="ro"
          label="Rømer"
          value={ro}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">°Rø</InputAdornment>,
          }}
        />
      </CardContent>
    </Card>
  )
}

export default TemperatureConverter

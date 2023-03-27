import { useState } from "react"
import { REGEX_DECIMAL, REGEX_NO_DOUBLE_DECIMAL } from "../../../constants"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const TimeConverter = () => {
  const [ns, setNs] = useState("")
  const [ms, setMs] = useState("")
  const [s, setS] = useState("")
  const [min, setMin] = useState("")
  const [h, setH] = useState("")
  const [day, setDay] = useState("")
  const [week, setWeek] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [decade, setDecade] = useState("")

  const resetState = () => {
    setNs("")
    setMs("")
    setS("")
    setMin("")
    setH("")
    setDay("")
    setWeek("")
    setMonth("")
    setYear("")
    setDecade("")
  }
  const convertTime = (value, fromUnit, toUnit) => {
    const ratios = {
      ns: 0.000000001,
      ms: 0.001,
      s: 1,
      min: 60,
      h: 60 * 60,
      day: 60 * 60 * 24,
      week: 60 * 60 * 24 * 7,
      month: 60 * 60 * 24 * 7 * 4.348,
      year: 60 * 60 * 24 * 7 * 4.348 * 12,
      decade: 60 * 60 * 24 * 7 * 4.348 * 12 * 10,
    }
    const inputValueInSeconds = value * ratios[fromUnit]
    const outputValue = inputValueInSeconds / ratios[toUnit]
    return +outputValue.toPrecision(4)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!value) {
      resetState()
      return
    }

    if (REGEX_DECIMAL.test(value)) {
      name === "ns" ? setNs(value) : setNs(convertTime(value, name, "ns"))
      name === "ms" ? setMs(value) : setMs(convertTime(value, name, "ms"))
      name === "h" ? setH(value) : setH(convertTime(value, name, "h"))
      name === "day" ? setDay(value) : setDay(convertTime(value, name, "day"))
      name === "week"
        ? setWeek(value)
        : setWeek(convertTime(value, name, "week"))
      name === "s" ? setS(value) : setS(convertTime(value, name, "s"))
      name === "min" ? setMin(value) : setMin(convertTime(value, name, "min"))
      name === "month"
        ? setMonth(value)
        : setMonth(convertTime(value, name, "month"))
      name === "year"
        ? setYear(value)
        : setYear(convertTime(value, name, "year"))
      name === "decade"
        ? setDecade(value)
        : setDecade(convertTime(value, name, "decade"))
    }
  }

  return (
    <Card sx={{ alignSelf: "center", display: "flex" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="ns"
          label="Nanosecond"
          value={ns}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ns</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="ms"
          label="Millisecond"
          value={ms}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ms</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="s"
          label="Second"
          value={s}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">s</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="min"
          label="Minute"
          value={min}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">min</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="h"
          label="Hour"
          value={h}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">h</InputAdornment>,
          }}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="day"
          label="Day"
          value={day}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">d</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="week"
          label="Week"
          value={week}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">wk</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="month"
          label="Month"
          value={month}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mo</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="year"
          label="Year"
          value={year}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">y</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="decade"
          label="Decade"
          value={decade}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">dec</InputAdornment>,
          }}
        />
      </CardContent>
    </Card>
  )
}

export default TimeConverter

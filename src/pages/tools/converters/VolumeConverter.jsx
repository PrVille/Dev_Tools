import { useState } from "react"
import { REGEX_DECIMAL, REGEX_NO_DOUBLE_DECIMAL } from "../../../data/constants"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const VolumeConverter = () => {
  const [ml, setMl] = useState("")
  const [cl, setCl] = useState("")
  const [dl, setDl] = useState("")
  const [l, setL] = useState("")
  const [kl, setKl] = useState("")
  const [ML, setML] = useState("")
  const [C, setC] = useState("")
  const [tbsp, setTbsp] = useState("")
  const [tsp, setTsp] = useState("")
  const [gal, setGal] = useState("")
  const [qt, setQt] = useState("")
  const [pt, setPt] = useState("")
  const [mm3, setMm3] = useState("")
  const [cm3, setCm3] = useState("")
  const [m3, setM3] = useState("")
  const [km3, setKm3] = useState("")
  const [in3, setIn3] = useState("")
  const [yd3, setYd3] = useState("")
  const [ft3, setFt3] = useState("")
  const [mi3, setMi3] = useState("")

  const resetState = () => {
    setMl("")
    setCl("")
    setDl("")
    setL("")
    setKl("")
    setML("")
    setC("")
    setTbsp("")
    setTsp("")
    setGal("")
    setQt("")
    setPt("")
    setMm3("")
    setCm3("")
    setM3("")
    setKm3("")
    setIn3("")
    setYd3("")
    setFt3("")
    setMi3("")
  }
  const convertVolume = (value, fromUnit, toUnit) => {
    const ratios = {
      ml: 0.001,
      cl: 0.01,
      dl: 0.1,
      l: 1,
      kl: 1000,
      ML: 1000000,
      tsp: 0.0049289216,
      tbsp: 0.0147867648,
      C: 0.2365882365,
      gal: 3.785411784,
      qt: 0.946352946,
      pt: 0.473176473,
      mm3: 0.000001,
      cm3: 0.001,
      m3: 1000,
      km3: 1000000000000,
      in3: 0.016387064,
      yd3: 764.55485798,
      ft3: 28.316846592,
      mi3: 4168181825441,
    }
    const inputValueInLiters = value * ratios[fromUnit]
    const outputValue = inputValueInLiters / ratios[toUnit]
    return +outputValue.toPrecision(4)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!value) {
      resetState()
      return
    }

    if (REGEX_DECIMAL.test(value)) {
      name === "ml" ? setMl(value) : setMl(convertVolume(value, name, "ml"))
      name === "cl" ? setCl(value) : setCl(convertVolume(value, name, "cl"))
      name === "kl" ? setKl(value) : setKl(convertVolume(value, name, "kl"))
      name === "ML" ? setML(value) : setML(convertVolume(value, name, "ML"))
      name === "C" ? setC(value) : setC(convertVolume(value, name, "C"))
      name === "dl" ? setDl(value) : setDl(convertVolume(value, name, "dl"))
      name === "l" ? setL(value) : setL(convertVolume(value, name, "l"))
      name === "tbsp"
        ? setTbsp(value)
        : setTbsp(convertVolume(value, name, "tbsp"))
      name === "tsp" ? setTsp(value) : setTsp(convertVolume(value, name, "tsp"))
      name === "gal" ? setGal(value) : setGal(convertVolume(value, name, "gal"))
      name === "qt" ? setQt(value) : setQt(convertVolume(value, name, "qt"))
      name === "pt" ? setPt(value) : setPt(convertVolume(value, name, "pt"))
      name === "mm3" ? setMm3(value) : setMm3(convertVolume(value, name, "mm3"))
      name === "cm3" ? setCm3(value) : setCm3(convertVolume(value, name, "cm3"))
      name === "m3" ? setM3(value) : setM3(convertVolume(value, name, "m3"))
      name === "km3" ? setKm3(value) : setKm3(convertVolume(value, name, "km3"))
      name === "in3" ? setIn3(value) : setIn3(convertVolume(value, name, "in3"))
      name === "yd3" ? setYd3(value) : setYd3(convertVolume(value, name, "yd3"))
      name === "ft3" ? setFt3(value) : setFt3(convertVolume(value, name, "ft3"))
      name === "mi3" ? setMi3(value) : setMi3(convertVolume(value, name, "mi3"))
    }
  }

  return (
    <Card sx={{ alignSelf: "center", display: "flex" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="ml"
          label="Milliliter"
          value={ml}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mL</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="cl"
          label="Centiliter"
          value={cl}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">cL</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="dl"
          label="Desiliter"
          value={dl}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">dL</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="l"
          label="Liter"
          value={l}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">L</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="kl"
          label="Kiloliter"
          value={kl}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">kL</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="ML"
          label="Megaliter"
          value={ML}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ML</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="mm3"
          label="Cubic Millimeter"
          value={mm3}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mm³</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="cm3"
          label="Cubic Centimeter"
          value={cm3}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm³</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="m3"
          label="Cubic Meter"
          value={m3}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">m³</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="km3"
          label="Cubic Kilometer"
          value={km3}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">km³</InputAdornment>,
          }}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          name="tsp"
          label="Teaspoon (US)"
          value={tsp}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">tsp.</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="tbsp"
          label="Tablespoon (US)"
          value={tbsp}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">tbsp.</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="C"
          label="Cup (US)"
          value={C}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">C</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="pt"
          label="Pint (US)"
          value={pt}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">pt.</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="qt"
          label="Quart (US)"
          value={qt}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">qt.</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="gal"
          label="Gallon (US)"
          value={gal}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">gal.</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="in3"
          label="Cubic Inch"
          value={in3}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">in³</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="ft3"
          label="Cubic Foot"
          value={ft3}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">ft³</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="yd3"
          label="Cubic Yard"
          value={yd3}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">yd³</InputAdornment>,
          }}
        />
        <TextField
          multiline
          name="mi3"
          label="Cubic Mile"
          value={mi3}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mi³</InputAdornment>,
          }}
        />
      </CardContent>
    </Card>
  )
}

export default VolumeConverter

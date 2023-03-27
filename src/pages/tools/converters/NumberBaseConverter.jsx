import { useEffect, useState } from "react"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const NumberBaseConverter = () => {
  const [binary, setBinary] = useState("")
  const [octal, setOctal] = useState("")
  const [decimal, setDecimal] = useState("")
  const [hex, setHex] = useState("")

  const convertBase = (str, fromBase, toBase) => {
    const DIGITS = "0123456789ABCDEF"

    const add = (x, y, base) => {
      let z = []
      const n = Math.max(x.length, y.length)
      let carry = 0
      let i = 0
      while (i < n || carry) {
        const xi = i < x.length ? x[i] : 0
        const yi = i < y.length ? y[i] : 0
        const zi = carry + xi + yi
        z.push(zi % base)
        carry = Math.floor(zi / base)
        i++
      }
      return z
    }

    const multiplyByNumber = (num, x, base) => {
      if (num < 0) return null
      if (num == 0) return []

      let result = []
      let power = x
      while (true) {
        num & 1 && (result = add(result, power, base))
        num = num >> 1
        if (num === 0) break
        power = add(power, power, base)
      }

      return result
    }

    const parseToDigitsArray = (str, base) => {
      const digits = str.split("")
      let arr = []
      for (let i = digits.length - 1; i >= 0; i--) {
        const n = DIGITS.indexOf(digits[i])
        if (n == -1) return null
        arr.push(n)
      }
      return arr
    }

    const digits = parseToDigitsArray(str, fromBase)
    if (digits === null) return null

    let outArray = []
    let power = [1]
    for (let i = 0; i < digits.length; i++) {
      digits[i] &&
        (outArray = add(
          outArray,
          multiplyByNumber(digits[i], power, toBase),
          toBase
        ))
      power = multiplyByNumber(fromBase, power, toBase)
    }

    let out = ""
    for (let i = outArray.length - 1; i >= 0; i--) out += DIGITS[outArray[i]]

    return out
  }

  const handleBinaryChange = (e) => {
    const input = e.target.value
    const regex = /^[0-1\b]+$/

    if (input === "" || regex.test(input)) {
      const convertedOctal = convertBase(input, 2, 8)
      const convertedDecimal = convertBase(input, 2, 10)
      const convertedHex = convertBase(input, 2, 16)

      setBinary(input)
      setOctal(convertedOctal)
      setDecimal(convertedDecimal)
      setHex(convertedHex)
    }
  }

  const handleOctalChange = (e) => {
    const input = e.target.value
    const regex = /^[0-7\b]+$/

    if (input === "" || regex.test(input)) {
      const convertedBinary = convertBase(input, 8, 2)
      const convertedDecimal = convertBase(input, 8, 10)
      const convertedHex = convertBase(input, 8, 16)

      setOctal(input)
      setBinary(convertedBinary)
      setDecimal(convertedDecimal)
      setHex(convertedHex)
    }
  }

  const handleDecimalChange = (e) => {
    const input = e.target.value
    const regex = /^[0-9\b]+$/

    if (input === "" || regex.test(input)) {
      const convertedBinary = convertBase(input, 10, 2)
      const convertedOctal = convertBase(input, 10, 8)
      const convertedHex = convertBase(input, 10, 16)

      setDecimal(input)
      setBinary(convertedBinary)
      setOctal(convertedOctal)
      setHex(convertedHex)
    }
  }

  const handleHexChange = (e) => {
    const input = e.target.value.toUpperCase()
    const regex = /^[0-9A-F\b]+$/

    if (input === "" || regex.test(input)) {
      const convertedBinary = convertBase(input, 16, 2)
      const convertedOctal = convertBase(input, 16, 8)
      const convertedDecimal = convertBase(input, 16, 10)

      setHex(input)
      setBinary(convertedBinary)
      setOctal(convertedOctal)
      setDecimal(convertedDecimal)
    }
  }

  return (
    <Card sx={{ alignSelf: "center",}}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          multiline
          label="Binary | Base-2"
          value={binary}
          onChange={handleBinaryChange}
        />
        <TextField
          multiline
          label="Octal | Base-8"
          value={octal}
          onChange={handleOctalChange}
        />
        <TextField
          multiline
          label="Decimal | Base-10"
          value={decimal}
          onChange={handleDecimalChange}
        />
        <TextField
          multiline
          label="Hexadecimal | Base-16"
          value={hex}
          onChange={handleHexChange}
        />
      </CardContent>
    </Card>
  )
}

export default NumberBaseConverter

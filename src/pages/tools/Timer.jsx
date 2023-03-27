import { useEffect, useState } from "react"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const Timer = () => {
  const [time, setTime] = useState(5 * 60 * 1000)
  const [running, setRunning] = useState(false)
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [seconds, setSeconds] = useState("")

  const toggleRunning = () => setRunning(!running)

  const reset = () => {
    setRunning(false)
    setTime(0)
  }

  const resetInput = () => {
    setHours("")
    setMinutes("")
    setSeconds("")
  }

  const handleHoursChange = (e) => {
    const regex = /^[0-9\b]+$/
    if (e.target.value === "" || regex.test(e.target.value)) {
      setHours(e.target.value)
    }
  }

  const handleMinutesChange = (e) => {
    const regex = /^[0-9\b]+$/
    if (e.target.value === "" || regex.test(e.target.value)) {
      setMinutes(e.target.value)
    }
  }

  const handleSecondsChange = (e) => {
    const regex = /^[0-9\b]+$/
    if (e.target.value === "" || regex.test(e.target.value)) {
      setSeconds(e.target.value)
    }
  }

  const setTimer = (e) => {
    const msInDay = 24 * 60 * 60 * 1000
    let totalMs = seconds * 1000 + minutes * 60 * 1000 + hours * 60 * 60 * 1000
    if (totalMs >= msInDay) totalMs = msInDay - 1
    setTime(totalMs)
    resetInput()
  }

  useEffect(() => {
    let interval

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  if (running && time <= 10) reset()

  return (
    <Card sx={{ alignSelf: "center" }}>
      <CardContent>
        <Typography variant="h1" textAlign="center">
          {new Date(time).toISOString().slice(11, 22)}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          disabled={time <= 0}
          variant="contained"
          onClick={toggleRunning}
        >
          {running ? "Pause" : "Start"}
        </Button>
        <Button variant="contained" disabled={time === 0} onClick={reset}>
          Reset
        </Button>
      </CardActions>

      <CardContent sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <TextField
          label="Hours"
          value={hours}
          onChange={handleHoursChange}
          sx={{ maxWidth: 100 }}
        />
        <TextField
          label="Minutes"
          value={minutes}
          onChange={handleMinutesChange}
          sx={{ maxWidth: 100 }}
        />
        <TextField
          label="Seconds"
          value={seconds}
          onChange={handleSecondsChange}
          sx={{ maxWidth: 100 }}
        />
        <Button
          disabled={running || (!seconds && !minutes && !hours)}
          variant="contained"
          onClick={setTimer}
        >
          Set
        </Button>
      </CardContent>
    </Card>
  )
}

export default Timer

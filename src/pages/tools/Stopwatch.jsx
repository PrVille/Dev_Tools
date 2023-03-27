import { useEffect, useState } from "react"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { CardContent, Divider, Box } from "@mui/material"

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState([])
  const minLapIndex = laps.lastIndexOf(Math.min(...laps))
  const maxLapIndex = laps.lastIndexOf(Math.max(...laps))

  const toggleRunning = () => setRunning(!running)

  const reset = () => {
    setTime(0)
    setLaps([])
  }

  const addLap = () => {
    const newLap =
      laps.length === 0 ? time : time - laps.reduce((a, b) => a + b, 0)
    setLaps(laps.concat(newLap))
  }

  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  return (
    <Card sx={{ alignSelf: "center" }}>
      <CardContent>
        <Typography variant="h1" textAlign="center">
          {new Date(time).toISOString().slice(11, 22)}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" onClick={toggleRunning}>
          {running ? "Stop" : "Start"}
        </Button>
        <Button
          variant="contained"
          disabled={time === 0}
          onClick={() => (running ? addLap() : reset())}
        >
          {running || time === 0 ? "Lap" : "Reset"}
        </Button>
      </CardActions>

      <CardContent>
        {laps.map((lap, i) => (
          <Box
            sx={{
              display: "flex",
              color:
                i === minLapIndex
                  ? "green"
                  : i === maxLapIndex
                  ? "red"
                  : "inherit",
            }}
          >
            <Typography textAlign="left" flex={1}>
              {"Lap " + (i + 1)}
            </Typography>
            <Typography textAlign="right">
              {new Date(lap).toISOString().slice(11, 22)}
            </Typography>
            <Divider />
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

export default Stopwatch

import { useState, useCallback, createContext } from "react"

export const NotificationContext = createContext({
  open: null,
  duration: null,
  message: null,
  severity: null,
  handleClose: () => {},
  notify: () => {},
})

const NotificationProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [duration, setDuration] = useState(5000)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState("success")

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const notify = (message, duration = 5000, severity = "success") => {
    setMessage(message)
    setDuration(duration)
    setSeverity(severity)
    setOpen(true)
  }

  const contextValue = {
    open,
    duration,
    message,
    severity,
    notify: useCallback(
      (message, duration, severity) => notify(message, duration, severity),
      []
    ),
    handleClose: useCallback((event, reason) => handleClose(event, reason), []),
  }

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider

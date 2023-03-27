import { useContext } from "react"
import { NotificationContext } from "../providers/NotificationProvider"

const useNotification = () => {
  const { duration, open, message, severity, handleClose, notify } =
    useContext(NotificationContext)

  return { duration, open, message, severity, handleClose, notify }
}

export default useNotification

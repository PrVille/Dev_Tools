import React from "react"
import ReactDOM from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { BrowserRouter as Router } from "react-router-dom"
import NotificationProvider from "./providers/NotificationProvider"
import Notification from "./components/Notification"
//import { inject } from '@vercel/analytics';
 
import App from "./App"
import theme from "./theme"

//inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NotificationProvider>
        <Notification />
        <App />
      </NotificationProvider>
    </ThemeProvider>
  </Router>
)

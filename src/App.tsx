import { ThemeProvider } from "@/components/ThemeProvider"
import { Outlet } from "react-router-dom"
import useTabTitle from "./components/Titlechanger"
const App = () => {
  useTabTitle();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
    <Outlet></Outlet> 
    </ThemeProvider>
  )
}

export default App

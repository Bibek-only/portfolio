import { ThemeProvider } from "@/components/ThemeProvider"
import { Outlet } from "react-router-dom"
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
    <Outlet></Outlet> 
    </ThemeProvider>
  )
}

export default App

import { ModeToggle } from "./ThemToogler"

const NavBar = () => {
  return (
    <nav className="flex w-full py-6 items-center justify-around">
        <h1>Bibek samal</h1>
        <ModeToggle />
    </nav>
  )
}

export default NavBar

import { ModeToggle } from "./ThemToogler"

const NavBar = () => {
  return (
    

<nav className="sticky top-0 z-10 bg-[oklch(91.637%_0.034_90.515)] dark:bg-[oklch(21.15%_0.012_254.09)]">
  <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
    <a  className="flex items-center space-x-3 rtl:space-x-reverse">
        
        <span className="self-center text-4xl font-bold  whitespace-nowrap"><span className="text-[oklch(80%_0.114_19.571)] dark:text-[oklch(58%_0.233_277.117)] text-4xl font-bold">{"< "}</span>Bibek<span className="text-[oklch(80%_0.114_19.571)] dark:text-[oklch(58%_0.233_277.117)] text-4xl font-bold">{" />"}</span></span>
    </a>
    {/* <button onClick={()=>{
      document.querySelector(".hambergCard")?.classList.toggle("hidden")
      
      
    }} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button> */}
      <span className="md:hidden">
      <ModeToggle></ModeToggle>
        </span>
    <div  className="hidden hambergCard w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 items-center ">
        <li>
          <a href="#" className="block py-2 px-3 md:px-2 md:py-1 duration-150 rounded-sm dark:hover:bg-[oklch(25.33%_0.016_252.42)] hover:bg-[oklch(84.133%_0.065_90.856)]" aria-current="page">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:px-2 md:py-1 duration-150 rounded-sm dark:hover:bg-[oklch(25.33%_0.016_252.42)] hover:bg-[oklch(84.133%_0.065_90.856)]">Education</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:px-2 md:py-1 duration-150 rounded-sm dark:hover:bg-[oklch(25.33%_0.016_252.42)] hover:bg-[oklch(84.133%_0.065_90.856)]">Projects</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:px-2 md:py-1 duration-150 rounded-sm dark:hover:bg-[oklch(25.33%_0.016_252.42)] hover:bg-[oklch(84.133%_0.065_90.856)]">Contact</a>
        </li>
        <li>
          <ModeToggle></ModeToggle>
        </li>

      </ul>
    </div>
  </div>
</nav>


  )
}

export default NavBar

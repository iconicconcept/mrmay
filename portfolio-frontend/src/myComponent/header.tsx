import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-3 px-3 shadow-green-500 rounded-[7px] top-8 mx-auto flex justify-center fixed z-10">
        <div className="flex justify-between items-center gap-3 md:gap-6 lg:gap-7 w-74 md:w-100 lg:w-120 bg-green-50/80 rounded-[7px] px-5 border border-green-200 shadow-green-200 py-3 shadow-2xs">
          <h1 className="font-semibold font-mono text-2xl tracking-tight hidden md:flex lg:flex">MrMay</h1>
            <ul className="flex justify-between gap-2 w-full md:w-max lg:w-max md:gap-6 lg:gap-7 text-green font-medium ">
                <li>
                  <a href="/Mubaraq-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline" download="Mubaraq's Resume">
                     Resume
                  </a>
                </li>
                <li><Link to="Projects" smooth={true} duration={700} className="cursor-pointer hover:underline">Projects</Link></li>
                <li><Link to="Skills" smooth={true} duration={700} className="cursor-pointer hover:underline">Skills</Link></li>
                <li><Link to="Contact" smooth={true} duration={600} className="cursor-pointer hover:underline">Contact</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header
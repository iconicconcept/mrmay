import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  useEffect(()=>{
      AOS.init({
          duration: 1300
      });
  }, [])

  return (
    <header className="py-3 px-3 shadow-green-500 rounded-[7px] top-8 mx-auto flex justify-center absolute">
        <div className="flex justify-between items-center gap-3 md:gap-6 lg:gap-7 w-84 md:w-100 lg:w-120 rounded-[7px] px-5 border border-green-200 shadow-green-200 py-3 shadow-2xs">
          <h1 className="font-semibold font-mono text-2xl tracking-tight">MrMay</h1>
            <ul className="flex justify-between gap-2 md:gap-6 lg:gap-7 text-green font-medium ">
                <li><Link to="Home" smooth={true} duration={500} className="cursor-pointer hover:underline ">Home</Link></li>
                <li><Link to="Projects" smooth={true} duration={500} className="cursor-pointer hover:underline">Projects</Link></li>
                <li><Link to="Skills" smooth={true} duration={500} className="cursor-pointer hover:underline">Skills</Link></li>
                <li><Link to="Contact" smooth={true} duration={500} className="cursor-pointer hover:underline">Contact</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header
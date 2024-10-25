import { navLinks } from "../constants";
import { hamburger } from '../assets/icons';

function SideMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-[#F1E6E6] shadow-lg 
    transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
    transition-transform duration-300`}>
      <ul className="flex flex-col justify-center items-start px-10 py-20">
        {navLinks.map((item) => ( 
          <li key={item.label} className="mb-4">
            <a  href={item.href}
              onClick={toggleMenu}
              className="font-montserrat leading-normal text-lg text-slate-gray">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideMenu
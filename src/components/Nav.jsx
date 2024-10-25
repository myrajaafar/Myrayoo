import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import SideMenu from './SideMenu';
import { useState } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/>">
            <img src ={headerLogo} 
            alt="Logo"
            width={75}
            height={30}/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => <li key={item.label}>
                    <a href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray">
                        {item.label}
                    </a>
                </li>)}
            </ul>
            <div className="hidden max-lg:block">
                <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu}/> 
                <button 
                    onClick={toggleMenu} 
                    aria-label='Toggle menu' 
                    className='absolute top-4 right-4'>
                        <img src={hamburger} alt="Hamburger" width={25} height={25}/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Nav
// Header.jsx

import { Link } from 'react-router-dom';
import * as React from 'react';

const Header: React.FC = React.memo(() => {

    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

    const handleMenuClick = (): void => {
        setMenuOpen(!menuOpen);
    };

    React.useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        const targetElement = e.target as Element;

        if (menuOpen && targetElement.closest('.overlay')) {
          setMenuOpen(false);
        };
      };

      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [menuOpen]);

    return (
      <header>
        <div className='headerWrapper'>
          <div>
              <Link to='/'>PokeNavi</Link>
          </div>  

          <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
            <div className="menu-icon" onClick={handleMenuClick}>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div>

            <div className='menu-content'>
              <div className='overlay'></div>

              <div className='navbar'>

                <div className='closeMenu-icon' onClick={handleMenuClick}>
                  <div className='bar2'></div>
                  <div className='bar2'></div>
                </div>

                <div>
                    <Link to='/' onClick={handleMenuClick} >
                      <img src='/iconImages/home.png' className='iconImages' alt='homeIconImage'>
                        </img> Home</Link>
                </div>
                <div>
                    <Link to='/contact' onClick={handleMenuClick}>
                      <img src='/iconImages/contact.png' className='iconImages' alt='contactIconImage'>
                        </img> Contact</Link>
                </div>

                <div>
                    <Link to='/about' onClick={handleMenuClick}>
                      <img src='/iconImages/about.png' className='iconImages' alt='aboutIconImage'>
                        </img> About</Link>
                </div>
                <div>
                    <Link to='/howto' onClick={handleMenuClick}>
                      <img src='/iconImages/howTo.png' className='iconImages' alt='howToIconImage'>
                        </img> How to Use</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
});

export default Header;
import React, { useEffect } from 'react';
import '../Assets/Styles/App.css';
import logo from '../Assets/Images/Logos/Aivirx_Logo.webp';

function NavBar() {
  useEffect(() => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const closeMenuButton = document.querySelector('.close-menu');

    const handleBurgerMenuClick = () => {
      navLinks.classList.toggle('show');
    };

    const handleCloseMenuClick = () => {
      navLinks.classList.remove('show');
    };

    burgerMenu.addEventListener('click', handleBurgerMenuClick);
    closeMenuButton.addEventListener('click', handleCloseMenuClick);

    // Close the menu when a navigation link is clicked
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
      link.addEventListener('click', handleCloseMenuClick);
    });

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      burgerMenu.removeEventListener('click', handleBurgerMenuClick);
      closeMenuButton.removeEventListener('click', handleCloseMenuClick);
      navLinksList.forEach(link => {
        link.removeEventListener('click', handleCloseMenuClick);
      });
    };
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <a href="https://www.aivirx.com">
            <img className="logo" src={logo} alt="Logo for aivirx.com" width="45" height="45" />
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="https://www.aivirx.com/nyc/">NYC</a></li>
              <li><a href="https://www.aivirx.com/contact">CONTACT</a></li>
              <li className="close-menu">&#10006;</li>
            </ul>
            <div className="burger-menu">&#9776;</div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;

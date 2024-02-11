import '../Assets/Styles/App.css';
import logo from '../Assets/Images/Logos/Aivirx_Logo.webp';

function NavBar() {
  return (
    <div>
    <header>
        <div class="container">
            <a href="https://www.aivirx.com"><img class="logo" src={logo}
                    alt="Logo for aivirx.com" width="45" height="45"></img></a>
            <nav>
                <ul class="nav-links">
                    <li><a href="https://www.aivirx.com/nyc/">NYC</a></li>
                    <li><a href="https://www.aivirx.com/contact">CONTACT</a></li>
                    <li class="close-menu">&#10006;</li>
                </ul>
                <div class="burger-menu">&#9776;</div>
            </nav>
        </div>
    </header></div>
  );
}

export default NavBar;
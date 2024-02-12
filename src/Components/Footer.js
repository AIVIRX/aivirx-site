import '../Assets/Styles/footer.css';


function Footer() {
    return (
        <div>
        <footer>
    <div className="footer-container">
        <div className="footer-links">
            <h3>Pages</h3>
            <ul>
                <li><a href="https://www.google.com">Home</a></li>
                <li><a href="https://www.google.com">About Us</a></li>
                <li><a href="https://www.google.com">Services</a></li>
                <li><a href="https://www.google.com">Contact</a></li>
            </ul>
        </div>
{/*         
        <div className="footer-sitemap">
            <h4>Sitemap</h4>
            <ul>
                <li><a href="#">Products</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>* */}
        <div className="footer-copyright">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</footer>
</div>
    );
}

export default Footer;
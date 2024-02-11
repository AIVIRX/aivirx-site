import '../Assets/Styles/footer.css';


function Footer() {
    return (
        <>
        <footer>
    <div className="footer-container">
        <div className="footer-links">
            <h4>Pages</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="footer-sitemap">
            <h4>Sitemap</h4>
            <ul>
                <li><a href="#">Products</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="footer-copyright">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</footer>
</>
    );
}

export default Footer;
import '../style/Footer.css';

function Footer() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        // Footer section with dynamic copyright
        <footer>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;

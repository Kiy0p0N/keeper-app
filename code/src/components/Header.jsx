import '../style/Header.css';
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
    return (
        // Main header element
        <header>
            {/* App title */}
            <h1 className="header-title">
                <HighlightIcon />
                Keeper
            </h1>
        </header>
    );
}

export default Header;

import Link from "next/link";
import ColoredText from "./ColoredText"

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <ColoredText color="">
            <h1>
                CL Kingdom
            </h1>
        </ColoredText>
        
        
        <Link href="/">
            <a style={linkStyle}>[Home]</a>
        </Link>
        <Link href="/blog">
            <a style={linkStyle}>[Dev Blog]</a>
        </Link>
        
        <a href="https://github.com/jhuggett/clkingdom" >[GitHub]</a>

        <a href="https://www.npmjs.com/package/clkingdom" style={{margin: 12}}>[npm]</a>
        
        <style jsx>{`
            a {
                text-decoration: none;
                color: white;
            }
            div {
                text-align: center;
            }
        `}</style>
    </div>
);

export default Header;
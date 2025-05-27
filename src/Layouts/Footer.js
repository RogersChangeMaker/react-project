import Logo from "../conponents/Logo";
import Searchinput from "../conponents/Searchinput";
import './Footer.module.css';


function Footer(){
    return (
        <div className="footer">
            <Logo/>
            <p>Search for any input</p>
            <Searchinput/>
            

        </div>

    )
};

export default Footer;

import Logo from "../conponents/Logo";
import Searchinput from "../conponents/Searchinput";
import UserProfile from "../conponents/UserProfile";
import styles from "./Nav.module.css";



function Nav(){
    return (
      <nav className="nav">
        <Logo />
       <Searchinput />
       <UserProfile />

        
      </nav>
    );
}

export default Nav;
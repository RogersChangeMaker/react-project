
import Logo from "../conponents/Logo";
import Searchinput from "../conponents/Searchinput";
import UserProfile from "../conponents/Userprofile";
import styles from "./Nav.modules.css";



function Nav(){
    return (
      <nav className="nav">
        <Logo />
       <Searchinput  />
       <UserProfile />

        
      </nav>
    );


}

export default Nav;
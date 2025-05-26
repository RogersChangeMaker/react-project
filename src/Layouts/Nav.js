function Nav(){
    return <nav>
        <div className="logo">My Library</div>

        <div className="input-box">
            <input type="search" placeholder="search by title, author, or ISBN"/>
            <i>Search</i>
        </div>

        <div className="user-box">
            <i>User</i>
            <p>Rogers</p>
        </div>
    </nav>


}

export default Nav;
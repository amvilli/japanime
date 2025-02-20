
export default function Navbar() {
    return (
        <>

            <nav className="nav" >

                <div className="nav-title">
                    <img className="logo" src="images/logos/dino.png" alt="" />
                    <h1>Japanime</h1>
                </div>
                <div className="nav-left">
                    <div className="nav-inputs">
                        <input className="search" type="text" />
                        <img className="search-img" src="images/icons/search.png" alt="" />

                    </div>
                    <div className="nav-btns">
                        <button className="login-btn">login</button>
                        <button className="user-profile-btn"><img className="user-profile-img" src="images/userpng/student (1).png" alt="" /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

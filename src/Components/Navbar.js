const Navbar =()=>{
    const data=localStorage.getItem('loginuser')
    console.log(data)
    const logout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('loginuser');
        window.location.href='/'
    }
    return(
        <nav className="navbar">
            <ul className="ul">
                <li className="text">
                    <a href="/">Home</a>
                </li>
                <li className="text">
                    <a href="/about">About</a>
                </li>
                <li className="text">
                     <a href="/contact">Contact</a>
                </li>
                <li>
                    {data?(<button onClick={logout}> Logout</button>):
                    (
                        <a href="/login">Login</a>
                    )
                    }
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
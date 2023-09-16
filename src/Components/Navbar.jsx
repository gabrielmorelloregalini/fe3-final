import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from "./utils/global.context"

const Navbar = () => {
    const { state, dispatch } = useContext(ThemeContext);
    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };
    return (
        <><div className='NavbarCss' style={{
            background: state.theme.background,
            color: state.theme.color,
            paddingTop: state.theme.padding
            }}>
            <h1
                style={{
                    fontSize: "3vw"
                }}>DH brillante <span>(como tu sonrisa)</span> </h1>
            <nav>
                <li><Link style={{color: state.theme.color,}} to="/">Home</Link></li>
                <li><Link style={{color: state.theme.color,}} to="/contact">Contact</Link></li>
                <li><Link style={{color: state.theme.color,}} to="/favs">Favs</Link></li>
                <button onClick={toggleTheme}><img className="icon" src="public/images/soleado.png" alt="Photo" /></button>
            </nav>
            <Outlet />
        </div>
        </>
    )
}
export default Navbar

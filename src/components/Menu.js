import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Beranda</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Tentang kami</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Program</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Unit Bisnis</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Temukan Kami</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

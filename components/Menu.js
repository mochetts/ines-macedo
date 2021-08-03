import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Inicio</span></a></Link></li>
                <li><Link href="/#proyects"><a><span onClick={props.onToggleMenu}>Proyectos</span></a></Link></li>
                <li><Link href="/#contact"><a><span onClick={props.onToggleMenu}>Contacto</span></a></Link></li>
                <li><Link href="/static/files/portfolio.pdf"><a target="_blank"><span>Descargar portfolio</span></a></Link></li>
                <li><Link href="/static/files/cv.pdf"><a target="_blank"><span>Descargar Currículum</span></a></Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

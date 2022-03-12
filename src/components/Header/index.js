import {Link} from 'react-router-dom'
import {BsJustify, BsBoxArrowRight} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="logo"
      className="website-logo"
    />
    <ul className="nav-icon-container">
      <Link to="/">
        <li>Hello</li>
      </Link>
      <Link to="/">
        <li>
          <BsJustify />
        </li>
      </Link>
      <Link to="/">
        <li>
          <BsBoxArrowRight />
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header

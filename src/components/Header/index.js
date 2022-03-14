import {Link} from 'react-router-dom'
import {BsFillLightningFill, BsJustify, BsBoxArrowRight} from 'react-icons/bs'
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
        <li>
          <BsFillLightningFill className="nav-icon" />
        </li>
      </Link>
      <Link to="/">
        <li>
          <BsJustify className="nav-icon" />
        </li>
      </Link>
      <Link to="/">
        <li>
          <BsBoxArrowRight className="nav-icon" />
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header

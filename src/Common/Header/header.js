import './header.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="menu">
          <div className="left-menu">
            <div className="logo">
              Some Logo Here
            </div>
          </div>
          <div className="center-menu">
            <ul className="content-menu">
              <li className="menu-parent">
                <Link to="/" className="active"> HOME </Link>
                <ul className="sub-menu">
                  <li>
                    <span>
                      Danh muc This
                    </span>
                    <ArrowForwardIosIcon className="icon-menu"/>
                  </li>
                  <li>
                    <span>
                    Danh muc That
                    </span>
                    <ArrowForwardIosIcon className="icon-menu"/>
                  </li>
                </ul>
              </li>
              <li className="menu-parent">
                <Link to=""> ABOUT </Link>
              </li>
              <li className="menu-parent">
                <Link to=""> SERVICE </Link>
              </li>
            </ul>
          </div>
          <div className="right-menu">
            Button logout here
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
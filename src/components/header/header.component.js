import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.component.scss'

export class HeaderComponent extends React.Component {
    static propTypes = {
        siteTitle: PropTypes.string,
    };
    static defaultProps = {
        siteTitle: ``,
    };

    render () {
        const siteTitle = this.props.siteTitle;
        return (
            <header>
                <div className="vertical-menu area text-center">
                    <div className="mb-4 logo font-weight-bold">BLOG<br/><span><span className="text-primary">TEA</span>POT</span></div>
                    <nav className="navbar justify-content-center">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#">ГЛАВНАЯ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link category" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    КАТЕГОРИИ
                                </a>
                                <div className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Bootstrap</a>
                                    <a className="dropdown-item" href="#">React</a>
                                    <a className="dropdown-item" href="#">Git</a>
                                    <a className="dropdown-item mt-2" href="#">Common</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">О БЛОГЕ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">МОЙ САЙТ</a>
                            </li>
                        </ul>
                    </nav>
                    <form className="input-group justify-content-center search">
                        <input className="form-control" type="search" aria-label="Search"/>
                        <button className="input-group-append btn btn-outline bg-primary btn-icon text-white" type="submit">
                            <i className="material-icons">
                            search
                            </i>
                        </button>
                    </form>
                </div>
            </header>);
    }
}
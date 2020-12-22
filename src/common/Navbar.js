import React from 'react';
import {
    Link, useLocation
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    const { pathname } = useLocation();
    const _onFocus = (e) => {

        e.currentTarget.type = "date";
    };
    const _onBlur = (e) => {
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "Anytime";
    };
    return (
        <div className="border-bottom ">
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row mb-1" style={{ marginLeft: '60px' }}>
                    <div className="d-flex flex-row form-control">
                        <div>
                            <i className="fas fa-search mr-2"></i>
                            <input type="text" style={{ border: "none" }} placeholder="Anywhere" />
                        </div>
                        <div className="border-right mr-1" />
                        <div>
                            <i className="fas fa-calendar-alt mr-2" />
                            <input placeholder="Anytime" style={{ border: "none" }} type="text" onFocus={_onFocus} onBlur={_onBlur} />
                        </div>

                        {/* <input type="date" style={{ border: "none" }} placeholder="Anytime" /> */}
                        <div className="border-right mr-1" />
                        <div>
                            <i className="fas fa-user-friends mr-2"></i>
                            <input type="text" style={{ border: "none" }} placeholder="1 guest" />
                        </div>

                    </div>
                </div>
                <div className="d-flex flex-row">
                    <Link to='/host' className="nav-link fs-12 fw-500 text-dark"> Become a Host</Link>
                    <Link to='/help' className="nav-link fs-12 fw-500 text-dark"> Help</Link>
                    <Link to='/register' className="nav-link fs-12 fw-500 text-dark"> Sign up</Link>
                    <Link to='/login' className="nav-link fs-12 fw-500 text-dark"> Log In</Link>
                </div>
            </div>

            <div className="d-flex flex-row">
                <Link
                    to='/'
                    className={pathname === '/' ? "nav-link fs-12  text-uppercase active_item" : "nav-link fs-12 text-dark text-uppercase"}
                > for you</Link>
                <Link to='/homes' className={pathname === '/homes' ? "nav-link fs-12  text-uppercase active_item" : "nav-link fs-12 text-dark text-uppercase"}> homes</Link>
                <Link to='/experience' className={pathname === '/experience' ? "nav-link fs-12  text-uppercase active_item" : "nav-link fs-12 text-dark text-uppercase"}> experience</Link>
                <Link to='/places' className={pathname === '/places' ? "nav-link fs-12  text-uppercase active_item" : "nav-link fs-12 text-dark text-uppercase"}> Places</Link>
            </div>
        </div>
    )
};
export default Navbar;
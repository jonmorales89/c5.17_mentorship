import React from 'react';
import './app.css';

const SideBar = () => {
    return (
        <div className="container-fluid">
            <div id="test" className="row">
                <div className="col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1">
                    <nav className="nav navbar-light navbar-toggleable-sm">
                        <div className="row" id="navbarWEX">
                            <a className="nav-link navbar-brand active" href="">
                                <span className="fa fa-home " />
                            </a>
                            <a href="" className="nav-link mr-5">
                                Link{' '}
                            </a>
                            <a href="" className="nav-link">
                                Link{' '}
                            </a>
                            <a href="" className="nav-link">
                                Link{' '}
                            </a>
                            <a href="" className="nav-link">
                                Link{' '}
                            </a>
                            <a href="" className="nav-link">
                                Link{' '}
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SideBar;

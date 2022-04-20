

import React from 'react'

import Button from '@mui/material/Button';







const Nav = () => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-sm navbar-light text-white">
                <div className="container-fluid">


                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Denim</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">Shopping</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto">
                            <li>
                                <h3 style={{ fontFamily: 'Courier New' }}>EVERLANE</h3>
                            </li>
                        </ul>





                        <div>
                            <form className="d-flex" style={{ position: 'relative' }} >
                                <div>
                                    <i className="fas fa-search" style={{ left: '-10%', bottom: '30%', position: 'absolute' }}></i>
                                </div>
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>


                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign up</a>
                            </li>

                            <Button>Flag</Button>


                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Nav


import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';






const Nav = () => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-sm navbar-light text-white">
                <div className="container-fluid">


                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <NavLink className="nav-link active" to="#">Women</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="#">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">Category</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" to="#" aria-disabled="true">Shopping</NavLink>
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

                                    <i className="fas fa-search" style={{ left: '-10%', bottom: '30%', position: 'absolute', color: 'blue' }}></i>
                                </div>
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>


                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Log in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                            </li>




                        </ul>
                    </div>
                </div >
            </nav >
            <Routes>

            </Routes>
        </div >
    )


}

export default Nav
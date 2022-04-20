import React from 'react'
import Nav from '../Nav/Nav'
import '../style/CategoryOverview.css'

const CategoryOverview = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='container-fluid'>


                <div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div>
                            <ul className="navbar-nav mb-2" >
                                <li className="nav-item">
                                    <h1>URBAN OUTFITTERS</h1>
                                </li>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse" style={{ marginLeft: '100px' }}>
                            <ul className="navbar-nav mb-2" >
                                <form className="d-flex">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />

                                </form>

                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Women's</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Men's</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Lifestyle</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Beauty</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="#" style={{ color: 'red' }}>Sale</a>
                                </li>


                            </ul>

                        </div>

                    </nav>
                </div>
                <div className='head-contain'>
                    <div className='row'>
                        <div className='col-sm-3 top-product'>
                            <span className='top-product-child'>Furniture</span>
                            <img src='https://noithattotdep.net/wp-content/uploads/2017/04/do-go-noi-that-gia-dinh-cao-cap-4.jpg'></img>
                        </div>
                        <div className='col-sm-3 top-product'>
                            <span className='top-product-child'>Bedding</span>
                            <img src='https://vachnganvietnam.vn/wp-content/uploads/2017/01/the-nao-la-noi-that-gia-dinh-cao-cap-1.jpg.webp'></img>
                        </div>
                        <div className='col-sm-3 top-product'>
                            <span className='top-product-child' >Most Liked</span>
                            <img src='https://luxcasa.vn/img/a/45.jpg'></img>
                        </div>
                        <div className='col-sm-3 top-product'>
                            <span className='top-product-child'>Wall Art</span>
                            <img src='https://cb.scene7.com/is/image/Crate/MarcelWallArtROSHS17/$web_pdp_main_carousel_med$/190411135228/marcel-teak-wall-art.jpg'></img>
                        </div>
                    </div>
                </div>



                <div className='body-contain' style={{ marginTop: '40px' }}>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <h3>Browse by : </h3>
                            <hr></hr>
                            <ul className='nav flex-column'>
                                <a style={{ textDecoration: 'underline' }} href="#">All home...</a>
                                <li>--</li>
                                {/* map category o day */}
                                <li className='nav-item'>New</li>
                                <li className='nav-item'>Bedding</li>
                                <li className='nav-item'>Art + Decor</li>
                                <li className='nav-item'>Lighting</li>
                                <li className='nav-item'>Kitchen + bar</li>
                                <li className='nav-item'>Vintage</li>
                            </ul>
                        </div>
                        <div className='col-sm-10'>
                            <div className='row'>


                                <div className="d-flex bd-highlight mb-3">
                                    <div className="me-auto p-2 bd-highlight">
                                        <h3>Home <span style={{ color: 'gray', fontSize: '15px' }}>3220 products</span></h3>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <span style={{ color: 'gray', fontSize: '15px' }}>Sort</span>
                                    </div>
                                    <div className="p-2 bd-highlight">

                                        <select className="form-select form-select-sm">
                                            <option value="1">Feature</option>
                                            <option value="2">Price</option>
                                            <option value="3">Rated</option>
                                        </select>

                                    </div>
                                    <div className="p-2 bd-highlight"><i className="fas fa-angle-left"></i> 1/30<i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>

                            <div className='row img-child'>
                                <div className='col-sm-3'>
                                    <img src='https://simiehome.com/wp-content/uploads/2022/01/3-1.jpg'></img>
                                    <div>
                                        <h4>Platform Bed</h4>
                                        <p>$580,00 $700,00</p>
                                    </div>
                                </div>

                                <div className='col-sm-3'>
                                    <img src='https://simiehome.com/wp-content/uploads/2021/06/BINKI-650x650.jpg'></img>
                                    <div>
                                        <h4>Platform Bed</h4>
                                        <p>$580,00 $700,00</p>
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <img src='https://simiehome.com/wp-content/uploads/2021/04/A405BE34-7D68-45B3-98AE-341009A3F02E_1_201_a-600x800.jpeg'></img>
                                    <div>
                                        <h4>Platform Bed</h4>
                                        <p>$580,00 $700,00</p>
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <img src='https://simiehome.com/wp-content/uploads/2021/05/IMG_1706-600x800.jpg'></img>
                                    <div>
                                        <h4>Platform Bed</h4>
                                        <p>$580,00 $700,00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CategoryOverview
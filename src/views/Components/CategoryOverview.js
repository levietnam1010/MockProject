import React from 'react'
import Nav from '../Nav/Nav'
import '../style/CategoryOverview.css'

const CategoryOverview = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='container-fluid'>


                <div>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div>
                            <ul class="navbar-nav mb-2" >
                                <li class="nav-item">
                                    <h1>URBAN OUTFITTERS</h1>
                                </li>
                            </ul>
                        </div>

                        <div class="collapse navbar-collapse" style={{ marginLeft: '100px' }}>
                            <ul class="navbar-nav mb-2" >
                                <form class="d-flex">
                                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" />

                                </form>

                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Women's</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Men's</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Lifestyle</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Beauty</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" href="#" style={{ color: 'red' }}>Sale</a>
                                </li>


                            </ul>

                        </div>

                    </nav>
                </div>
                <div className='head-contain'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <img src='https://noithattotdep.net/wp-content/uploads/2017/04/do-go-noi-that-gia-dinh-cao-cap-4.jpg'></img>
                        </div>
                        <div className='col-sm-3'>
                            <img src='https://vachnganvietnam.vn/wp-content/uploads/2017/01/the-nao-la-noi-that-gia-dinh-cao-cap-1.jpg.webp'></img>
                        </div>
                        <div className='col-sm-3'>
                            <img src='https://luxcasa.vn/img/a/45.jpg'></img>
                        </div>
                        <div className='col-sm-3'>
                            <img src='https://cb.scene7.com/is/image/Crate/MarcelWallArtROSHS17/$web_pdp_main_carousel_med$/190411135228/marcel-teak-wall-art.jpg'></img>
                        </div>
                    </div>
                </div>



                <div className='head-contain'>


                </div>
            </div>
        </div>
    )
}

export default CategoryOverview
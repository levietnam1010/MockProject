import { margin } from '@mui/system'
import React from 'react'
import Nav from '../Nav/Nav'
import '../style/Category.css'

const Category = () => {
    return (
        <>
            <div className="main-container">
                <Nav></Nav>
                <div className='content-page' >
                    <h1 id='content' style={{ fontSize: '100px' }}>Crowd-Pleasers</h1>
                    <p>Made by us.Loved by you.</p>

                    <div>SHOP BEST-SELLERS</div>
                </div>

            </div>
            <div className='category-div'>
                <div className="row">
                    <div className='col-sm-2'>
                        <div className='term'>
                            <h5>Search Terms</h5>
                        </div>

                        <div className='term'>
                            <button className='btn btn-light btn-sm'>Art     <i className="fas fa-times"></i></button> <button className='btn btn-light btn-sm' >Womens <i className="fas fa-times"></i></button>
                            <button className='btn btn-light btn-sm'>Art     <i className="fas fa-times"></i></button> <button className='btn btn-light btn-sm' >Womens <i className="fas fa-times"></i></button>
                            <button className='btn btn-light btn-sm'>Art     <i className="fas fa-times"></i></button> <button className='btn btn-light btn-sm' >Womens <i className="fas fa-times"></i></button>

                        </div>

                        <div className='term' style={{ position: 'relative' }}>
                            <input className='form-control' placeholder='Add search term...' type="search"  ></input>
                            <i className="fas fa-search" style={{ position: 'absolute', top: '15%', right: '1%' }}></i>
                            <button className='btn btn-danger' style={{ margin: '15px' }}>Clear all</button>
                        </div>

                        <div className='term'>
                            <h6>Category</h6>
                            <div>
                                <select className="form-select form-select-sm">

                                    <option value="1">Women's</option>
                                    <option value="2">Mens'</option>
                                    <option value="3">Kid</option>
                                </select>
                            </div>
                        </div>
                        <div className='term d-fex'>
                            <div> <h6>Color</h6>
                                <div className='box red'></div>
                                <div className='box green'></div>
                                <div className='box blue'></div>
                                <div className='box grey'></div>
                                <div className='box white'></div>

                                <div className='box yellow'></div>
                                <div className='box black'></div>
                                <div className='box AliceBlue'></div>
                                <div className='box Aqua'></div>
                            </div>
                            <button className='btn btn-danger' style={{ margin: '15px' }}>Clear all</button>
                        </div>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            <div className="d-flex justify-content-around top-head">
                                <div> <span>127 Results</span> </div>

                                <div> <i className="fas fa-align-justify"></i> <i className="fas fa-th"></i>

                                </div>
                                <div>
                                    <div>
                                        <select className="form-select form-select-sm">

                                            <option value="1">Women's</option>
                                            <option value="2">Mens'</option>
                                            <option value="3">Kid</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-3 product border border-primary'>
                                <i className="fas fa-heart heart"></i> <i className="far fa-heart display-heart"></i>
                                <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                <div className='description' >
                                    <h6>Đầm tweed ngắn</h6>
                                    <div className='description-child'>
                                        <h6>  More color : </h6>
                                        <div className='box yellow'></div>
                                        <div className='box black'></div>
                                    </div>
                                    <div className='description-child'> <h6>Price : $129 </h6> </div>
                                </div>
                            </div>
                            <div className='col-sm-3 product border border-primary'>
                                <i className="fas fa-heart heart"></i> <i className="far fa-heart display-heart"></i>
                                <div className='sale'>SALE</div>
                                <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                <div className='description' >
                                    <h6>Đầm tweed ngắn</h6>
                                    <div className='description-child'>
                                        <h6>  More color : </h6>
                                        <div className='box yellow'></div>
                                        <div className='box black'></div>
                                    </div>
                                    <div className='description-child'> <h6>Price : $129 </h6> </div>
                                </div>
                            </div>
                            <div className='col-sm-3 product border border-primary'>
                                <i className="fas fa-heart heart"></i> <i className="far fa-heart display-heart"></i>
                                <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                <div className='description' >
                                    <h6>Đầm tweed ngắn</h6>
                                    <div className='description-child'>
                                        <h6>  More color : </h6>
                                        <div className='box yellow'></div>
                                        <div className='box black'></div>
                                    </div>
                                    <div className='description-child'> <h6>Price : $129 </h6> </div>
                                </div>
                            </div>
                            <div className='col-sm-3 product border border-primary'>
                                <i className="fas fa-heart heart"></i> <i className="far fa-heart display-heart"></i>
                                <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                <div className='description' >
                                    <h6>Đầm tweed ngắn</h6>
                                    <div className='description-child'>
                                        <h6>  More color : </h6>
                                        <div className='box yellow'></div>
                                        <div className='box black'></div>
                                    </div>
                                    <div className='description-child'> <h6>Price : $129 </h6> </div>
                                </div>
                            </div>

                        </div>

                        <div className='row'>
                            <div className='col-sm-3 product border border-primary'>

                                <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                <div className='description' >
                                    <h6>Đầm tweed ngắn</h6>
                                    <div className='description-child'>
                                        <h6>  More color : </h6>
                                        <div className='box yellow'></div>
                                        <div className='box black'></div>
                                    </div>
                                    <div className='description-child'> <h6>Price : $129 </h6> </div>
                                </div>
                            </div>
                            <div className='col-sm-3 product border border-primary'>
                                <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                <div className='description' >
                                    <h6>Đầm tweed ngắn</h6>
                                    <div className='description-child'>
                                        <h6>  More color : </h6>
                                        <div className='box yellow'></div>
                                        <div className='box black'></div>
                                    </div>
                                    <div className='description-child'> <h6>Price : $129 </h6> </div>
                                </div>
                            </div>
                            <div className='col-sm-3 product border border-primary'>
                                <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                <div className='description' >
                                    <h6>Đầm tweed ngắn</h6>
                                    <div className='description-child'>
                                        <h6>  More color : </h6>
                                        <div className='box yellow'></div>
                                        <div className='box black'></div>
                                    </div>
                                    <div className='description-child'> <h6>Price : $129 </h6> </div>
                                </div>
                            </div>
                            <div className='col-sm-3 product border border-primary'>
                                <img src='https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/s/a/sandro_sfpro01937-20_v_1.jpg'></img>
                                <div className='description' >
                                    <h6>Đầm tweed ngắn</h6>
                                    <div className='description-child'>
                                        <h6>  More color : </h6>
                                        <div className='box yellow'></div>
                                        <div className='box black'></div>
                                    </div>
                                    <div className='description-child'> <h6>Price : $129 </h6> </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Category
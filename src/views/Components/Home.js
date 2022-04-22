import React from 'react'


import Nav from '../Nav/Nav'
import '../style/home.css'


const Home = () => {
    return (
        <div>
            <div className='container-fluid main-container'>
                <Nav></Nav>
                <a href='/Category'></a>
                <div className='content-page' style={{ position: 'absolute', top: '10%', left: '18%', color: 'white', textAlign: 'center' }}>
                    <h1 id='content' style={{ fontSize: '10vmin' }}>Crowd-Pleasers</h1>
                    <p>Made by us.Loved by you.</p>

                    <div>SHOP BEST-SELLERS</div>
                </div>
                <p style={{ position: 'absolute', bottom: '10%', left: '5%', color: 'white' }}>Sign Up for 10% off your first order*</p>
            </div>

            <div className='container-fluid container-child' >
                <div className=" col-sm-4">
                    <img src='https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9wcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80'></img>

                    <div className='content'>
                        <h4>Let The BreeZe In</h4>
                        The Japanese GoWeave Light Square Shirt--<br></br>now in two fresh hues for spring.
                    </div>


                </div>
                <div className="col-sm-4">
                    <img src='https://media.istockphoto.com/photos/young-women-with-shopping-bags-standing-on-the-street-picture-id1148923865?k=20&m=1148923865&s=612x612&w=0&h=ZHYJouMQbc2IBY-Drk7y-cMd3zvSAKGHywj8ny-KBqU='></img>

                    <div className='content'>
                        <h4>The Curvy '90s Cheeky Jean</h4>
                        Out favorite throwback jean-- <br></br> minus the waist gap.
                    </div>

                </div>
                <div className="col-sm-4">
                    <img src='https://media.istockphoto.com/photos/modern-young-man-enjoying-in-shopping-consumerism-lifestyle-concept-picture-id1170183686?k=20&m=1170183686&s=612x612&w=0&h=hrHZY9SqNxy54Tb1q31dkSBN6e4cDHXk8OOscd3Jejw='></img>
                    <div className='content'>
                        <h4>Introducing Track</h4>
                        A collection of premium organic pieces--<br></br>made for the track ahead.
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
import React from "react";
import Footer from "../Layout_Footer/Footer";
import Nav from "../Nav/Nav";
import '../style/Signup.css';

function SignUp(props) {
    return (
        <>
            <Nav />
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4 p-md-5">
                                    <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Sign Up</h2>
                                    <form>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" for="firstName">First Name</label>
                                                    <input type="text" id="firstName" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" for="lastName">Last Name</label>
                                                    <input type="text" id="lastName" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">

                                                <div className="form-outline datepicker w-100">
                                                    <label for="birthdayDate" className="form-label">Birthday</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        id="birthdayDate"
                                                    />

                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <h6 class="mb-2 pb-1">Gender: </h6>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="femaleGender"
                                                        value="option1"
                                                        checked
                                                    />
                                                    <label className="form-check-label" for="femaleGender">Female</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="maleGender"
                                                        value="option2"
                                                    />
                                                    <label className="form-check-label" for="maleGender">Male</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" for="emailAddress">Email</label>
                                                    <input type="email" id="emailAddress" className="form-control form-control-lg" />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" for="phoneNumber">Phone Number</label>
                                                    <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="mt-4 pt-2 d-flex justify-content-center">
                                            <button type="button" class="btn btn-primary btn-lg">REGISTER</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
}

export default SignUp;
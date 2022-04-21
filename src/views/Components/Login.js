import React from 'react';
import Footer from '../Layout_Footer/Footer';
import Nav from '../Nav/Nav';
import '../style/Login.css';

function Login() {
    return (
        <>
            <Nav />
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4 p-md-5">
                                    <form>
                                        <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">LOGIN</h2>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form1Example13">Email address</label>
                                            <input type="email" id="form1Example13" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form1Example23">Password</label>
                                            <input type="password" id="form1Example23" className="form-control form-control-lg" />
                                        </div>

                                        <div className="d-flex justify-content-around align-items-center mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                                <label className="form-check-label" for="form1Example3"> Remember me </label>
                                            </div>
                                            <a href="#!">Forgot password?</a>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                                        <div className="divider d-flex align-items-center my-4">
                                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                        </div>

                                        <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#3b5998' }} href="#!"
                                            role="button">
                                            <i className="fa fa-facebook-f me-2"></i>Continue with Facebook
                                        </a>
                                        <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#55acee' }} href="#!"
                                            role="button">
                                            <i className="fa fa-twitter me-2"></i>Continue with Twitter</a>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Login;
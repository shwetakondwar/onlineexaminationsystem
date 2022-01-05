import React from 'react'
import { Link } from 'react-router-dom'
import '../css/start.css'
import logo1 from '../images/teachericon.png';
import logo2 from '../images/studenticon.png';
import logo3 from '../images/imag10.jpg';
const Start = () => {
    return (
        <>
            <div className="abcd5">


                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Online Examination System</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-primary" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item active" style={{ color: "blue" }} >
                                <Link className="nav-link text-primary" to="/faq">FAQ</Link>
                            </li>

                        </ul>

                    </div>
                </nav>
                <div style={{ textAlign: "centre" }}>
                    <img src={logo3} class="img-fluid" alt="" />


                    <div className="Container3">
                        <p style={{ textAlign: "center",fontSize:"16px" }}><h3><b> Choose your Preferred role</b></h3> </p>
                        <div class="shweta">

                            <div class="col-sm-2.5">

                                <div class="shadow p-3 mb-5 bg-body rounded">
                                    <div class="card  border-dark" style={{ width: "17rem" }}>
                                        <div class="card-body">
                                            <img src={logo1} class="card-img-top" alt="" />
                                            <h3 class="card-title"><b>Teacher</b></h3>
                                            <p class="card-text"></p>
                                            <Link to="/teacherlogin" class="btn btn-primary " role="button" aria-pressed="true"  >Login/Signup</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2.5">
                                <div class="shadow p-3 mb-5 bg-body rounded">
                                    <div class="card border-dark" style={{ width: "17rem" }}>
                                        <div class="card-body">
                                            <img src={logo2} class="card-img-top" alt="" />
                                            <h3 class="card-title"><b>Student</b></h3>
                                            <p class="card-text"></p>
                                            <Link to="/login" class="btn btn-primary " role="button" aria-pressed="true"  >Login</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="div12 div121">
                <img className="inimg" src={logo1} alt= ""/>
                <p style={{fontSize: "45px" }}>Teacher</p>
                <a className="innerlink" href="http://">Login</a>
            </div>
            <div className="div13 div123" >
                <img className="inimg"  src={logo2} alt= ""/>
                <p style={{fontSize: "45px" }}>Student</p>
                <a style={{fontSize: "45px" }} className="innerlink" href="http://">Login</a>

            </div> */}

                    </div>
                </div>
            </div>
        </>

    )
}

export default Start

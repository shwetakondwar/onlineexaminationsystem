import React from 'react'
import '../css/main.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axiosInstance from '../Axios';
import { Link } from 'react-router-dom'
const Login = (props) => {
    const history = useNavigate();
    const [formData, updateFormData] = useState({ email: "ded", password: "23345" });

    const handleChange = (e) => {

        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);

        const loginandgetdata = async () => {
            try {
                const resp = await axiosInstance.post('token/', {
                    email: formData.email,
                    password: formData.password
                });
                localStorage.setItem('access_token', resp.data.access);
				localStorage.setItem('refresh_token', resp.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
                props.showalert("logged in successfully", "success");
                history('/studenthomepage', {
                    state: {
                        email: resp.data.email,
                        stream: resp.data.stream, year: resp.data.year, id: resp.data.id, user_name: resp.data.user_name,reloadloca:false
                    }
                });
            } catch (err) {
                props.showalert("please enter valid credentials", "danger");
                // Handle Error Here
                // console.error(err);
                console.log("some error occured");
            }
        }
        loginandgetdata();

    };


    return (
        <>
            {/* <div className='abcd1'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Student Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/teacherlogin">Teacher Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/teachersignup">Teacher Signup</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
                <div className='anmol'>
                <div className="container sm my-3">

                    <div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" onChange={handleChange} aria-describedby="emailHelp" name="email" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} name="password" placeholder="Password" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link to='/forgpassemail' className='mx-5' aria-pressed="true">Forgot Password</Link>
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div> */}




            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/teacherlogin">HOME</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='abcd1'>
            <div className="container my-3">

                <div>

                    <form>
                        <div className="form-group">
                            <label style={{ fontSize: "30px", color: "black" }} htmlFor="exampleInputEmail1">Email</label>
                            <input style={{ border: '2px solid black' }} name="email" type="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label style={{ fontSize: "30px", color: "black" }} htmlFor="exampleInputPassword1">Password</label>
                            <input style={{ border: '2px solid black' }} name="password" type="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                            <input style={{ fontSize: "20px", color: "black" }}  onChange={handleChange} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn ">Login</button>
                        <Link to='/forgpassemail' className='mx-5' aria-pressed="true">Forgot Password</Link>
                    </form>
                </div>
                <div>


                    {/* <b><h3>Requirements for online examination:</h3></b><br></br> */}
                    {/* <h5>1. Android phone, desktop, laptop (Windows/Linux/Mac) with working front camera as webcam.</h5><br></br> */}
                    {/* <h5>2. Please use an updated version of Google Chrome or Mozilla Firefox only.</h5><br></br> */}
                    {/* <h5>3. Please ensure a reliable internet connection.</h5><br></br>
                    <h5>4. Please ensure your mobile or laptop is fully charged.</h5><br></br> */}
                    {/* <h5>5. Please keep required stationery handy with you (pencil, pen, rough sheet etc.)</h5><br></br> */}
                </div>
                </div>
            </div>
        </>
    )
}

export default Login

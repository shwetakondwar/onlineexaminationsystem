import React from 'react'
import '../css/main.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
const TeacherSignup = (props) => {
    const history = useNavigate();
    const [formData, updateFormData] = useState({ name: "", email: "", collegecode: "", password: "", });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        function ValidateEmail(mail) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                return (true)
            }
            props.showalert("You have entered an invalid email address!","danger")
            return (false)
        }
        if (formData.password.length >= 0 && formData.collegecode === "11111111" && formData.name.length >= 3 && ValidateEmail(formData.email)){
            const signupdata = async () => {
                const was=await fetch('http://127.0.0.1:8000/auth/create/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: formData.name,
                        first_name:formData.name,
                        email: formData.email,
                        password: formData.password,
                        about: formData.collegecode,
                        is_staff:true ,
                        is_active:true
                    })
                })
                props.showalert("signup success","success");
                history('/teacherlogin');
            }
            signupdata();
        }
        

    };


    return (
        <>
            <div className='abcd1'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/teacherlogin">Teacher Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='anmol'>
                    <div className="container sm my-3">

                        <div style={{color:"black"}}>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"><h4>Name</h4></label>
                                    <input style={{ border: '2px solid black' }} type="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp" name="name" placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"><h4>College Code</h4></label>
                                    <input style={{ border: '2px solid black' }} type="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp" name="collegecode" placeholder="Enter CollegeCode" />
                                    <small id="emailHelp" className="form-text text-muted">If you don't have college code, then contact with your respective exam co-ordinator</small>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"><h4>Email Address</h4></label>
                                    <input style={{ border: '2px solid black' }} type="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp" name="email" placeholder="Enter email" />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"><h4>Password</h4></label>
                                    <input style={{ border: '2px solid black' }} type="password" className="form-control" onChange={handleChange} name="password" placeholder="Password" />
                                    <small id="emailHelp" className="form-text text-muted">Password Must be Atleast 8 Letters Long</small>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="submit" onClick={handleSubmit} className="btn btn-primary btn- ">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherSignup

import React from 'react'
import '../css/main.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
const Contact = (props) => {
    const [formData, updateFormData] = useState({ email:"", name:"",contact:"",feedback:"" });

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
            props.showalert("You have entered an invalid email address!", "danger")
            return (false)
        }
        function ValidateLength(feed) {
            if (feed.length>1) {
                return (true)
            }
            props.showalert("feebackl field should not be empty!", "danger")
            return (false)
        }
        if (ValidateLength(formData.name) && ValidateEmail(formData.email)) {
            console.log(formData)
            const signupdata = async () => {
                const was = await fetch('http://127.0.0.1:8000/auth/feedback/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        contact:formData.contact,
                        feedback:formData.feedback
                        
                    })
                    // body: JSON.stringify(formData)
                    
                })
                props.showalert("Feedback submitted successfully", "success");  
                updateFormData({ email:"", name:"",contact:"",feedback:"" });  
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
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='anmol'>
                <div className="container sm my-3" style={{color:"black"}}>

                    <div>
                        <form>
                        <h2 className='form-group'>Contact us </h2>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><h5>Name</h5> </label>
                                <input style={{ border: '2px solid black' }} className="form-control"  onChange={handleChange} aria-describedby="emailHelp" value={formData.name} name="name" placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <label><h5>Email</h5></label>
                                <input style={{ border: '2px solid black' }} type="email" className="form-control"  onChange={handleChange} aria-describedby="emailHelp" value={formData.email} name="email" placeholder="Enter email" />
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htm><h5>Contact No</h5></label>
                                <input style={{ border: '2px solid black' }}type="number" className="form-control" onChange={handleChange} name="contact" value={formData.contact} placeholder="enter contact no here" />
                            </div>
                            <div className="form-group">
                                <label ><h5>Feedback/Query</h5></label>
                                <input style={{ border: '2px solid black' }} type="email" className="form-control"  onChange={handleChange} aria-describedby="emailHelp" value={formData.feedback} name="feedback" placeholder="Enter Feedback Here" />
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

export default Contact


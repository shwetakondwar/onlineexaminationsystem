import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import StudentListDiv from './StudentListDiv';
const StudentsList = (props) => {
    const { state } = useLocation();
    const { email, id, user_name } = state;
    const [load, setload] = useState(false);
    const [data, setdata] = useState([])
    useEffect(() => {
        async function fetchList() {
            let response = await fetch('http://127.0.0.1:8000/teacher/studentlistadded/' + email)
            let data = await response.json();
            setdata(data);
            console.log(data);
            setload(true);
        }
        fetchList();
    }, [email,load])

    const [formData, updateFormData] = useState({ name: "", email: "", password: "", year: "", stream: "", rollno: "" });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    };

    const handleSubmit = (e) => {
        console.log("in call");
        console.log(formData);
        e.preventDefault();
        function ValidateEmail(mail) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                return (true)
            }
            props.showalert("You have entered an invalid email address!", "danger")
            return (false)
        }
        if (formData.password.length >= 8 && formData.name.length >= 3 && ValidateEmail(formData.email)) {
            const signupdata = async () => {
                const was = await fetch('http://127.0.0.1:8000/auth/create/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: formData.rollno,
                        first_name: formData.name,
                        email: formData.email,
                        password: formData.password,
                        year: formData.year,
                        stream: formData.stream,
                        is_active: true,
                        rel_key:email
                    })
                })
                props.showalert("student added successfully", "success");
                setload(false);
                setload(true);
              
            }
            signupdata();
        }


    };
    return (

        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link className="nav-link" to="/teacherhomepage" state={{email:email,id:id,user_name:user_name}}>Home</Link>
                    <Link className="nav-link mx-10" to="/addexam" state={{email:email,id:id,user_name:user_name}}>Host Exam</Link>
                </nav>
            </div>
            <div className='abcd1'>
            <div className="container">
                <p><h3>Add User</h3></p>
                <form>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label ><h5>name</h5></label>
                            <input style={{ border: '2px solid black' }} type="text" className="form-control is-valid" name="name" id="name" onChange={handleChange} placeholder="Name" required />

                        </div>

                        <div className="col-md-4 mb-3">
                            <label ><h5>Email</h5></label>
                            <input style={{ border: '2px solid black' }} type="email" className="form-control is-valid" name="email" id="Email" onChange={handleChange} placeholder="Email" required />

                        </div>
                        <div className="col-md-4 mb-3">
                            <label ><h5>Password</h5></label>
                            <input style={{ border: '2px solid black' }} type="password" className="form-control is-valid" name="password" id="Password" onChange={handleChange} placeholder="Password" required />

                        </div>
                    </div>
                    <div className="form-row">

                        <div className="col-md-4 mb-3">
                            <select style={{ border: '2px solid black' }} defaultValue={'DEFAULT'} className="custom-select custom-select " name="year" id="year" onChange={handleChange}>
                                <option value="DEFAULT" disabled>Year</option>

                                <option value="FE">FE</option>
                                <option value="SE">SE</option>
                                <option value="TE">TE</option>
                                <option value="BE">BE</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <select style={{ border: '2px solid black' }} defaultValue={'DEFAULT'} className="custom-select custom-select " name="stream" id="Stream" onChange={handleChange}>
                                <option value="DEFAULT" disabled>Stream</option>

                                <option value="Computer">Computer</option>
                                <option value="Mechanical">Mechanical</option>
                                <option value="Civil">Civil</option>
                                <option value="IT">IT</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Printing">Printing</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label ><h5>Roll Number </h5></label>

                            <input style={{ border: '2px solid black' }} className="mx-3 col-lg-5 is-valid" name="rollno" id="roll_no" onChange={handleChange} placeholder="" required />

                        </div>
                    </div>

                    <button className="btn btn-primary btn " onClick={handleSubmit} type="submit">Submit form</button>
                </form>
                <p className="my-3"><h3>Student List :</h3></p>
                <div className="row my-3">
                    <div className="col-sm-3">
                        <label className="visually-hidden"><h4>Name</h4></label>

                    </div>
                    <div className="col-sm-4">
                        <label className="visually-hidden"><h4>Email</h4></label>

                    </div>
                    <div className="col-sm-2">
                        <label className="visually-hidden"><h4>Year</h4></label>

                    </div>
                    <div className="col-sm-2">
                        <label className="visually-hidden"><h4>Stream</h4></label>

                    </div>
                </div>
                {

                    load ? data.map((element) => (
                        <StudentListDiv key={element.id} setload={setload} showalert={props.showalert}  element={element} />
                    )
                    )

                        : <p></p>
                }
            </div>
            </div>
        </>
    )
}

export default StudentsList

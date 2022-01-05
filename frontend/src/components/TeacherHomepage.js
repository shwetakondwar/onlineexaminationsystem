import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ExamDetails from './ExamDetails';
import PastExamDetails from './PastExamDetails';
const TeacherHomepage = (props) => {
    const { state } = useLocation();
    const { email,id, user_name} = state;
    const [load, setload] = useState(false);
    const [data, setdata] = useState([]);
    const [data1, setdata1] = useState([]);
    console.log(id);
    useEffect(() => {
        async function fetchteacherexam() {
            
            let response = await fetch('http://127.0.0.1:8000/teacher/examdetails/' +id)
            let response1 = await fetch('http://127.0.0.1:8000/teacher/examdetailspast/' +id)
            let data = await response.json();
            let data1 = await response1.json();
            setdata(data);
            setdata1(data1);
            setload(true);
        }
        fetchteacherexam();
    }, [id])
    return (
        <>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link className="nav-link-active" to="/">Home</Link>

                    <Link className="nav-link mx-10" to="/studentlist" state={{email:email,id:id,user_name:user_name}} >Students List</Link>
                    <Link className="nav-link mx-10" to="/addexam " state={{email:email,id:id,user_name:user_name}}>Host Exam</Link>
                    <Link className="nav-link" to="/adminrequests" state={{email:email}}>Request</Link>
                    <Link className="nav-link" to="/">Logout</Link>
                </nav>
            </div>
            <div className='abcd1'>
            <div className="container my-3">
                <p><h4>Upcoming Exams</h4></p>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="staticEmail2" className="visually-hidden"><h5>Subject</h5></label>

                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="inputPassword2" className="visually-hidden"><h5>Year & Branch</h5></label>

                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="inputPassword2" className="visually-hidden"><h5>Date & Start Time </h5></label>

                    </div>
                    
                </div>
                <hr />
                {
                        (load && data.length>0)  ? data.map((element) => (
                            <ExamDetails key={element.id} email={email} setload={setload} showalert={props.showalert} element={element} />
                            )
                            )
                            : <p></p>
                        }
                
            </div>
            <hr />
            <div className="container my-3">
                <p><h4>Past Exams</h4></p>
                <div className="row">
                    <div className="col-sm-3">
                        <label htmlFor="staticEmail2" className="visually-hidden"><h5>Subject</h5></label>

                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="inputPassword2" className="visually-hidden"><h5>Year & Branch</h5></label>

                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="inputPassword2" className="visually-hidden"><h5>Date & Start Time</h5></label>

                    </div>
                </div>
                <hr />
                {
                        (load && data1.length>0)  ? data1.map((element1) => (
                            <PastExamDetails key={element1.id} setload={setload} showalert={props.showalert} element={element1} />
                            )
                            )
                            : <p></p>
                        }
                </div>
            </div>
        </>
    )
}

export default TeacherHomepage

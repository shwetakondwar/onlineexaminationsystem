import React from 'react'
import axiosInstance from '../Axios';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { Upcomingdiv } from './Upcomingdiv';
import Attempteddiv from './Attempteddiv';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Studenthomepage = (props) => {
    const history = useNavigate();
    const [data, setdata] = useState(null)
    const [data1, setdata1] = useState(null)
    const { state } = useLocation();
    const { email, year, stream, id, user_name } = state;
    console.log(stream);
    var { reloadloca } = state;
    const passobj = {
        email: email,
        year: year,
        stream: stream,
        id: id,
        user_name: user_name
    }
    const [load, setload] = useState(false);
    useEffect(() => {
        async function fetchExamUpcoming() {

            let response = await fetch('http://127.0.0.1:8000/student/upcomingexams/' + year + '/' + stream);
            let response1 = await fetch('http://127.0.0.1:8000/student/attempteddetails/' + id);
            let data = await response.json();
            let data1 = await response1.json();
            console.log(data);
            setdata1(data1);
            setdata(data);
            setload(true);
        }
        fetchExamUpcoming();
    }, [load, stream, year, id])
    const handleSubmit = async (e) => {

        try {
            const abcd = await axiosInstance.post('logout/blacklist/', {
                refresh_token: localStorage.getItem('refresh_token'),
            });
            console.log(abcd);
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            props.showalert("logged out successfully", "danger");
            history('/');
        } catch (error) {
            console.log(error);
        }
    }
    if (reloadloca === true) {
        setTimeout(() => {
            window.open("http://localhost:3000/", "_self");
        }, 10000);

    }
    return (

        <>

            <div className="abcd1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active"> <p>{user_name}</p>
                            </li> */}
                            <li className="nav-item active">
                                <Link className="nav-link" state={{ student_id: id}} to="/results"><h6>Results</h6></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" state={{ student_id: id}} to="/profile"><h6>Profile</h6></Link>
                            </li>
                        </ul>


                    </div>
                    <button className="btn btn-outline-success" onClick={handleSubmit} type="submit">Logout</button>
                </nav>
                <div className="container">
                    <div>
                        <p className="my-3"><b><h3>Exam:</h3></b></p>

                        <div class="form-row">
                            <div class="col-md-3 mb-3">
                                <label for="validationServer01"><h5>Subject</h5> </label>

                            </div>

                            <div class="col-md-2 mb-2">
                                <label for="validationServer02"><h5>Duration</h5></label>


                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="validationServer02"><h5> Marks</h5> </label>
                            </div>
                            <div class="col-md-2 mb-2">
                                <label for="validationServer02"> <h5>Date</h5></label>
                            </div>

                        </div>
                        {

                            load ? data.map((element) => (
                                <Upcomingdiv id={id} key={element.id} passobj={passobj} element={element} />

                            )
                            )

                                : <p>ugu</p>
                        }
                    </div>
                    <div>
                        <p className="my-3"><b><h3>Attempted Exams :</h3></b></p>

                        <div class="form-row">
                            <div class="col-md-3 mb-3">
                                <label for="validationServer01"><h5>Subject</h5></label>

                            </div>
                            <div class="col-md-2 mb-2">
                                <label for="validationServer02"> <h5>Date</h5> </label>
                            </div>
                            <div class="col-md-2 mb-2">
                                <label for="validationServer02"><h5> Total Time</h5> </label>
                            </div>
                            {/* <div class="col-md-2 mb-2">
                                <label for="validationServer02"> Name Of Teacher </label>
                            </div> */}

                        </div>
                        {

                            (load && (data1.length > 0)) ? data1.map((element1) => (
                                < Attempteddiv key={element1.id} element1={element1} />

                            )
                            ) : <p></p>

                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Studenthomepage

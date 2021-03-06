import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addexam = (props) => {
    const history=useNavigate();
    const { state } = useLocation();
    const { email, id, user_name } = state;
    console.log(email);
    const [formData, updateFormData] = useState({ subname: "", hoster: id, year: "", stream: "", date: "", starttime: "", endtime: "" });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const addexam = async () => {
            const was = await fetch('http://127.0.0.1:8000/teacher/examhostdata/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subname:formData.subname ,
                    hoster:formData.hoster ,
                    stream:formData.stream,
                    date:formData.date ,
                    year:formData.year,
                    starttime:formData.starttime ,
                    endtime:formData.endtime ,
                })
            })
            let ds=await was.json();
            props.showalert("exam hosted successfully","success");
            const examid=ds.id;
            history('/questions', {
                state: {
                    examid:examid
                }
            });
            
        }
        addexam();
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="nav-link" to="/teacherhomepage" state={{ email: email, id: id, user_name: user_name }}>
                    Home
                </Link>
            </nav>
            <div className='abcd1'>
            <div className="container">
                <form>
                    <div className="form-row my-3">
                        <div className="col-md-4 mb-4">
                            <label htmlFor="appt"><h5>Subject Name </h5></label>
                            <input style={{ border: '2px solid black' }}

                                className="mx-3 col-lg-5"
                                onChange={handleChange}
                                type="text"
                                id="appttext"
                                name="subname"
                            />
                        </div>
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
                            <select style={{ border: '2px solid black' }}  defaultValue={'DEFAULT'} className="custom-select custom-select " name="stream" id="stream" onChange={handleChange}>
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
                    </div>

                    <div className="form-row my-3">
                        <div className="col-md-4 mb-4">
                            <label htmlFor="appt"><h5>Start Time </h5></label>
                            <input style={{ border: '2px solid black' }} className="mx-3" onChange={handleChange} type="time"  name="starttime" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <label htmlFor="appt"><h5>End Time</h5> </label>
                            <input style={{ border: '2px solid black' }} className="mx-3" onChange={handleChange} type="time"  name="endtime" />
                        </div>

                        <div className="col-md-4 mb-4">
                            <label htmlFor="appt"><h5>Date: </h5></label>
                            <input style={{ border: '2px solid black' }} className="mx-3" type="date" onChange={handleChange}  name="date" />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="btn btn-primary my-3 " type="submit">
                        Add Exam
                    </button>
                </form>
                </div>
            </div>
        </>
    );
};

export default Addexam;

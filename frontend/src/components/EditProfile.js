import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const EditProfile = (props) => {
    const { state } = useLocation();
    const { student_id } = state;
    const [formData, updateFormData] = useState({ first_name: "", email: "", year: "", stream: "", user_name: "", rel_key: "" });
    // year// stream// email// user_name// first_name  // is_active//rel_key
    useEffect(() => {
        async function fetchProfile() {

            let response = await fetch('http://127.0.0.1:8000/auth/userdetails/' + student_id);
            let data = await response.json();
            updateFormData(data);
            console.log(formData.user_name);
        }
        fetchProfile();
    }, [student_id])
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    };
    const handleEdit = (e) => {
        e.preventDefault();
        document.getElementById("request").classList.remove("invisible");
        document.getElementById("cancel").classList.remove("invisible");
        document.getElementById("editab").classList.add("disabled");
        var x = document.querySelectorAll(".editables");
        for (var i = 0; i < x.length; i++) {
            x[i].readOnly = false;
        }
    }
    const handleCancel = (e) => {
        e.preventDefault();
        document.getElementById("request").classList.add("invisible");
        document.getElementById("cancel").classList.add("invisible");
        document.getElementById("editab").classList.remove("disabled");
        var x = document.querySelectorAll(".editables");
        for (var i = 0; i < x.length; i++) {
            x[i].readOnly = true;
        }
    }
    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        if (formData.first_name.length >= 3) {
            const updatedata = async () => {
                try {
                    console.log(student_id);
                    const was = await fetch('http://127.0.0.1:8000/auth/updaterequest/', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            student_id: student_id,
                            user_name: formData.user_name,
                            first_name: formData.first_name,
                            email: formData.email,
                            year: formData.year,
                            stream: formData.stream,
                            rel_key: formData.rel_key
                        })
                    })
                    console.log(formData);
                    props.showalert("Note ! changes will reflect only after admin approval", "success");
                    document.getElementById("request").classList.add("invisible");
                    document.getElementById("cancel").classList.add("invisible");
                    document.getElementById("editab").classList.remove("disabled");
                    var x = document.querySelectorAll(".editables");
                    for (var i = 0; i < x.length; i++) {
                        x[i].readOnly = true;
                    }
                } catch (error) {

                }

            }
            updatedata();
        }


    };
    return (
        <div className='abcd1'>
        <div className='container my-5'>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1"><h4>Name</h4></label>
                    <input style={{ border: '2px solid black' }} class="form-control editables" value={formData.first_name} readOnly={true} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name='first_name' placeholder="Enter Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1"><h4>Email</h4></label>
                    <input style={{ border: '2px solid black' }} class="form-control" value={formData.email} readOnly={true} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name='email' placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <div className="form-row">


                        <div className="col-md-4 mb-3">
                            <select style={{ border: '2px solid black' }} value={formData.year} onChange={handleChange} readOnly={true} className="custom-select custom-select-sm editables" name="year" id="year" onChange={handleChange}>
                                <option value="FE">FE</option>
                                <option value="SE">SE</option>
                                <option value="TE">TE</option>
                                <option value="BE">BE</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <select style={{ border: '2px solid black' }} onChange={handleChange} value={formData.stream} readOnly={true} className="custom-select custom-select-sm editables" name="stream" id="stream" onChange={handleChange}>
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
                    


                </div>
                <div class="form-group">
                    


                        
                        
                    
                    <div class="form-group">
                        <div className="col-md-2 mb-2">
                            <h4 style={{ fontSize: "22px", color: "black" }} > Seat No:</h4>


                        </div>
                        <div className="col-md-1 mb-1">

                            <input style={{ border: '2px solid black' }} onChange={handleChange} readOnly={true} className="editables" name="user_name" id="roll_no" onChange={handleChange} value={formData.user_name} />

                        </div>


                    </div>



                </div>  
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div class="form-group">
                    <div className="form-row">
                        <button type="submit" id="editab" onClick={handleEdit} class="btn btn-primary btn ">Edit</button>
                        <button type="submit" id='cancel' onClick={handleCancel} class="btn btn-primary mx-5 invisible">Cancel</button>
                        <button type="submit" id='request' onClick={handleSubmit} class="btn btn-primary mx-5 invisible">Send Request</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default EditProfile

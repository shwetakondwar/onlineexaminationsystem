import React from 'react'
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/main.css'
import { useNavigate } from 'react-router-dom';
import ResultDivForStudent from './ResultDivForStudent';
const Results = (props) => {
    const [data, setdata] = useState(null)
    const { state } = useLocation();
    const {student_id} = state;
    const [load, setload] = useState(false);
    useEffect(() => {
        async function fetchResults() {

            let response = await fetch('http://127.0.0.1:8000/student/results/' + student_id);
            let data = await response.json();
            setdata(data);
            setload(true);
        }
        fetchResults();
    }, [student_id])
   
    return (

        <>

            <div className="abcd1">
                <div className="container">
                    <div>
                        <p className=""><b><h3>Results :</h3></b></p>

                        <div class="form-row">
                            <div class="col-md-3 mb-3">
                                <label for="validationServer01"><h4>Subject</h4></label>

                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="validationServer02"><h4>Exam Date</h4> </label>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="validationServer02"> <h4>Obtained Marks </h4></label>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="validationServer02"><h4>Remark</h4></label>
                            </div>
                            

                        </div>
                        {

                            (load && (data.length > 0)) ? data.map((element1) => (
                                < ResultDivForStudent key={element1.id} element={element1} />

                            )
                            ) : <p></p>

                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Results

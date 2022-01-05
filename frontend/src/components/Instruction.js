import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Instruction = () => {
    const location = useLocation();
    const { userid, examid, minutes, starttime, endtime, passobj,totalmarks,subname} = location.state;
    console.log(userid, examid, minutes, starttime, endtime, passobj,totalmarks,subname);

    let strthrs = parseInt(starttime.slice(0, 2));
    let strtmns = parseInt(starttime.slice(3, 5));
    let endhrs = parseInt(endtime.slice(0, 2));
    let endmn = parseInt(endtime.slice(3, 5));
    let lmn = new Date();
    let nowhr = lmn.getHours();
    let nowmn = lmn.getMinutes();
    if (endhrs - nowhr < 0) {
        console.log("");
    }
    else if (endhrs - nowhr === 0 && endmn - nowmn < 0) {
        console.log("");
    }
    else {
        const myvar = setInterval(function () {
            let now = new Date();
            let nowhrs = now.getHours();
            let nowmns = now.getMinutes();
            if (nowhrs - strthrs > 0) {
                try {
                    document.getElementById("tfbtn").classList.remove("disabled");
                    clearInterval(myvar);
                } catch (error) {
                    console.log("")
                }
            }
            else if (nowhrs - strthrs === 0 && nowmns - strtmns >= 0) {

                try {
                    document.getElementById("tfbtn").classList.remove("disabled");
                    clearInterval(myvar);
                } catch (error) {
                    console.log("")
                }
            }
        }, 5000);
    }
    return (
        <div className='abcd1'>
        <div className='container'>
            
             <p className='my-3' > Start Time: <strong>{starttime}</strong></p> 
             <p className='my-3' > End Time : <strong>{endtime}</strong></p> 
            <div className='my-3'>
                <div className='my-3'>
                <h3>Requirements for online examination:</h3>
                </div>
                <ul className="list-group mx-2">
                    <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center">
                    1. Android phone, desktop, laptop (Windows/Linux/Mac) with working front camera as webcam.
                        <span className="badge badge-primary badge-pill"></span>
                    </li>
                    <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center">
                    2. Please use an updated version of Google Chrome or Mozilla Firefox only.
                        <span className="badge badge-primary badge-pill"></span>
                    </li>
                    <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center">
                    3. Please ensure a reliable internet connection.
                        <span className="badge badge-primary badge-pill"></span>
                    </li>
                    <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center">
                    4. Please ensure your mobile or laptop is fully charged.
                        <span className="badge badge-primary badge-pill"></span>
                    </li>
                    {/* <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center"> */}
                    {/* 5. Please keep required stationery handy with you (pencil, pen, rough sheet etc.) */}
                        {/* <span className="badge badge-primary badge-pill"></span> */}
                    {/* </li> */}
                </ul>
            </div>
            <br />
            <div className='my-3'>
                <div className='my-3'>
                <h3>Read the following instructions carefully: </h3>
                </div>
                <ul className="list-group mx-2">
                    <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center">
                    1. The test comprises multiple-choice-questions(MCQs).
                        <span className="badge badge-primary badge-pill"></span>
                    </li>
                    <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center">
                    2. To save your answer, you must click on 'Save & Next'.
                        <span className="badge badge-primary badge-pill"></span>
                    </li>
                    <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center">
                    3. Yo can not visit previous question.
                        <span className="badge badge-primary badge-pill"></span>
                    </li>
                    <li style={{ fontSize: "18px", color: "black" }} className="list-group-item d-flex justify-content-between align-items-center">
                    4. You ae advised not to close the browser window before submitting the test.
                        <span className="badge badge-primary badge-pill"></span>
                    </li>
                    
                </ul>
            </div>
            <br />
            <Link to="/exampage" state={{ userid: userid, examid: examid, minutes: minutes, passobj: passobj,totalmarks:totalmarks,subname:subname }} className="btn btn-primary centre center btn-sm-2 btn-lg-2 active disabled" id="tfbtn" role="button" aria-pressed="true">Start</Link>

        </div>
        </div>
    )
}

export default Instruction

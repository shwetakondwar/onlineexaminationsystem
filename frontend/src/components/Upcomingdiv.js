import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
export const Upcomingdiv = (props) => {
    const id = props.id;
    useEffect(() => {
        async function check() {
            let response = await fetch('http://127.0.0.1:8000/student/checking/' + id + '/' + props.element.id);
            if (response.status === 400) {
                try {
                    document.getElementById("yesorno" + props.element.id).classList.add("disabled");
                    document.getElementById("yesorno" + props.element.id).innerHTML = "Attempted";
                } catch (error) {

                }
            }
        }
        check();
    }, [id, props.element.id]);
    return (
        <div>
            
            <div class="form-row">
                <div class="col-md-3 mb-3">
                    <label style={{ fontSize: "22px", color: "black" }} for="validationServer01">{props.element.subname}</label>

                </div>

                <div class="col-md-2 mb-2">
                    <label  style={{ fontSize: "22px", color: "black" }} for="validationServer02">{props.element.examtotaltime}</label>


                </div>
                <div class="col-md-3 mb-3">
                    <label style={{ fontSize: "22px", color: "black" }}  for="validationServer02"> {props.element.totalmarks} </label>
                </div>
                <div class="col-md-2 mb-2">
                    <label style={{ fontSize: "22px", color: "black" }} for="validationServer02"> {props.element.date} </label>
                </div>
                <div className="col-md-2 mb-2">
                    <Link to="/instruction" state={{ userid: id, examid: props.element.id, minutes: props.element.examtotaltime, starttime: props.element.starttime, endtime: props.element.endtime, passobj: props.passobj, totalmarks: props.element.totalmarks, subname: props.element.subname }} className="btn btn-primary btn-sm-2 btn-lg-2 active" id={"yesorno" + props.element.id} role="button" aria-pressed="true">Attempt</Link>
                </div>

            </div>
        </div>
    )
}

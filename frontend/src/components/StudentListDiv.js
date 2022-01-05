import React from 'react'
import { useState } from 'react';
const StudentListDiv = (props) => {
    const [deleteload, setdeleteload] = useState(false);
    const handleSubmit = (e) => {
        
        const deletedtudent = async () => {
            const was = await fetch('http://127.0.0.1:8000/teacher/deletestudent/' + props.element.id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            props.showalert("student deleted successfully", "success");
            setdeleteload(true);
            props.setload(false);
            props.setload(true);
        }
        if (window.confirm("After deleting student won't be able to give any examinations")) {
            deletedtudent();
        } else {

        }
    }
    return (
        <div className="row my-3">
            <div className="col-sm-3">
                <label style={{ fontSize: "22px", color: "black" }} className="visually-hidden">{props.element.first_name}</label>

            </div>
            <div className="col-sm-4">
                <label style={{ fontSize: "22px", color: "black" }} className="visually-hidden">{props.element.email}</label>

            </div>
            <div className="col-sm-2">
                <label style={{ fontSize: "22px", color: "black" }} className="visually-hidden">{props.element.year}</label>

            </div>
            <div className="col-sm-2">
                <label style={{ fontSize: "22px", color: "black" }} className="visually-hidden">{props.element.stream}</label>

            </div>
            <div className="col-sm-1">
                <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-3">Delete</button>
            </div>
        </div>
    )
}

export default StudentListDiv

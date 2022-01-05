import React from 'react'

const ResultDivForStudent = (props) => {
    return (
        <div>
            <div className="row my-3">
                <div className="col-sm-3">
                    <label style={{ fontSize: "22px", color: "black" }} htmlFor="staticEmail2" className="visually-hidden">{props.element.name}</label>
                </div>
                <div className="col-sm-3">
                    <label style={{ fontSize: "22px", color: "black" }} htmlFor="staticEmail2" className="visually-hidden">{props.element.date}</label>
                </div>
                <div className="col-sm-3">
                    <label style={{ fontSize: "22px", color: "black" }} htmlFor="staticEmail2" className="visually-hidden">{props.element.obtained_marks}</label>

                </div>

                <div className="col-sm-3">
                    <button type="submit" className="btn btn-primary disabled">{props.element.result}</button>
                </div>

                <hr />
            </div>
        </div>
    )
}

export default ResultDivForStudent

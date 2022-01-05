import React from 'react'
const Attempteddiv = (props) => {
    return (
        <div>
            <div class="form-row">
                <div class="col-md-3 mb-3">
                    <label style={{ fontSize: "22px", color: "black" }} for="validationServer01">{props.element1.name}</label>

                </div>
                <div class="col-md-2 mb-2">
                    <label style={{ fontSize: "22px", color: "black" }} for="validationServer02">{props.element1.date}</label>
                </div>
                <div class="col-md-2 mb-2">
                    <label style={{ fontSize: "22px", color: "black" }}  for="validationServer02">{props.element1.totaltime}</label>
                </div>
                {/* <div class="col-md-2 mb-2">
                    <label for="validationServer02"> Name Of Teacher </label>
                </div> */}

            </div>
        </div>
    )
}

export default Attempteddiv

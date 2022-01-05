import React from 'react'
const AdminRequestDiv = (props) => {
    const handleDelete = (e) => {
        e.preventDefault();
        const Delete = async () => {
            try {
                const was = await fetch('http://127.0.0.1:8000/auth/admindeleteupdaterequest/'+props.element.id, {
                    method: 'Delete',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                props.setload(false);
                props.setload(true);

            }
            catch (error) {

            }
        }
        Delete();
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Approve = async () => {
            try {
                const was = await fetch('http://127.0.0.1:8000/auth/adminapproveupdaterequest/'+props.element.student_id, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(props.element)
                })
                const was2 = await fetch('http://127.0.0.1:8000/auth/admindeleteupdaterequest/'+props.element.id, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                const sa = await was.json();
                props.setload(false);
                props.setload(true);

            }
            catch (error) {

            }
        }
        Approve();
    }
    return (
        <>
        
            
                    <div className="card-header" id={"headingOne"+props.element.id}>
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={"#collapseOne"+props.element.id} aria-expanded="false" aria-controls={"collapseOne"+props.element.id}>
                                {props.element.email} : Details
                            </button> 
                            <button className="btn btn-link collapsed" type="button" onClick={handleDelete} aria-expanded="true" aria-controls={"collapseOne"+props.element.id}>
                                Delete
                            </button>
                            <button className="btn btn-link collapsed" type="button" onClick={handleSubmit} aria-expanded="true" aria-controls={"collapseOne"+props.element.id}>
                                Approve
                            </button>
                        </h5>
                    </div>

                    <div id={"collapseOne"+props.element.id} className="collapse" aria-labelledby={"headingOne"+props.element.id} data-parent="#accordionExample">
                        <div className="card-body">
                            <p>Name :{props.element.first_name}</p>
                            <p>Seat No :{props.element.user_name}</p>
                            <p>Stream : {props.element.stream}</p>
                            <p>Strem : {props.element.year}</p>
                        </div>
                        
                    </div>
                    
               
        </>
    )
}

export default AdminRequestDiv

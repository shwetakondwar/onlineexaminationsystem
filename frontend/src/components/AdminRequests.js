import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminRequestDiv from './AdminRequestDiv';
const AdminRequests = (props) => {
    const { state } = useLocation();
    const { email} = state;
    const [data, setdata] = useState([])
    const [load, setload] = useState(false);
    useEffect(() => {
        async function Updaterequests() {

            let response = await fetch('http://127.0.0.1:8000/auth/adminupdaterequests/'+email);
            let data = await response.json();
            setdata(data);
            setload(true);
            console.log(data);
        }
        Updaterequests();
    }, [email,load])
    return (
        <div className='abcd1'>
        <div className='container my-4'>
            <div className='container'>
                <div >
                    <p className="my-2"><h4>Requests :</h4></p>
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                        {
                        (load && data.length>0)  ? data.map((element) => (
                            <AdminRequestDiv key={element.id} setload={setload} showalert={props.showalert} element={element} />
                            )
                            )
                            : <p>Empty</p>
                        }
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default AdminRequests
